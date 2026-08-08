import type { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

import founderImg from "@/assets/team/founder.png";
import mohiniImg from "@/assets/team/mohini2.png";
import nainaImg from "@/assets/team/naina.png";
import kalpeshImg from "@/assets/team/kalpesh.png";

import prashantImg from "@/assets/testimonials/prashant.jpg";
import sushantImg from "@/assets/testimonials/sushant.jpeg";
import surajImg from "@/assets/testimonials/suraj.png";

/* =========================================================
   COMPANY TYPES
========================================================= */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  order?: number;
  active?: boolean;
};

export type Client = {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
  website?: string;
  order?: number;
  active?: boolean;
};

export type Service = {
  id: string;
  title: string;
  desc: string;
  icon: string;
  iconComponent?: LucideIcon;
  order?: number;
  active?: boolean;
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  tag: string;
  img: string;
  link?: string;
  description?: string;
  order?: number;
  active?: boolean;

  /*
   * TRUE  → show in Tejas developer portfolio
   * FALSE → company website only
   */
  showInDeveloperPortfolio?: boolean;
};


/* =========================================================
   DEVELOPER PORTFOLIO TYPES
========================================================= */

export type DevProfile = {
  name: string;
  title: string;
  tagline: string;
  about: string;
  profileImage: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  resume: string;
  availability: string;
};

export type DevSkill = {
  id: string;
  name: string;
  category: string;
  level?: string;
  order?: number;
  active?: boolean;
};

export type DevEducation = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  score?: string;
  description?: string;
  order?: number;
  active?: boolean;
};

export type DevExperience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  description: string;
  technologies: string;
  order?: number;
  active?: boolean;
};

export type DevCertificate = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credential?: string;
  certificate?: string;
  image?: string;
  description?: string;
  order?: number;
  active?: boolean;
};

export type DevSocial = {
  id: string;
  platform: string;
  username: string;
  url: string;
  icon: string;
  order?: number;
  active?: boolean;
};


/* =========================================================
   COMPLETE SITE CONTENT TYPE
========================================================= */

export type SiteContent = {
  /* Company */
  team: TeamMember[];
  clients: Client[];
  services: Service[];
  portfolio: PortfolioProject[];

  /* Developer portfolio */
  devProfile: DevProfile;
  devSkills: DevSkill[];
  devEducation: DevEducation[];
  devExperience: DevExperience[];
  devCertificates: DevCertificate[];
  devSocial: DevSocial[];
};


/* =========================================================
   DEFAULT DEVELOPER PROFILE
========================================================= */

export const defaultDevProfile: DevProfile = {
  name: "Tejas Saitwal",
  title: "Software Engineer / Data Software Engineer",
  tagline: "Building scalable software and digital products.",
  about:
    "Software Engineer focused on building modern web applications, scalable software solutions and digital products.",
  profileImage: founderImg,
  email: "",
  phone: "",
  location: "Pune, Maharashtra, India",
  address: "",
  resume: "",
  availability: "Open to opportunities",
};


/* =========================================================
   DEFAULT DEVELOPER DATA
========================================================= */

export const defaultDevSkills: DevSkill[] = [];

export const defaultDevEducation: DevEducation[] = [];

export const defaultDevExperience: DevExperience[] = [];

export const defaultDevCertificates: DevCertificate[] = [];

export const defaultDevSocial: DevSocial[] = [];


/* =========================================================
   DEFAULT COMPANY DATA
========================================================= */

export const defaultTeam: TeamMember[] = [
  {
    id: "tejas-saitwal",
    name: "Tejas Saitwal",
    role: "Founder · Full-Stack Engineer",
    image: founderImg,
    order: 1,
    active: true,
  },
  {
    id: "mohini-jain",
    name: "Mohini Jain",
    role: "HR",
    image: mohiniImg,
    order: 2,
    active: true,
  },
  {
    id: "naina-sonawane",
    name: "Naina Sonawane",
    role: "UI/UX Designer",
    image: nainaImg,
    order: 3,
    active: true,
  },
  {
    id: "kalpesh-saitwal",
    name: "Kalpesh Saitwal",
    role: "Risk Analyst",
    image: kalpeshImg,
    order: 4,
    active: true,
  },
];


