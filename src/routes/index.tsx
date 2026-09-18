import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Education } from "@/components/portfolio/education";
import { Projects } from "@/components/portfolio/projects";
import { Certificates } from "@/components/portfolio/certificates";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

const SITE_URL = "https://asifansari-portfolio.netlify.app";

const TITLE =
  "Md Asif | Frontend Developer & React.js Developer | India";

const DESC =
  "Md Asif is a Frontend Developer with 3+ years of experience in React.js and WordPress development, building responsive and scalable web applications using JavaScript, Tailwind CSS, Redux Toolkit, and REST APIs.";

const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Md Asif",
  url: SITE_URL,
  jobTitle: "Frontend Developer",
  description:
    "Frontend Developer with 3+ years of professional experience specializing in React.js and WordPress development.",
  image: `${SITE_URL}/assets/mdasif.jpeg`,

  knowsAbout: [
    "Frontend Development",
    "React.js",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Redux Toolkit",
    "REST APIs",
    "WordPress",
    "Responsive Web Design",
    "Web Application Development",
  ],

  sameAs: [
    "https://www.linkedin.com/in/imdasif",
    "https://github.com/imdasif786",
  ],
};

const profilePageSchema = {
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profile`,
  url: SITE_URL,
  name: TITLE,
  description: DESC,
  mainEntity: {
    "@id": `${SITE_URL}/#person`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [personSchema, profilePageSchema],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: TITLE,
      },
      {
        name: "description",
        content: DESC,
      },

      // Open Graph
      {
        property: "og:title",
        content: TITLE,
      },
      {
        property: "og:description",
        content: DESC,
      },
      {
        property: "og:type",
        content: "profile",
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/assets/mdasif.jpeg`,
      },

      // Twitter / X
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: TITLE,
      },
      {
        name: "twitter:description",
        content: DESC,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/assets/mdasif.jpeg`,
      },
    ],

    links: [
      {
        rel: "canonical",
        href: SITE_URL,
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}