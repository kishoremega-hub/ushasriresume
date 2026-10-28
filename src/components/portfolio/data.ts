import {
  GitBranch, Package, Workflow, ShieldCheck, Archive, Rocket, Cloud,
  Infinity as InfinityIcon, Server, Users, Wrench, Bug, Lightbulb, BookOpen, Globe2, UsersRound,
} from "lucide-react";

export const EMAIL = "usha26sree@gmail.com";
// Placeholders until real profile URLs are provided.
export const LINKEDIN_URL: string | null = null;
export const GITHUB_URL: string | null = null;

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "pipeline", label: "DevOps Pipeline" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const ROLES = ["IT Analyst", "DevOps Engineer", "CI/CD Specialist", "Scrum Practitioner"];

export const STATS = [
  { value: 9, suffix: "+", label: "Years of IT Experience" },
  { value: 8, suffix: "", label: "Projects Delivered Through Jenkins CI/CD" },
  { value: 4, suffix: "", label: "Years Span for Those 8 CI/CD Deliveries" },
  { value: 2, suffix: "", label: "Major Enterprise Client Engagements" },
];

export const ABOUT_CARDS = [
  { icon: InfinityIcon, title: "Automation & Continuous Delivery", text: "Jenkins pipelines, build verification and end-to-end automation of builds and deployments." },
  { icon: Server, title: "Cloud Infrastructure & Reliability", text: "AWS provisioning and resource management, VMware and Linux-based virtual environments." },
  { icon: Users, title: "Cross-functional Collaboration", text: "Working with international stakeholders, including an onsite engagement in Pagani, Italy." },
];

export const SKILLS = [
  { icon: Workflow, title: "DevOps & CI/CD", items: ["Jenkins", "Maven", "Git", "Gerrit", "SonarQube", "Ansible", "Nexus", "CI/CD Pipeline Automation"] },
  { icon: Cloud, title: "Cloud & Infrastructure", items: ["Amazon Web Services (AWS)", "VMware", "Linux", "Virtual Environments", "Infrastructure Provisioning", "Resource Management"] },
  { icon: Wrench, title: "Development & Collaboration", items: ["Eclipse", "Jira", "Kanban", "Rational Team Concert", "Agile/Scrum Practices", "Source Code Management"] },
  { icon: Bug, title: "Testing & Quality Assurance", items: ["Functional Testing", "Regression Testing", "Integration Testing", "UI Testing", "API / Service Testing", "TestNG", "SoapUI", "Database Validation", "Test Case Design"] },
];

export const PIPELINE = [
  { icon: GitBranch, stage: "Source Control", tools: "Git / Gerrit", text: "Code management, branching, tagging, and code reviews." },
  { icon: Package, stage: "Build", tools: "Maven", text: "Automated application builds and dependency management." },
  { icon: Workflow, stage: "Continuous Integration", tools: "Jenkins", text: "Automated build orchestration and pipeline execution." },
  { icon: ShieldCheck, stage: "Quality Checks", tools: "SonarQube / TestNG", text: "Code quality verification and automated testing." },
  { icon: Archive, stage: "Artifact Management", tools: "Nexus", text: "Artifact and dependency management." },
  { icon: Rocket, stage: "Deployment", tools: "Jenkins / Ansible", text: "Automated deployment workflows." },
  { icon: Cloud, stage: "Infrastructure", tools: "AWS / Linux", text: "Cloud resource provisioning and application environments." },
];

export const TCS_HIGHLIGHTS = [
  "Hands-on CI/CD automation and enterprise application support",
  "Jenkins-based build and deployment pipelines",
  "AWS resource provisioning and virtual environments",
  "Git repository management, branching, and code reviews",
  "Software testing and defect management",
  "Collaboration with international stakeholders",
  "Development of an internal repository tracking application",
];

