import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </>
  );
}
