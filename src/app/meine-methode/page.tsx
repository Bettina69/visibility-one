import type { Metadata } from "next";
import { Method } from "@/components/sections/method";
import { WorkflowPhases } from "@/components/sections/workflow-phases";

export const metadata: Metadata = {
  title: "Meine Methode",
  description:
    "Strategie, Struktur, Content, Technik, Monitoring – wie ich Websites für Google und KI-Sichtbarkeit gleichzeitig optimiere.",
};

export default function MeineMethodePage() {
  return (
    <>
      <Method />
      <WorkflowPhases />
    </>
  );
}
