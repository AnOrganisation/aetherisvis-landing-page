"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";
import { usePathname } from "next/navigation"; // Updated to use `usePathname`

const AnalyticsProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    ReactGA.initialize("G-7STZJDY5WS");

    // Track page view on pathname change
    ReactGA.send({ hitType: "pageview", page: pathname });
  }, [pathname]);

  return null; // No UI output
};

export default AnalyticsProvider;
