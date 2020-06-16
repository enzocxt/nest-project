export interface School {
  id: number;
  name: string;
  alphaTwoCode: string;
  domains: Array<string>;
  country: string;
}

export interface SchoolById {
  id: number;
}

export interface SchoolByName {
  name: string;
}

export interface SchoolByCode {
  alphaTwoCode: string;
}

export interface StudentFollowSchool {
  schoolId: number;
  studentId: number;
}
