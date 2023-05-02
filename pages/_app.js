import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
