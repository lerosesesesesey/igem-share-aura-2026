import type { Metadata } from "next";
import Engineering from "@/content/project/engineering.mdx";
import { WikiMdxShell } from "@/components/site/wiki-mdx-shell";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Five Design–Build–Test–Learn cycles: from microRNA selection through BioFET recognition, electronics, alerts, and inline integration.",
};

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "cycle-1", label: "Cycle 1 - Target" },
  { id: "cycle-2", label: "Cycle 2 - Recognition" },
  { id: "cycle-3", label: "Cycle 3 - BioFET" },
  { id: "cycle-4", label: "Cycle 4 - Alert" },
  { id: "cycle-5", label: "Cycle 5 - Integration" },
  { id: "dbtl", label: "DBTL wheel" },
  { id: "pipeline", label: "Pipeline" },
];

export default function EngineeringPage() {
  return (
    <WikiMdxShell
      kicker="Project · Engineering"
      accent="butter"
      title="Five cycles from miRNA to alert"
      lede="AURA's engineering runs through Design–Build–Test–Learn: select the target, capture it at a BioFET, process the signal, deliver an alert, and integrate the system with milking."
      current="/engineering"
      toc={TOC}
    >
      <Engineering />
    </WikiMdxShell>
  );
}