export const ENGAGEMENTS = [
  {
    client: "Ericsson",
    domain: "Telecom Domain",
    role: "IT Analyst",
    period: "May 2017 onward (per resume)",
    location: "Italy",
    points: [
      "Supported the Ericsson APG43L application built on Linux.",
      "Worked on application enhancements and customer trouble reports.",
      "Contributed to environments supporting the evolution from 4G to 5G, virtualization, and cloud technologies.",
      "Worked with Jenkins, Git, Maven, Gerrit, SonarQube, AWS, and VMware.",
      "Supported CI/CD automation and build verification.",
      "Participated in code reviews and repository management.",
      "Collaborated directly with stakeholders during an onsite visit to Pagani, Italy.",
      "Developed an internal repository tracking tool.",
    ],
  },
  {
    client: "Liberty Mutual",
    domain: "Insurance Domain",
    role: "Test Engineer",
    period: "December 2014 – February 2017",
    location: "USA",
    points: [
      "Performed functional, regression, UI, service, and database testing.",
      "Designed and reviewed test cases.",
      "Worked with SOAP and REST service testing.",
      "Used SoapUI, Informatica, Rational Team Concert, and DB Visualizer.",
      "Participated in defect management and stakeholder discussions.",
      "Shared DevOps knowledge with team members.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Enterprise CI/CD Automation",
    category: "DevOps / Automation",
    icon: Workflow,
    description: "Contributed to automated build, integration, quality verification, and deployment workflows using Jenkins and supporting DevOps tools.",
    role: "Owned CI/CD activities for the project: pipeline execution, build verification and repository management.",
    highlights: [
      "Eight projects delivered through Jenkins CI/CD pipelines over four years",
      "Automated build and deployment processes",
      "Git-based source control",
      "Maven and SonarQube integration",
    ],
    tags: ["Jenkins", "Git", "Maven", "SonarQube", "Nexus"],
  },
  {
    title: "Ericsson Telecom Platform",
    category: "Telecom / Cloud / Linux",
    icon: Globe2,
    description: "Supported and enhanced Ericsson's Linux-based APG43L platform, including work associated with 5G evolution, virtualization, and cloud environments.",
    role: "IT Analyst handling trouble reports, enhancements, node installation in AWS / VMware environments and code reviews.",
    highlights: [
      "Platform evolution from 4G to 5G, virtualization and cloud",
      "Customer trouble reports and new enhancements",
      "Node installation and maintenance in virtual environments",
      "Onsite collaboration in Pagani, Italy",
    ],
    tags: ["Linux", "AWS", "VMware", "Jenkins", "Git", "Gerrit"],
  },
  {
    title: "Internal Repository Tracking Tool",
    category: "Internal Tool Development",
    icon: Lightbulb,
    description: "Independently developed a repository tracking application to support team coordination and repository tracking activities.",
    role: "Self-initiated: identified the need, built the tool on her own interest and contributed it to the team.",
    highlights: [
      "Personal initiative beyond assigned work",
      "Solved a real team coordination problem",
      "Adopted by the team for tracking purposes",
    ],
    tags: ["Initiative", "Problem Solving", "Team Contribution"],
  },
  {
    title: "Insurance Application Quality Assurance",
    category: "Software Testing",
    icon: ShieldCheck,
    description: "Supported software quality for an enterprise insurance application through service, UI, regression, functional, and database testing.",
    role: "Test Engineer designing and executing test cases, testing SOAP/REST services and managing defects.",
    highlights: [
      "Test case design, review and execution",
      "SOAP and REST service testing",
      "Database validation",
      "Defect management with stakeholders",
    ],
    tags: ["SoapUI", "RTC", "Informatica", "DB Visualizer"],
  },
];

export const CERTS = [
  { name: "ISTQB", note: "Listed in resume" },
  { name: "SoapUIPro", note: "Listed in resume" },
  { name: "SOAP UI Foundation-level course", note: "Referenced in resume" },
];

export const ACADEMICS = [
  { level: "Intermediate", school: "Narayana Junior College, Vizianagaram", year: "2010", score: "95.5%" },
  { level: "SSC", school: "Vijnana Bharathi School of B.V.K., Vizianagaram", year: "2008", score: "91.5%" },
];

export const STRENGTHS = [
  { icon: Wrench, title: "Problem Solving", text: "Troubleshooting, root-cause analysis, and issue resolution." },
  { icon: BookOpen, title: "Continuous Learning", text: "Curiosity-driven development and exploration of emerging technologies." },
  { icon: Globe2, title: "Global Collaboration", text: "Experience working with international clients and onsite stakeholders." },
  { icon: UsersRound, title: "Agile Teamwork", text: "Project meetings, risk discussions, defect tracking, and collaborative delivery." },
];
