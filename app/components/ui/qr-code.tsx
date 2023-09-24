import Image from 'next/image';

function QRCode() {
  return (
    <div className='flex flex-col items-center space-y-2 bg-[--color-white] text-center w-[320px] px-4 pt-4 pb-8 rounded-[20px]'>
      <Image
        src='/image-qr-code.png'
        alt='q r code'
        height={320}
        width={320}
        className='rounded-[20px]'
      />
      <h2 className='font-bold text-[--color-darkblue] text-2xl'>
        Improve your front-end skills by building projects
      </h2>
      <p className='font-normal text-[--color-grayishblue] leading-4 text-[15px] px-2'>
        Scan the QR Code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QRCode;
