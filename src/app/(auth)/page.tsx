import type { Metadata } from "next";
import Form from "./Form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: `Get Started - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <main className="min-h-[100svh] flex items-center">
      <div className="container max-w-[1024px] mx-auto px-5 flex justify-center">
        <Form />
      </div>
    </main>
  );
}
