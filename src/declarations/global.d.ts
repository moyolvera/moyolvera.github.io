export interface SocialLink {
  name: string;
  url: string;
  className: string;
}

export interface Education {
  UniversityName: string;
  specialization: string;
  MonthOfPassing: string;
  YearOfPassing: string;
  Achievements: string;
}

export interface Work {
  CompanyName: string;
  specialization: string;
  MonthOfLeaving: string;
  YearOfLeaving: string;
  Achievements: string[];
  Tools: string;
  features?: string[];
}

export interface Skill {
  skillname: string;
}

export interface Portfolio {
  name: string;
  detail: string;
  features?: string[];
  code?: string;
  description: string;
  imgurl: string;
  year: string;
  tools?: string;
}

export interface Reference {
  name: string;
  position: string;
  mail: string;
}

export interface ResumeData {
  imagebaseurl: string;
  name: string;
  role: string;
  linkedinId: string;
  skypeid: string;
  roleDescription: string;
  socialLinks: SocialLink[];
  aboutme: string;
  address: string;
  website: string;
  email: string;
  education: Education[];
  work: Work[];
  skillsDescription: string;
  skills: Skill[];
  moreSkills: string;
  portfolio: Portfolio[];
  references: Reference[];
}
