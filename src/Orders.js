import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import {
  collection,
  doc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import Order from "./Order.js";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user?.uid) {
      const userRef = doc(db, "users", user?.uid);
      const ordersQuery = query(
        collection(userRef, "orders"),
        orderBy("created", "desc")
      );
      // This is the correct way to listen for changes using the new SDK
      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Return the unsubscribe function to clean up the listener
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
