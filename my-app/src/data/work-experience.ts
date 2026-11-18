import { Certificate } from "../types";

export interface WorkExperience {
  company: string;
  role: string;
  /** Start year shown on the About timeline. */
  year: string;
  current: boolean;
  dateRange: string;
  highlights: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Zure",
    role: "Full-stack developer on Microsoft Azure",
    year: "2019 →",
    current: true,
    dateRange: "Dec 2019 – Present",
    highlights: [
      "Full-stack development on Microsoft Azure",
      "Frontend, backend, mobile applications, and API integrations",
      "Customer projects include Seure, KEVA, and Kuusakoski",
    ],
  },
  {
    company: "CGI",
    role: "Software developer",
    year: "2018",
    current: false,
    dateRange: "Aug 2018 – Dec 2019",
    highlights: [
      "Software development on private sector projects",
      "Bachelor's thesis: web application integrating transportation APIs and other open public data sources",
    ],
  },
  {
    company: "SuperApp",
    role: "Mobile app developer",
    year: "2017",
    current: false,
    dateRange: "Apr 2017 – Apr 2018",
    highlights: [
      "Mobile app development across multiple projects",
      "Helped establish team development workflows and practices",
      "Built custom interactive prototypes for multiple customers",
      "Contributed to a computer vision solution for a customer project",
    ],
  },
];

export const education = {
  school: "Haaga-Helia University of Applied Sciences",
  degree: "Bachelor's Degree, Information Technology",
  years: "2015–2018",
};

export const certificates: Certificate[] = [
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", issued: "Feb 2026" },
  { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft", issued: "Apr 2023", expires: "Apr 2027" },
  { name: "The Complete React Native and Redux Course", issuer: "Udemy", issued: "Jul 2019" },
  { name: "Elements of AI", issuer: "University of Helsinki · Course", issued: "Jul 2019" },
];