export const defaultClients: Client[] = [
  {
    id: "prashant-saitwal",
    name: "Mr. Prashant Saitwal",
    company: "Mahavir Tent House, Jamner",
    role: "CEO",
    quote:
      "AlfaaStack created a professional website for our business. The process was smooth, and the final result exceeded our expectations.",
    image: prashantImg,
    rating: 5,
    order: 1,
    active: true,
  },
  {
    id: "sushant-chatur",
    name: "Mr. Sushant Chatur",
    company: "Darshan Agro Agencies",
    role: "Founder",
    quote:
      "Great communication, timely delivery, and excellent support throughout the project. Highly recommended.",
    image: sushantImg,
    rating: 5,
    order: 2,
    active: true,
  },
  {
    id: "suraj-patil",
    name: "Mr. Suraj Patil",
    company: "Thread Factory",
    role: "Founder",
    quote:
      "Our website is faster, modern, and mobile-friendly. We're receiving more customer inquiries than before.",
    image: surajImg,
    rating: 5,
    order: 3,
    active: true,
  },
];


export const defaultPortfolio: PortfolioProject[] = [
  {
    id: "motohub",
    title: "MotoHub-Vehicle Buy&Sell Platform",
    category: "SaaS",
    tag: "Ongoing...",
    img: new URL("../assets/MH_work.png", import.meta.url).href,
    link: "#",
    order: 1,
    active: true,
    showInDeveloperPortfolio: true,
  },
  {
    id: "new-mahavir-tent",
    title: "New Mahavir Tent & Event Management System",
    category: "Web",
    tag: "MTH Landing Page",
    img: new URL("../assets/MTH_work.png", import.meta.url).href,
    link: "https://newmahavirtent.com",
    order: 2,
    active: true,
    showInDeveloperPortfolio: true,
  },
  {
    id: "tailor-management-system",
    title: "Tailor Management System",
    category: "SaaS",
    tag: "TMS Dashboard",
    img: new URL("../assets/TMS_work.png", import.meta.url).href,
    link: "#",
    order: 3,
    active: true,
    showInDeveloperPortfolio: true,
  },
  {
    id: "darshan-agro",
    title: "Darshan Agro Agencies SaaS Application",
    category: "SaaS",
    tag: "Invoicing",
    img: new URL("../assets/DA_Agro.png", import.meta.url).href,
    link: "#",
    order: 4,
    active: true,
    showInDeveloperPortfolio: true,
  },
  {
    id: "shopnow",
    title: "ShopNow",
    category: "E-commerce",
    tag: "Online Store",
    img: new URL("../assets/E-com.png", import.meta.url).href,
    link: "#",
    order: 5,
    active: true,
    showInDeveloperPortfolio: false,
  },
  {
    id: "thread-factory",
    title: "Thread Factory",
    category: "Web",
    tag: "Marketing site",
    img: new URL("../assets/TF_work.png", import.meta.url).href,
    link: "#",
    order: 6,
    active: true,
    showInDeveloperPortfolio: false,
  },
];


export const defaultServices: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    desc:
      "Fast, SEO-friendly marketing sites & web apps built with React, Next.js and headless CMS.",
    icon: "Code2",
    order: 1,
    active: true,
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    desc:
      "Native-feeling iOS & Android apps with React Native and Flutter, shipped to the stores.",
    icon: "Smartphone",
    order: 2,
    active: true,
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    desc:
      "Shopify, WooCommerce and custom storefronts optimized for conversion and scale.",
    icon: "ShoppingCart",
    order: 3,
    active: true,
  },
  {
    id: "custom-software",
    title: "Custom Software",
    desc:
      "Dashboards and workflow automations tailored to your team.",
    icon: "Cog",
    order: 4,
    active: true,
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    desc:
      "Multi-tenant SaaS with auth, billing and analytics — from MVP to enterprise-ready.",
    icon: "Cloud",
    order: 5,
    active: true,
  },
  {
    id: "billing-software",
    title: "Billing Software",
    desc:
      "Invoicing, subscriptions and GST-ready billing systems with clean admin UX.",
    icon: "Receipt",
    order: 6,
    active: true,
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    desc:
      "Product design systems, user research and pixel-perfect interfaces that convert.",
    icon: "Palette",
    order: 7,
    active: true,
  },
  {
    id: "api-integration",
    title: "API Integration",
    desc:
      "Third-party APIs, webhooks and internal services connected reliably and securely.",
    icon: "Plug",
    order: 8,
    active: true,
  },
];


/* =========================================================
   ICON RESOLVER
========================================================= */

