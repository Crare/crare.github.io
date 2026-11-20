import { Certificate } from "../types";

export interface WorkExperience {
  company: string;
  dateRange: string;
  current: boolean;
  summary: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Zure",
    dateRange: "Dec 2019 to now",
    current: true,
    summary:
      "Full-stack developer on Microsoft Azure: frontend, backend, mobile apps and API integrations, for customers including Seure, Keva and Kuusakoski.",
  },
  {
    company: "CGI",
    dateRange: "Aug 2018 to Dec 2019",
    current: false,
    summary:
      "Software developer on private sector projects. My bachelor’s thesis was a web app that combined transport APIs with other open public data.",
  },
  {
    company: "SuperApp",
    dateRange: "Apr 2017 to Apr 2018",
    current: false,
    summary:
      "Mobile app developer across several projects. Helped set up the team’s ways of working, built interactive prototypes for customers and worked on a computer vision solution.",
  },
];

export const education = {
  school: "Haaga-Helia University of Applied Sciences",
  degree: "Bachelor’s degree in information technology.",
  years: "2015 to 2018",
};

export const certificates: Certificate[] = [
  { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft", issued: "Apr 2023", expires: "Apr 2027" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", issued: "Feb 2026" },
];
