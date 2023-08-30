import Image from "next/image";
import loader from "@/public/loader.svg";

function loading() {
  return (
    <div className="h-80  animate-pulse w-full flex items-center justify-center">
      <Image src={loader} alt="loading" />
    </div>
  );
}

export default loading;
