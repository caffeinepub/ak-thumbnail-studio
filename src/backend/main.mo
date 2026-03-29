import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Nat "mo:core/Nat";

actor {
  // Order Types
  type OrderStatus = {
    #pending;
    #inProgress;
    #delivered;
  };

  type PaymentOption = {
    #paypal;
    #creditcard;
    #crypto;
  };

  type Order = {
    id : Nat;
    name : Text;
    email : Text;
    videoLink : Text;
    style : Text;
    thumbnailText : Text;
    deliveryTime : Nat;
    paymentOption : PaymentOption;
    orderStatus : OrderStatus;
    createdAt : Time.Time;
  };

  // Contact Message Type
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    createdAt : Time.Time;
  };

  // Persistent Storage
  let orders = Map.empty<Nat, Order>();
  let contactMessages = List.empty<ContactMessage>();

  // Public Functions

  // Submit a new order
  public shared ({ caller }) func submitOrder(order : Order) : async () {
    if (orders.containsKey(order.id)) {
      Runtime.trap("Order with this ID already exists");
    };
    orders.add(order.id, order);
  };

  // Get all orders sorted by id
  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray();
  };

  // Submit a contact message
  public shared ({ caller }) func submitContactMessage(message : ContactMessage) : async () {
    contactMessages.add(message);
  };

  // Get all contact messages
  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.toArray();
  };
};