export function resolveIcon(name: string): LucideIcon {
  const icon =
    LucideIcons[
      name as keyof typeof LucideIcons
    ];

  return (
    typeof icon === "function"
      ? icon
      : LucideIcons.Code2
  ) as LucideIcon;
}


/* =========================================================
   HELPERS
========================================================= */

function toBoolean(
  value: unknown,
  fallback = true
): boolean {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return fallback;
  }

  if (typeof value === "boolean") {
    return value;
  }

  return (
    String(value)
      .trim()
      .toLowerCase() !== "false"
  );
}


function toNumber(
  value: unknown,
  fallback = 999
): number {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : fallback;
}


/* =========================================================
   NORMALIZE SITE CONTENT
========================================================= */

export function normalizeSiteContent(
  input?: Partial<SiteContent>
): SiteContent {

  /* -----------------------------------------
     COMPANY
  ----------------------------------------- */

  const teamSource =
    input?.team?.length
      ? input.team
      : defaultTeam;

  const clientSource =
    input?.clients?.length
      ? input.clients
      : defaultClients;

  const serviceSource =
    input?.services?.length
      ? input.services
      : defaultServices;

  const portfolioSource =
    input?.portfolio?.length
      ? input.portfolio
      : defaultPortfolio;


  /* -----------------------------------------
     DEVELOPER
  ----------------------------------------- */

  const devProfile: DevProfile = {
    ...defaultDevProfile,
    ...(input?.devProfile || {}),
  };


  const devSkillsSource =
    input?.devSkills?.length
      ? input.devSkills
      : defaultDevSkills;


  const devEducationSource =
    input?.devEducation?.length
      ? input.devEducation
      : defaultDevEducation;


  const devExperienceSource =
    input?.devExperience?.length
      ? input.devExperience
      : defaultDevExperience;


  const devCertificatesSource =
    input?.devCertificates?.length
      ? input.devCertificates
      : defaultDevCertificates;


  const devSocialSource =
    input?.devSocial?.length
      ? input.devSocial
      : defaultDevSocial;


  /* -----------------------------------------
     NORMALIZE COMPANY DATA
  ----------------------------------------- */

  const team = teamSource
    .map((item) => ({
      ...item,
      order: toNumber(item.order),
      active: toBoolean(item.active),
    }))
    .filter((item) => item.active)
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


  const clients = clientSource
    .map((item) => ({
      ...item,
      rating: toNumber(item.rating, 5),
      order: toNumber(item.order),
      active: toBoolean(item.active),
    }))
    .filter((item) => item.active)
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


  const services = serviceSource
    .map((item) => ({
      ...item,
      order: toNumber(item.order),
      active: toBoolean(item.active),
    }))
    .filter((item) => item.active)
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


  const portfolio = portfolioSource
    .map((item) => ({
      ...item,
      order: toNumber(item.order),
      active: toBoolean(item.active),
      showInDeveloperPortfolio:
        toBoolean(
          item.showInDeveloperPortfolio,
          false
        ),
    }))
    .filter((item) => item.active)
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


  /* -----------------------------------------
     NORMALIZE DEVELOPER DATA
  ----------------------------------------- */

  const devSkills = devSkillsSource
    .map((item) => ({
      ...item,
      order: toNumber(item.order),
      active: toBoolean(item.active),
    }))
    .filter((item) => item.active)
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


  const devEducation = devEducationSource
    .map((item) => ({
      ...item,
      order: toNumber(item.order),
      active: toBoolean(item.active),
    }))
    .filter((item) => item.active)
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


  const devExperience = devExperienceSource
    .map((item) => ({
      ...item,
      order: toNumber(item.order),
      active: toBoolean(item.active),
    }))
    .filter((item) => item.active)
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


  const devCertificates =
    devCertificatesSource
      .map((item) => ({
        ...item,
        order: toNumber(item.order),
        active: toBoolean(item.active),
      }))
      .filter((item) => item.active)
      .sort(
        (a, b) =>
          (a.order ?? 999) -
          (b.order ?? 999)
      );


  const devSocial = devSocialSource
    .map((item) => ({
      ...item,
      order: toNumber(item.order),
      active: toBoolean(item.active),
    }))
    .filter((item) => item.active)
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


  /* -----------------------------------------
     RETURN EVERYTHING
  ----------------------------------------- */

  return {
    team,
    clients,
    services,
    portfolio,

    devProfile,
    devSkills,
    devEducation,
    devExperience,
    devCertificates,
    devSocial,
  };
}