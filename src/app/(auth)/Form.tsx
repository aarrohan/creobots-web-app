"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import iconColoredWhiteImg from "@/assets/images/brand/icon/icon-colored-white.svg";
import Link from "next/link";
import usersImg from "@/assets/images/users.png";

export default function Form() {
  return (
    <div className="w-full max-w-[450px] py-14 bg-gradient-to-b from-white/10 to-transparent rounded-xl flex flex-col items-center">
      <Link href={"/"} className="mb-12">
        <Image src={iconColoredWhiteImg} alt="" className="w-[75px]" />
      </Link>

      <h1 className="mb-1 text-2xl font-semibold">Welcome to Creobots</h1>

      <p className="mb-10 font-light text-white/65">Login or signup</p>

      <button
        onClick={() => signIn("google")}
        className="group relative active:scale-95 w-[300px] py-2.5 bg-gradient rounded-lg font-semibold text-black duration-200"
      >
        <span className="relative z-10 w-full flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="none"
            viewBox="0 0 19 19"
          >
            <path
              fill="#111"
              fillRule="evenodd"
              d="M18.983 9.404c0-.652-.059-1.279-.167-1.88h-8.66v3.556h4.948a4.23 4.23 0 0 1-1.835 2.776v2.307h2.972c1.739-1.6 2.742-3.958 2.742-6.759"
              clipRule="evenodd"
            ></path>
            <path
              fill="#111"
              fillRule="evenodd"
              d="M10.155 18.39c2.483 0 4.565-.823 6.086-2.227l-2.972-2.307c-.823.552-1.876.877-3.114.877-2.395 0-4.422-1.617-5.145-3.79H1.938v2.382a9.19 9.19 0 0 0 8.217 5.066"
              clipRule="evenodd"
            ></path>
            <path
              fill="#111"
              fillRule="evenodd"
              d="M5.01 10.943a5.5 5.5 0 0 1-.288-1.748c0-.606.104-1.195.288-1.747V5.066H1.938a9.2 9.2 0 0 0-.978 4.13c0 1.483.355 2.888.978 4.129z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#111"
              fillRule="evenodd"
              d="M10.155 3.657c1.35 0 2.563.464 3.516 1.375l2.637-2.637C14.715.911 12.634 0 10.155 0a9.19 9.19 0 0 0-8.217 5.066L5.01 7.448c.723-2.173 2.75-3.79 5.145-3.79"
              clipRule="evenodd"
            ></path>
          </svg>
          Continue with Google
        </span>

        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-5px)] h-[calc(100%-5px)] bg-gradient-to-b from-white/75 to-transparent rounded-md opacity-0 group-hover:opacity-100 duration-200"></span>
      </button>

      <p className="mt-3 text-sm font-light text-white/50">
        + more coming soon
      </p>

      <Image src={usersImg} alt="" className="mt-12 w-[180px]" />
      <p className="mt-2">Trusted by 1,000+ creators globally</p>
    </div>
  );
}
