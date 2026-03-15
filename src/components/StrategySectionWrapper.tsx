"use client";
import dynamic from "next/dynamic";

const StrategySection = dynamic(() => import("@/components/StrategySection"), {
  ssr: false,
  loading: () => <div style={{ minHeight: '95vh', backgroundColor: '#F2F6F9' }} />,
});

export default function StrategySectionWrapper() {
  return <StrategySection />;
}
