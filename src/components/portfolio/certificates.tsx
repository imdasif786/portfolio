import { Award, ExternalLink, FileText } from "lucide-react";
import { Reveal } from "./reveal";
import certAsset from "@/assets/react-certificate.pdf";
import resumeAsset from "@/assets/Md_Asif_Resume.pdf";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-cyan)]">Certificates & Resume</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>
            Credentials & <span className="text-gradient">learning</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Certificate */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur shadow-elegant">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background">
                <iframe
                  src={`${certAsset}#view=FitH&toolbar=0&navpanes=0`}
                  title="React.js Certificate"
                  className="h-full w-full"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/60" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold">React.js Certificate</h3>
                    <p className="text-xs text-muted-foreground">Issued to Asif Ansari · Cert No. 31122022884458824</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                  <div><span className="font-semibold text-foreground">Student ID:</span> 2023/33821</div>
                  <div><span className="font-semibold text-foreground">Duration:</span> Aug 2023 – Mar 2024</div>
                </div>
                <a
                  href={certAsset}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> View Certificate
                </a>
              </div>
            </div>
          </Reveal>

          {/* Resume */}
          <Reveal delay={120}>
            <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur shadow-elegant">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background">
                <iframe
                  src={`${resumeAsset}#view=FitH&toolbar=0&navpanes=0`}
                  title="Md Asif Resume"
                  className="h-full w-full"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/60" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold">Resume</h3>
                    <p className="text-xs text-muted-foreground">Md Asif · Frontend Developer</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Complete work history, skills and education.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={resumeAsset}
                    download="Md_Asif_Resume.pdf"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
                  >
                    <FileText className="h-3.5 w-3.5" /> Download Resume
                  </a>
                  <a
                    href={resumeAsset}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:border-primary/60"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Open in Tab
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}