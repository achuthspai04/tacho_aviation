"use client";
import dynamic from "next/dynamic";

const Help = dynamic(() => import("@/components/Help"), {
  ssr: false,
  loading: () => <div style={{ minHeight: '52vh', backgroundColor: '#17314F' }} />,
});

export default function HelpWrapper() {
  return <Help />;
}
