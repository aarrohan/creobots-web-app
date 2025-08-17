import { Check } from "lucide-react";

export default function IncludedIcon() {
  return (
    <div className="w-[15px] h-[15px] bg-green-300 rounded flex justify-center items-center">
      <Check size={13} strokeWidth={3} className="text-black" />
    </div>
  );
}
