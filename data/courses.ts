export interface Course {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Effective Workplace Communication",
    image: "/e-workspace.svg",
    category: "Soft Skill",
    description:
      "Upon completion of this module, participants will implement practical communication techniques...",
  },
  {
    id: "2",
    title: "Mastering Interpersonal Skills",
    image: "/m-interper.svg",
    category: "Compliance & Policy",
    description:
      "Upon completion of this module, participants will implement practical communication techniques...",
  },
  {
    id: "3",
    title: "Strengthening Team Cohesion",
    image: "/T.cohesion.svg",
    category: "Soft Skill",
    description:
      "Upon completion of this module, participants will implement practical communication techniques...",
  },
  {
    id: "4",
    title: "Enhancing Team Dialogue",
    image: "/T.dialogue.svg",
    category: "Digital Skills",
    description:
      "Upon completion of this module, participants will implement practical communication techniques...",
  },
  {
    id: "5",
    title: "Optimizing Group Dynamics",
    image: "/G.dynamics.svg",
    category: "Business & Strategy",
    description:
      "Upon completion of this module, participants will implement practical communication techniques...",
  },
  {
    id: "6",
    title: "Cultivating Open Communication",
    image: "/O.comm.svg",
    category: "Onboarding",
    description:
      "Upon completion of this module, participants will implement practical communication techniques...",
  },
];
