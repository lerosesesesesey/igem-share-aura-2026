import type { Metadata } from "next";
import Content from "@/content/dry-lab/software.mdx";
import { WikiMdxShell } from "@/components/site/wiki-mdx-shell";

export const metadata: Metadata = {
  title: "Software",
  description: "Signal processing, thresholds, and alert delivery for the AURA inline BioFET concept.",
};

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "analysis", label: "Analysis" },
  { id: "wiki", label: "Wiki" },
  { id: "reader-app", label: "Reader app" },
  { id: "license", label: "Licence" },
];

export default function Page() {
  return (
    <WikiMdxShell
      kicker="Dry Lab · Software"
      accent="pink"
      title="Signal, threshold & alert"
      lede="Software turns the BioFET's electrical response into a traceable warning for a phone or computer."
      current="/software"
      toc={TOC}
    >
      <Content />
    </WikiMdxShell>
  );
}
