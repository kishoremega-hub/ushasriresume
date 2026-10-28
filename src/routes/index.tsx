import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Experience, Expertise, Pipeline, Projects, Strengths } from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const TITLE = "Ushasri Garimella | IT Analyst & DevOps Engineer";
const DESC =
  "Explore the professional portfolio of Ushasri Garimella, an experienced IT Analyst specializing in DevOps, Jenkins CI/CD, AWS, automation, and software quality engineering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ushasri Garimella",
          jobTitle: "IT Analyst & DevOps Engineer",
          worksFor: { "@type": "Organization", name: "Tata Consultancy Services" },
          email: "mailto:usha26sree@gmail.com",
          alumniOf: "M.V.G.R. College of Engineering",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Pipeline />
        <Experience />
        <Projects />
        <Education />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
