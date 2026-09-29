import Image from "next/image";
import { asset, cn } from "@/lib/utils";

/** Four-tile AURA lockup, cut out on transparent. */
export function AuraLogo({ className }: { className?: string }) {
  return (
    <Image
      src={asset("/art/aura/logo.png")}
      alt=""
      width={640}
      height={480}
      className={cn("h-10 w-auto rounded-xl bg-milk/95 p-1.5 shadow-sm", className)}
      aria-hidden
    />
  );
}
