import type { Metadata } from "next";
import Content from "@/content/dry-lab/hardware.mdx";
import { WikiMdxShell } from "@/components/site/wiki-mdx-shell";

export const metadata: Metadata = {
  title: "Hardware",
  description: "The AURA inline milk path, BioFET sensing surface, and electronics for parlour-friendly alerts.",
};

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "strip", label: "Inline milk path" },
  { id: "reader", label: "BioFET & electronics" },
  { id: "env", label: "Robustness" },
  { id: "integration", label: "Workflow" },
];

export default function Page() {
  return (
    <WikiMdxShell
      kicker="Dry Lab · Hardware"
      accent="butter"
      title="Inline sensor & BioFET"
      lede="A milk-line sampling path, a microRNA-sensitive BioFET, and electronics that turn detection into an alert."
      current="/hardware"
      toc={TOC}
    >
      <Content />
    </WikiMdxShell>
  );
}
