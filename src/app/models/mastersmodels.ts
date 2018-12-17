import { base } from './base';

export interface Question extends base {
  question: string;
}

export interface QuestionPaper extends base {
  html: string;
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