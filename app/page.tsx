import dynamic from "next/dynamic";

// Import dynamic to avoid SSR issues if any client-only code appears.
const Landing = dynamic(() => import("../components/TDLRecupPointsLanding"), { ssr: true });

export default function Page() {
  return <Landing />;
}
