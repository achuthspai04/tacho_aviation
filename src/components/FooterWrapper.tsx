"use client";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div style={{ minHeight: '360px', backgroundColor: '#00488C' }} />,
});

export default function FooterWrapper() {
  return <Footer />;
}
