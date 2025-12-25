import Image from "next/image";
import logoSrc from "@/public/runa-dark.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-1.5">
      <Image src={logoSrc} alt="Runa Logo" width={120} height={40} priority />
      <span className="text-base font-semibold">Runa</span>
    </div>
  );
};

export default Logo;
