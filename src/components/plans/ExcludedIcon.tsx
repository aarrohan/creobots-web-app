import { X } from "lucide-react";

export default function ExcludedIcon() {
  return (
    <div className="w-[15px] h-[15px] bg-red-400 rounded flex justify-center items-center opacity-50">
      <X size={13} strokeWidth={3} className="text-black" />
    </div>
  );
}
