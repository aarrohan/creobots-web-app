"use client";
import { signOut, useSession } from "next-auth/react";

export default function Content() {
  const session = useSession();

  return (
    <>
      {session.data?.user?.image && (
        <img
          src={session.data.user.image}
          alt=""
          className="mb-4 w-[80ox] h-[80ox] rounded-full"
        />
      )}

      {session.data?.user?.name && (
        <h1 className="mb-8 text-2xl text-center font-semibold">
          {session.data.user.name}
        </h1>
      )}

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="group relative active:scale-95 w-[110px] py-2 bg-red-400 rounded-full font-semibold text-[#111] duration-200"
      >
        <span className="relative z-10 w-full flex justify-center items-center gap-2">
          Logout
        </span>

        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-5px)] h-[calc(100%-5px)] bg-gradient-to-b from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 duration-200"></span>
      </button>
    </>
  );
}
