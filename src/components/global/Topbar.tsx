"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import creditCoinImg from "@/assets/images/brand/credit-coin.png";

export default function Topbar() {
  const [isClient, setIsClient] = useState<boolean>(false);

  const session = useSession();

  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative pb-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">
        {pathname === "/dashboard" && "Viral Thumbnails"}
        {pathname === "/dashboard/roadmap" && "Roadmap"}
      </h1>

      <div className="flex items-center gap-4">
        {isClient && session.data?.user?.name && session.data?.user?.image && (
          <>
            <div className="flex items-center gap-2">
              <Image src={creditCoinImg} alt="" className="w-[22px]" />

              <p>
                <span className="font-medium">20</span>{" "}
                <span className="font-light text-white/65">jobs left</span>
              </p>
            </div>

            <Image
              src={session.data.user.image ?? ""}
              alt=""
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
          </>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[rgba(255,255,255,0.025)] via-white/10 to-[rgba(255,255,255,0.025)]"></div>
    </div>
  );
}
