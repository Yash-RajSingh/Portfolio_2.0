import resume from "@assets/Yash-Raj-Singh-Resume.pdf";
import simpleresume from "@assets/projects/simpleresume.png";
import overwatch from "@assets/projects/overwatch.webp";
import ensemble from "@assets/projects/ensemble.webp";
import coonconvert from "@assets/projects/coonconvert.webp";
import aceWebsite from "@assets/projects/ace-website.webp";
import internsahara from "@assets/projects/internsahara.webp";

export const PROFILE = {
  name: "Yash Raj Singh",
  email: "yashraj45202@gmail.com",
  github: "https://github.com/Yash-RajSingh",
  linkedin: "https://www.linkedin.com/in/yash-rajsingh",
  resume,
};

export const HEADER = {
  logo: "</>",
  github: { label: "GitHub", href: PROFILE.github },
  themeIcon: { light: "☀", dark: "☾" },
  themeToggleAria: "Toggle colour theme",
};

export const HERO = {
  status: {
    desktop: ["Senior Software Engineer · 3+ years", "Open to work"],
    mobile: ["Senior Software Engineer", "3+ years building for the web", "Open to work"],
  },
  titleBefore: "I engineer software that",
  titleHighlight: "scales",
  titleAfter: ".",
  description:
    "I'm a software engineer and technophile who knows the modern web inside out. I build beautiful, functional applications that hold up in production, and I'll take on any problem and build any wonder you'd like -",
  descriptionShort:
    "A technophile who builds beautiful, production-ready apps. Bring me any problem, any wonder you'd like -",
  descriptionHighlight: "the wilder, the better.",
  stack: ["React", "TypeScript", "Node.js", "Micro-frontends", "WebSockets", "Jest"],
  resumeCta: { label: "Resume", href: PROFILE.resume },
};

type PivotCell = boolean | string | null;

export const PIVOT_PANEL = {
  caption: "<PivotPanel /> — a component I shipped. try it",
  captionTouch: "<PivotPanel /> · tap a field",
  footer: "Drag · Drop · Re-render in <16ms",
  rowsLabel: "Rows",
  colsLabel: "Cols",
  dropHint: "Drop here",
  defaultView: "projects",
  views: [
    {
      id: "experience",
      cols: "Stack",
      columns: ["Company", "React", "TS", "Years"],
      rows: [
        { name: "Impact Analytics", cells: [true, true, "3+"] },
        { name: "SwitchLabs", cells: [true, false, "0.25"] },
        { name: "ACE", cells: [true, false, "2.5"] },
      ] as { name: string; cells: PivotCell[] }[],
    },
    {
      id: "awards",
      cols: "Result",
      columns: ["Award", "Hackathon", "Result"],
      rows: [
        { name: "Hack JMI", cells: [true, "2nd"] },
        { name: "Spot Award", cells: [false, "Q4 '23"] },
        { name: "Elytra Hacks", cells: [true, "Top 10"] },
      ] as { name: string; cells: PivotCell[] }[],
    },
    {
      id: "projects",
      cols: "Stack",
      columns: ["Project", "React", "TS", "Backend"],
      rows: [
        { name: "SimpleResume", cells: [true, true, null] },
        { name: "OverWatch", cells: [true, false, "Flask"] },
        { name: "Ensemble", cells: [true, false, "Flask"] },
      ] as { name: string; cells: PivotCell[] }[],
    },
  ],
};

export const STATS = [
  { value: "3+ yrs", label: "Shipping production software" },
  { value: "40+", label: "Enterprise clients using what I build" },
  { value: "6", label: "Side projects live on the web" },
  { value: "7", label: "Awards and hackathon finishes" },
];

