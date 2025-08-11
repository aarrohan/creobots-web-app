"use client";
import { signOut } from "next-auth/react";

export default function page() {
  return (
    <main className="min-h-[100svh] flex items-center">
      <div className="container max-w-[1024px] mx-auto px-5 flex flex-col items-center">
        <h1 className="mb-5 text-2xl text-center font-semibold">
          Coming soon, stay tuned!
        </h1>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="group relative active:scale-95 w-[120px] py-2.5 bg-red-400 rounded-full font-semibold text-[#111] duration-200"
        >
          <span className="relative z-10 w-full flex justify-center items-center gap-2">
            Logout
          </span>

          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-5px)] h-[calc(100%-5px)] bg-gradient-to-b from-white/75 to-transparent rounded-full opacity-0 group-hover:opacity-100 duration-200"></span>
        </button>
      </div>
    </main>
  );
}
