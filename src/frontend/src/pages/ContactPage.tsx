import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Instagram,
  Loader2,
  MessageCircle,
  Send,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

export default function ContactPage() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    if (!message.trim()) e.message = "Message is required";
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
      await actor?.submitContactMessage({
        name,
        email,
        message,
        createdAt: BigInt(Date.now()),
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-black text-4xl uppercase text-brand-dark">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded" />
          <p className="text-gray-500 mt-3 text-sm">
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 shadow-card">
            {success ? (
              <div
                className="text-center py-8"
                data-ocid="contact.success_state"
              >
                <CheckCircle
                  size={56}
                  className="text-green-500 mx-auto mb-3"
                />
                <h3 className="font-black text-xl text-brand-dark mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.panel"
              >
                <h3 className="font-bold text-lg text-brand-dark uppercase tracking-wide">
                  Send a Message
                </h3>

                <div>
                  <Label
                    htmlFor="contact-name"
                    className="font-semibold text-sm uppercase tracking-wide text-brand-dark"
                  >
                    Name *
                  </Label>
                  <Input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-1"
                    data-ocid="contact.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-red-500 mt-1"
                      data-ocid="contact.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="contact-email"
                    className="font-semibold text-sm uppercase tracking-wide text-brand-dark"
                  >
                    Email *
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="mt-1"
                    data-ocid="contact.input"
                  />
                  {errors.email && (
                    <p
                      className="text-xs text-red-500 mt-1"
                      data-ocid="contact.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="contact-message"
                    className="font-semibold text-sm uppercase tracking-wide text-brand-dark"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="mt-1 min-h-32"
                    data-ocid="contact.textarea"
                  />
                  {errors.message && (
                    <p
                      className="text-xs text-red-500 mt-1"
                      data-ocid="contact.error_state"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-red hover:bg-red-700 text-white font-black uppercase tracking-wide rounded-full"
                  data-ocid="contact.submit_button"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-brand-beige rounded-2xl p-6">
              <h3 className="font-bold text-brand-dark uppercase tracking-wide mb-4">
                Quick Chat
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-3 font-bold text-sm transition-colors"
                  data-ocid="contact.primary_button"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
                <a
                  href="https://t.me/AKThumbnailStudio"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-3 font-bold text-sm transition-colors"
                  data-ocid="contact.secondary_button"
                >
                  <Send size={20} /> Chat on Telegram
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-bold text-brand-dark uppercase tracking-wide mb-4">
                Find Us Online
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <a
                    href="mailto:ak.thumbnailstudio@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-brand-red transition-colors"
                  >
                    <span className="text-brand-red font-bold">📧</span>{" "}
                    ak.thumbnailstudio@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-brand-orange transition-colors"
                  >
                    <Instagram size={16} className="text-brand-orange" />{" "}
                    @AKThumbnailStudio
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-brand-red transition-colors"
                  >
                    <Youtube size={16} className="text-brand-red" /> AK
                    Thumbnail Studio
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-brand-red to-brand-orange rounded-2xl p-6 text-white">
              <h3 className="font-bold uppercase tracking-wide mb-2">
                Response Time
              </h3>
              <p className="text-sm opacity-90">
                We typically respond within <strong>2 hours</strong> during
                business hours (9 AM – 9 PM IST).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
