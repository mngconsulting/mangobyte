export interface Founder {
  name: string;
  initials: string;
  role: string;
  headline: string;
  bio: string;
  stack: string[];
  email: string;
}

export const founders: Founder[] = [
  {
    name: "Alexandra",
    initials: "AR",
    role: "Software Development",
    headline: "Backend & full-stack engineer",
    bio: "Started out writing Java in production systems, and has carried that foundation forward into Kotlin and Python — building backend services and full-stack applications that are built to be handed off, not babysat.",
    stack: ["Java", "Kotlin", "Python", "Full-stack"],
    email: "alexandra@mngconsulting.tech",
  },
  {
    name: "Vlad",
    initials: "V",
    role: "DevOps & Infrastructure",
    headline: "DevOps engineer",
    bio: "Azure has been home turf for most of his career — designing and running the infrastructure that keeps other people's software online — and he's currently extending that into AWS, so the studio isn't tied to one cloud.",
    stack: ["Azure", "AWS", "CI/CD", "Infrastructure"],
    email: "vlad@mngconsulting.tech",
  },
];