export const TIMELINE = {
  id: "work",
  title: "Where I've shipped",
  hint: "Hover a bar",
  toggleAria: "Show details",
  startYear: 2022,
  endYear: 2027,
  jobs: [
    {
      role: "Intern",
      company: "SwitchLabs",
      shortLabel: "Intern @ SL",
      start: "2022-08",
      end: "2022-11",
      period: "Aug 2022 → Oct 2022",
      tone: "muted" as const,
      points: [
        "Built an analytics system tracking user activity, boosting engagement by ~15%",
        "Rebuilt the company website from HTML/CSS/JS to React",
      ],
      stack: ["React", "JavaScript"],
    },
    {
      role: "Software Engineer Trainee",
      company: "Impact Analytics",
      shortLabel: "Trainee @ IA",
      start: "2022-11",
      end: "2023-08",
      period: "Nov 2022 → Jul 2023",
      tone: "muted" as const,
      points: [
        "Delivered 18+ production-quality product demos that supported client wins and renewals",
        "Built pixel-perfect, responsive UIs from Figma with React and MUI",
      ],
      stack: ["React", "MUI", "Figma"],
    },
    {
      role: "Software Engineer",
      company: "Impact Analytics",
      shortLabel: "SE @ IA",
      start: "2023-08",
      end: "2026-01",
      period: "Aug 2023 → Dec 2025",
      tone: "soft" as const,
      points: [
        "Led the frontend modernization of the core micro-frontend platform serving 40+ enterprise clients",
        "Co-built a metadata-driven platform that generates apps from JSON, cutting setup time by 70%",
        "Built reusable MUI, AG Grid and Highcharts components, cutting feature effort by ~20%",
        "Shipped UI fixes that helped onboard 8+ enterprise clients after migration",
      ],
      stack: ["React", "TypeScript", "MUI", "AG Grid", "Highcharts"],
    },
    {
      role: "Senior Software Engineer",
      company: "Impact Analytics",
      shortLabel: "SSE @ IA",
      start: "2026-01",
      end: null,
      period: "Jan 2026 → Now",
      tone: "accent" as const,
      points: [
        "Architected a conflict-free keyboard shortcut framework for power users across 40+ clients",
        "Built Google Sheets–style real-time comments for AG Grid",
        "Built a reusable WebSocket hook adopted by 5+ product features",
        "Cut frontend build times by ~65% by moving from Babel to esbuild-loader",
      ],
      stack: ["React", "TypeScript", "AG Grid", "WebSockets", "esbuild"],
    },
  ],
};

export const PROJECTS = {
  id: "projects",
  title: "Things I've built",
  showMore: "+ {n} More",
  showLess: "Show less ↑",
  countLabel: "projects",
  dotLabel: "Show project",
  alreadyShown: "Already shown",
  cardLinks: { live: "Live", code: "Code" },
  popover: {
    problem: "Problem",
    built: "What I built",
    live: "Live demo",
    source: "Source",
  },
  items: [
    {
      name: "SimpleResume",
      tagline: "Private resume builder",
      thumb: "↓ PDF",
      image: simpleresume,
      imageAlt: "SimpleResume: build a resume that's yours, not ours",
      description:
        "Free resume builder that runs entirely in the browser. Pick from 6 templates and 14 colour themes, then download a PDF. No sign-up, no watermark, no data leaves the device.",
      problem:
        "Most resume builders lock the PDF behind a sign-up or paywall and keep your data on their servers.",
      built:
        "Client-only React + TypeScript app with live PDF preview via react-pdf, local-storage persistence and JSON import/export.",
      stack: ["React", "TypeScript", "Styled Components", "React PDF"],
      live: "https://mysimpleresume.netlify.app/",
      code: "https://github.com/Yash-RajSingh/SimpleResume",
    },
    {
      name: "CoonConvert",
      tagline: "Typed React PDF toolkit",
      thumb: "⇄ convert",
      image: coonconvert,
      imageAlt: "CoonConvert home page",
      description: "All-in-one online PDF tools: convert, merge, extract and compress.",
      problem: "Everyday PDF jobs meant juggling a different site for each task.",
      built: "One typed React app with Styled Components to convert, merge, extract and compress PDFs.",
      stack: ["React", "TS", "Styled"],
      live: "https://coonconvert.netlify.app",
      code: null,
    },
    {
      name: "ACE Website",
      tagline: "Tech society site, team build",
      thumb: "vipsace.org",
      image: aceWebsite,
      imageAlt: "ACE website home page",
      description:
        "Official website for the technical society of V.I.P.S., built by a 4-member team.",
      problem:
        "The society had no single home for its identity, projects, members and history.",
      built:
        "Site architecture and responsive About, Projects, Members and History sections in Gatsby + GraphQL.",
      stack: ["Gatsby", "GraphQL"],
      live: "https://vipsace.org/",
      code: "https://github.com/ACE-VSIT/website",
    },
    {
      name: "OverWatch",
      tagline: "Map-based safety app",
      thumb: "⌖ map",
      image: overwatch,
      imageAlt: "OverWatch home page",
      description:
        "Full-stack, map-based safety app. Users pin danger zones and share their stories; a Flask + PostgreSQL API serves geo data to a React + Leaflet client with Redux state.",
      problem: "No shared, local record of places that felt unsafe.",
      built:
        "Leaflet map where users pin danger zones and share stories, Redux store, Flask REST API with PostgreSQL.",
      stack: ["React", "Redux", "Leaflet", "Flask", "PostgreSQL"],
      live: "https://over-watch.netlify.app/",
      code: "https://github.com/Yash-RajSingh/OverWatch-react",
    },
    {
      name: "Ensemble",
      tagline: "Team project manager",
      thumb: "▦ boards",
      image: ensemble,
      imageAlt: "Ensemble dashboard",
      description:
        "Project management app for team collaboration, with real-time task boards via Firebase plus a Flask + PostgreSQL backend.",
      problem: "Group projects scattered across chats with no clear owner per task.",
      built:
        "Real-time task boards on Firebase, team progress tracking, Flask + PostgreSQL backend.",
      stack: ["React", "Firebase", "Flask", "PostgreSQL"],
      live: "https://en-semble.netlify.app/",
      code: "https://github.com/Yash-RajSingh/Ensemble",
    },
    {
      name: "InternSahara",
      tagline: "Scraped internship finder",
      thumb: "Filters ▾",
      image: internsahara,
      imageAlt: "InternSahara listings page",
      description:
        "Aggregates internship openings scraped from Internshala, with filters per stream.",
      problem: "Finding internships for one stream meant wading through every listing.",
      built: "Scraped Internshala listings into a filterable React UI with Framer Motion.",
      stack: ["React", "Framer Motion"],
      live: "https://internsahara.netlify.app/",
      code: "https://github.com/Yash-RajSingh/InternSahara",
    },
  ],
};

