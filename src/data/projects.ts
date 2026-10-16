import type { ImageMetadata } from "astro";
import collateral from "../../public/collateral.png";
import paperlane from "../../public/paperlane.png";
import sayurhub from "../../public/sayurhub.jpeg";
import emigria from "../../public/emigria.jpeg";
import sehathemat from "../../public/sehathemat.jpeg";
import glance from "../../public/glance.jpeg";
import lostnfound from "../../public/lost-n-found.jpeg";

export interface Project {
  title: string;
  image: ImageMetadata;
  link: string;
  preview: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Paperlane (First Project)",
    image: paperlane as ImageMetadata,
    link: "https://github.com/aanharits/be_post",
    preview: "https://paperlane.vercel.app/",
    description:
      "My first project from learning to code, a notes management app where you can create, organize, and manage your notes. I also added authentication to deepen my understanding of user auth flows.",
  },
  {
    title: "Sayurhub (Course Project)",
    image: sayurhub as ImageMetadata,
    link: "https://github.com/aanharits/sayurhub",
    preview: "https://sayurhub.vercel.app/",
    description:
      "An e-commerce web app focused on fresh daily needs vegetables, fruits, and cooking spices. Built to make it easy for people to shop for kitchen essentials online.",
  },
  {
    title: "SehatHemat (On Development)",
    image: sehathemat as ImageMetadata,
    link: "https://github.com/aanharits/SehatHemat",
    preview: "https://github.com/aanharits/SehatHemat",
    description:
      "An AI-powered weekly meal planner for people starting their fitness journey on any budget. Users input their budget, calorie, and protein targets, and the AI generates a full week of meals (breakfast, lunch, dinner) using a RAG approach with a curated Kaggle nutrition dataset.",
  },
  {
    title: "Social-Collateral (Hackaton Project)",
    image: collateral as ImageMetadata,
    link: "https://github.com/SocialCollateralAI",
    preview: "https://socialcollateral-landingpage.vercel.app/",
    description:
      'SocialCollateral AI is a specialized Social Graph Engine developed to address a critical paradox in the microfinance industry: how to scale inclusive lending without losing the "social touch" that mitigates risk.',
  },
  {
    title: "Emigria (Capstone Project)",
    image: emigria as ImageMetadata,
    link: "https://github.com/EMIGRIA",
    preview: "https://www.emigria.my.id/",
    description:
      "Emigria is a multimodal AI-powered overseas job fraud detection platform developed to address a critical vulnerability faced by Indonesian migrant worker candidates: how to verify job offers quickly before trusting recruitment claims that may be misleading, unsafe, or fraudulent.",
  },
  {
    title: "Glance (Vibe Coding Project)",
    image: glance as ImageMetadata,
    link: "https://github.com/aanharits/glance",
    preview: "https://github.com/aanharits/glance",
    description:
      "A native macOS menu bar app that explains anything you copy in one second. Hit Cmd+Shift+S, copy any confusing code, error log, or paragraph, and Glance instantly pops up an ELI5 explanation or TL;DR using ultra-fast LLMs. No context switching, no browser tabs, near-zero footprint.",
  },
  {
    title: "Lost n Found",
    image: lostnfound as ImageMetadata,
    link: "https://github.com/aanharits/lost-n-found",
    preview: "https://lost-n-found-pi-liart.vercel.app/lobby",
    description:
      "A modern campus lost-and-found platform powered by Zero-Knowledge Proofs (ZKP), Gale-Shapley Stable Matching, and Groq Semantic AI, wrapped in a retro pixel-art pinboard interface.",
  },
];
