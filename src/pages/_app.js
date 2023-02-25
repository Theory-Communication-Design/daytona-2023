import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "@/lib/ga";
import "@/styles/globals.css";
import bg from 'public/img/background.png';
import Foot from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  });

  return(<> 
  
  <main className="main" style={{
      backgroundImage: `url(${bg.src})`,
      }}>
        <div className="wrapper">

  <Component {...pageProps} />

  </div>
  <Foot/>
  </main>
  </>)}
