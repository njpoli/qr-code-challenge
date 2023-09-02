import Image from "next/image";
import qrCode from "/image-qr-code.png";

function QRCode() {
  return (
    <div className="flex flex-col items-center space-y-2 bg-[--color-white] text-center w-[250px] px-3 pt-3 pb-8 rounded-lg">
      <Image
        src="/image-qr-code.png"
        alt="q r code"
        height={250}
        width={250}
        className="rounded-lg"
      />
      <h1 className="font-bold text-[--color-darkblue] text-lg">
        Improve your front-end skills by building projects
      </h1>
      <p className="font-normal text-[--color-grayishblue] leading-4 text-[15px]">
        Scan the QR Code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QRCode;
