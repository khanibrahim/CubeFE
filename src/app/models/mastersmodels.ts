export interface Question {
  Id: number;
  question: string;
  IsActive: boolean;
  RCB: number;
  RCT: string;
  RUB: number;
  RUT: string;
  // type: string;
  // subject: string;
  // grade: string;
  // board: string;
}

export interface QuestionType {
  code: string;
  type: string;
}

export interface Board {
  code: string;
  name: string;
}

export interface Subject {
  code: string;
  name: string;
  part: string;
}

export interface Grade {
  code: string;
  name: string;
}