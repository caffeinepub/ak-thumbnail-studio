import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, QrCode } from "lucide-react";
import { useState } from "react";
import { PaymentOption } from "../backend";
import type { OrderStatus } from "../backend";
import { useActor } from "../hooks/useActor";

export default function OrderPage() {
  const { actor } = useActor();

  // Payment step state
  const [txId, setTxId] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  // Order form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [style, setStyle] = useState("");
  const [thumbnailText, setThumbnailText] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validatePayment() {
    return txId.trim().length > 0 && paymentConfirmed;
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    if (!videoLink.trim()) e.videoLink = "Video link or topic is required";
    if (!style) e.style = "Please select a style";
    if (!thumbnailText.trim()) e.thumbnailText = "Thumbnail text is required";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await actor?.submitOrder({
        id: BigInt(Date.now()),
        orderStatus: "pending" as OrderStatus,
        paymentOption: PaymentOption.creditcard,
        name,
        createdAt: BigInt(Date.now()),
        deliveryTime: 1n,
        videoLink,
        email,
        style,
        thumbnailText: `${thumbnailText} [UPI Tx: ${txId}]`,
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="py-20 px-4" data-ocid="order.success_state">
        <div className="container mx-auto max-w-lg text-center">
          <div className="bg-white rounded-3xl p-10 shadow-card border border-green-100">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
            <h2 className="font-black text-2xl uppercase text-brand-dark mb-2">
              Order Received! 🎉
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Your order has been received! We'll start working on your
              thumbnail within 2 hours. Expected delivery:{" "}
              <strong>within 24 hours.</strong>
            </p>
            <ol className="text-left text-sm text-gray-700 space-y-3 mb-8">
              <li className="flex gap-2">
                <span className="font-bold text-brand-red">1.</span> We've
                confirmed your payment and order.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-red">2.</span> Our
                designer starts work within 2 hours.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-red">3.</span> Final
                thumbnail delivered to your email within 24 hours.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-red">4.</span> Request
                revisions if needed — we're here to help!
              </li>
            </ol>
            <p className="text-xs text-gray-400">
              Questions? WhatsApp us:{" "}
              <a
                href="https://wa.me/919876543210"
                className="text-brand-red font-semibold"
              >
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="font-black text-4xl uppercase text-brand-dark">
            Place Your Order
          </h1>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded" />
          <p className="text-gray-500 mt-3 text-sm">
            ₹200 per thumbnail · 24-hour delivery · Pay first, then submit
            details
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div
            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wide ${
              !paymentDone ? "text-brand-red" : "text-green-500"
            }`}
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                !paymentDone
                  ? "bg-brand-red text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {paymentDone ? "✓" : "1"}
            </span>
            Pay ₹200
          </div>
          <div className="w-10 h-0.5 bg-gray-200" />
          <div
            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wide ${
              paymentDone ? "text-brand-red" : "text-gray-400"
            }`}
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                paymentDone
                  ? "bg-brand-red text-white"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              2
            </span>
            Order Details
          </div>
        </div>

        {/* Step 1: Payment */}
        {!paymentDone && (
          <div
            className="bg-white rounded-3xl p-8 shadow-card"
            data-ocid="order.panel"
          >
            <div className="flex items-center gap-2 mb-6">
              <QrCode size={22} className="text-brand-red" />
              <h2 className="font-black text-xl uppercase text-brand-dark">
                Complete Payment
              </h2>
            </div>

            {/* QR Code placeholder */}
            <div className="flex flex-col items-center mb-6">
              <div
                className="w-48 h-48 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center gap-2 mb-3"
                data-ocid="order.canvas_target"
              >
                <QrCode size={40} className="text-gray-300" />
                <p className="text-xs text-gray-400 font-semibold text-center px-3">
                  Payment QR Code
                </p>
                <p className="text-sm font-black text-brand-red">
                  ₹200 via UPI
                </p>
              </div>
              <p className="text-sm text-gray-600 text-center max-w-xs">
                Scan QR code and pay <strong>₹200</strong> via UPI / Paytm /
                GPay
              </p>
            </div>

            {/* UPI ID hint */}
            <div className="bg-brand-beige rounded-xl p-4 mb-6 text-sm text-center">
              <p className="text-gray-600">
                UPI ID:{" "}
                <strong className="text-brand-dark">
                  ak.thumbnailstudio@upi
                </strong>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Save screenshot of payment for reference
              </p>
            </div>

            {/* Transaction ID input */}
            <div className="mb-5">
              <Label
                htmlFor="tx-id"
                className="font-semibold text-brand-dark text-sm uppercase tracking-wide"
              >
                UPI Transaction ID / Reference Number *
              </Label>
              <Input
                id="tx-id"
                value={txId}
                onChange={(e) => setTxId(e.target.value)}
                placeholder="e.g. 123456789012"
                className="mt-1"
                data-ocid="order.input"
              />
              <p className="text-xs text-gray-400 mt-1">
                Enter the 12-digit UPI transaction ID from your payment app
              </p>
            </div>

            {/* Confirmation checkbox */}
            <label
              className="flex items-start gap-3 cursor-pointer mb-6 select-none"
              data-ocid="order.checkbox"
            >
              <input
                type="checkbox"
                checked={paymentConfirmed}
                onChange={(e) => setPaymentConfirmed(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-brand-red cursor-pointer"
              />
              <span className="text-sm text-gray-700">
                I have completed the payment of <strong>₹200</strong> and the
                transaction ID entered above is correct.
              </span>
            </label>

            <Button
              type="button"
              disabled={!validatePayment()}
              onClick={() => setPaymentDone(true)}
              className="w-full bg-brand-red hover:bg-red-700 disabled:opacity-40 text-white font-black uppercase tracking-widest rounded-full py-3 text-sm"
              data-ocid="order.primary_button"
            >
              Continue to Order Form →
            </Button>
          </div>
        )}

        {/* Step 2: Order Form */}
        {paymentDone && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-card space-y-5"
            data-ocid="order.panel"
          >
            {/* Payment confirmed badge */}
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-2">
              <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-700 font-semibold">
                Payment confirmed · Tx ID:{" "}
                <span className="font-mono">{txId}</span>
              </p>
            </div>

            <div>
              <Label
                htmlFor="order-name"
                className="font-semibold text-brand-dark text-sm uppercase tracking-wide"
              >
                Your Name *
              </Label>
              <Input
                id="order-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="mt-1"
                data-ocid="order.input"
              />
              {errors.name && (
                <p
                  className="text-xs text-red-500 mt-1"
                  data-ocid="order.error_state"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="order-email"
                className="font-semibold text-brand-dark text-sm uppercase tracking-wide"
              >
                Email *
              </Label>
              <Input
                id="order-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="mt-1"
                data-ocid="order.input"
              />
              {errors.email && (
                <p
                  className="text-xs text-red-500 mt-1"
                  data-ocid="order.error_state"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="order-video"
                className="font-semibold text-brand-dark text-sm uppercase tracking-wide"
              >
                YouTube Video Link / Topic *
              </Label>
              <Input
                id="order-video"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                placeholder="e.g. https://youtube.com/... or 'Gaming tips for beginners'"
                className="mt-1"
                data-ocid="order.input"
              />
              {errors.videoLink && (
                <p
                  className="text-xs text-red-500 mt-1"
                  data-ocid="order.error_state"
                >
                  {errors.videoLink}
                </p>
              )}
            </div>

            <div>
              <Label className="font-semibold text-brand-dark text-sm uppercase tracking-wide">
                Thumbnail Style *
              </Label>
              <Select onValueChange={setStyle}>
                <SelectTrigger className="mt-1" data-ocid="order.select">
                  <SelectValue placeholder="Select a style" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Aggressive",
                    "Funny",
                    "Motivational",
                    "Gaming",
                    "Tech",
                    "Food",
                    "Other",
                  ].map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.style && (
                <p
                  className="text-xs text-red-500 mt-1"
                  data-ocid="order.error_state"
                >
                  {errors.style}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="order-text"
                className="font-semibold text-brand-dark text-sm uppercase tracking-wide"
              >
                Text for Thumbnail *
              </Label>
              <Textarea
                id="order-text"
                value={thumbnailText}
                onChange={(e) => setThumbnailText(e.target.value)}
                placeholder="e.g. '10 KILLS IN 1 MINUTE!'"
                className="mt-1 min-h-24"
                data-ocid="order.textarea"
              />
              {errors.thumbnailText && (
                <p
                  className="text-xs text-red-500 mt-1"
                  data-ocid="order.error_state"
                >
                  {errors.thumbnailText}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="order-ref"
                className="font-semibold text-brand-dark text-sm uppercase tracking-wide"
              >
                Reference Image (Optional)
              </Label>
              <input
                id="order-ref"
                type="file"
                accept="image/*"
                className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-brand-red/10 file:text-brand-red hover:file:bg-brand-red hover:file:text-white file:transition-colors"
                data-ocid="order.upload_button"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-red hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-full py-3 text-sm"
              data-ocid="order.submit_button"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Order 🚀"
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
