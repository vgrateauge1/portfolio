import { FaGithub, FaMedium } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";

export const PROJECTS = [
  {
    title: "Fine-tuning of Llama3 for Domain-Specific Use Case",
    description:
      "Fine-tuned Llama3 to improve knowledge quality in a specific field. Tested the model on various use-cases to identify shortcomings and compared RAG and fine-tuning to determine best practices. Results will be published on Medium.",
    image: "/llama3.png", // Update with actual image path
    tags: ["Llama3", "Fine-tuning", "RAG", "Python"],
    links: [
      // {
      //   name: "Medium Article",
      //   url: "https://medium.com/@yourprofile/llama3-fine-tuning", // Update with actual URL
      //   icon: FaMedium,
      // },
     
    ],
  },
  {
    title: "LLava vs GPT-4 Comparison",
    description:
      "Engineered prompts to obtain formatted answers and integrated model comparisons into a Flask app using LangChain. Published results on Medium.",
    image: "/llava.png", // Update with actual image path
    tags: ["LangChain", "Flask",  "Python", "LLava", "GPT-4"],
    links: [
      {
        name: "Medium Article",
        url: "https://medium.com/@valentin.grateau1309/llava-next-vs-gpt-4-and-some-wonderful-use-cases-83c3929bac0a", // Update with actual URL
        icon: FaMedium,
      },
      {
        name: "GitHub Repository",
        url: "https://github.com/vgrateauge1/llava",
        icon: FaGithub,
      }
    ],
  },
  {
    title: "Mine Clearance Project",
    description:
      "A project dedicated to developing technology and methodologies for mine clearance. This initiative aims to enhance safety and efficiency in demining operations.",
    image: "/landmine-detection.jpeg", // Update with actual image path
    tags: ["Vision", "CNN", "YOLO", "Python"],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/mine-clearance/mine-clearance",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Duck Hunt GUI Project",
    description:
      "A project focused on developing a graphical user interface for the Duck Hunt game. This project involves creating an intuitive and engaging interface for players.",
    image: "/duck-hunt.jpg", // Update with actual image path
    tags: ["C++", "Qt", "MultiThreading", "GUI"],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/vgrateauge1/projet-duck-hunt-partie-gui-duck-hunters",
        icon: FaGithub,
      },
    ],
  },
  
];
