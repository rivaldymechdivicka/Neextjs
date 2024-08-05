export interface Biodata {
    profile: string;
    placeOfBirth: string;
    dateOfBirth: string;
    gender: string;
    religion: string;
    language: string;
  }
  
  export interface Employee {
    name: string;
    position: string;
    email: string;
    image: string;
    biodata: Biodata;
  }
  
  export interface EmploymentHistory {
    employer: string;
    position: string;
    from: string;
    to: string;
  }
  
  export interface Certification {
    title: string;
    provider: string;
    date: string;
    duration: string;
    certificate: string;
  }
  
  export interface Education {
    school: string;
    degree: string;
    subject: string;
    from: string;
    to: string;
  }
  
  export interface Project {
    projectName: string;
    role: string;
    from: string;
    to: string;
    customer: string;
    projectDescription: string;
    technicalInformation: string;
    jobDescription: string;
  }
  
  export interface Histories {
    employment: EmploymentHistory[];
    certification: Certification[];
    education: Education[];
    project: Project[];
  }
  
  export interface Data {
    employee: Employee;
    histories: Histories;
  }
  