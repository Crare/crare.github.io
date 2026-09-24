export interface WorkExperience {
  company: string;
  current: boolean;
  dateRange: string;
  highlights: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Zure",
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
    current: false,
    dateRange: "Aug 2018 – Dec 2019",
    highlights: [
      "Software development on private sector projects",
      "Bachelor's thesis: web application integrating transportation APIs and other open public data sources",
    ],
  },
  {
    company: "SuperApp",
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
