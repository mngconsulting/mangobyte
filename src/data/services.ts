export interface Service {
  id: string;
  label: string;
  title: string;
  description: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: "build",
    label: "We build it",
    title: "Software Development",
    description:
      "Backend and full-stack systems built with the same care they'll need to be run with — from a Java foundation extended into Kotlin and Python.",
    details: ["API & backend services", "Full-stack applications", "Kotlin & Python", "Legacy Java systems"],
  },
  {
    id: "run",
    label: "We run it",
    title: "DevOps & Infrastructure",
    description:
      "Infrastructure and delivery pipelines that keep what gets built online — Azure-native, now expanding into AWS.",
    details: ["Cloud infrastructure", "CI/CD pipelines", "Azure & AWS", "Monitoring & reliability"],
  },
];
