"use client";
import { useEffect, useRef } from "react";
import { initializePaddle, Paddle } from "@paddle/paddle-js";

declare global {
  interface Window {
    Paddle?: Paddle;
  }
}

export default function PaddleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initRef = useRef(false);

  useEffect(() => {
    (async () => {
      if (initRef.current) return;
      initRef.current = true;

      const paddle = await initializePaddle({
        environment:
          process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
            ? "production"
            : "sandbox",
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
        eventCallback: (event) => {
          console.log("Paddle event", event);
        },
      });

      (window as Window).Paddle = paddle;
    })();
  }, []);

  return <>{children}</>;
}
