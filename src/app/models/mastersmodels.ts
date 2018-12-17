import { base } from './base';

export interface Course extends base {
  Name: string;
  Description: string;
  PropertyId: number;
}

export interface Subject extends base {
  Name: string;
  Acronym: string;
  Part:number;
  CourseId:number;
}

export interface Lesson extends base {
  Name: string;
  Unit: number;
  SubjectId:number;
}

export interface Question extends base {
  Question: string;
  LessonId: number;
  Type: number;
}

export interface QuestionPaper extends base {
  Name: string;
  Html: string;
  SubjectId: number;
}

export interface QuestionType extends base {
  Name: string;
}