export const WINS = {
  id: "wins",
  label: "Wins ▸",
  openLabel: "Wins ▾",
  allLabel: "All →",
  collapseLabel: "Collapse ↑",
  items: [
    "2nd · Hack JMI '23",
    "Spot award for excellence · Q4 '23",
    "Top 10 · Elytra Hacks",
    "Top 15 · HackOverflow",
    "Top 50 · Hack36",
    "Hacktoberfest '21 & '22",
    "Google Cloud Facilitator Program",
  ],
  groups: [
    {
      year: "2023",
      category: "Work",
      text: "Spot award for excellence, Impact Analytics Q4",
    },
    { year: "2023", category: "Hackathon", text: "2nd place, Hack JMI" },
    { year: null, category: "Hackathon", text: "Top 10 teams, Elytra Hacks" },
    { year: null, category: "Hackathon", text: "Top 15 teams, HackOverflow" },
    { year: null, category: "Hackathon", text: "Top 50 teams, Hack 36" },
    {
      year: "2021 & 2022",
      category: "Open source",
      text: "Hacktoberfest contributor",
    },
    {
      year: null,
      category: "Cloud",
      text: "Google Cloud Facilitator Program, first milestone",
    },
  ],
};

export const ABOUT = {
  id: "about",
  title: "About me",
  hobbies:
    "Outside the editor: long motorcycle rides, treks up the hills, a camera on every trip, and the odd gaming session. Good for the brain between sprints.",
  code: `const stack = {
  frontend: ["React", "TypeScript", "Styled Components"],
  backend: ["Node", "Express", "MongoDB", "MySQL"],
  testing: ["Jest"], tools: ["Git", "Firebase"]
}`,
  hobbyCards: [
    { id: "motorcycling", label: "Motorcycling", caption: "Long rides on open roads" },
    { id: "trekking", label: "Trekking", caption: "Up the hills, off the grid" },
    { id: "gaming", label: "Gaming", caption: "The odd session after sprints" },
  ] as const,
};

export const CONTACT = {
  prompt: `$ git commit -m "let's work together"`,
  titleBefore: "Hiring a software engineer?",
  titleHighlight: "Let's talk.",
  id: "contact",
  copyLabel: "Copy email",
  copyShort: "Copy",
  copied: "Copied!",
  links: [
    { label: "GitHub", href: PROFILE.github },
    { label: "LinkedIn", href: PROFILE.linkedin },
  ],
};
