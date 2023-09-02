import Footer from "./components/ui/footer";
import QRCode from "./components/ui/qr-code";

export default function Page() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-screen"
        role="main"
      >
        <QRCode />
        <Footer />
      </div>
    </>
  );
}
