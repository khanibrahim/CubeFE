import { base } from './base';

export class Course extends base {
  Name: string;
  Description: string;
  PropertyId: number;
}

export class Subject extends base {
  Name: string;
  Acronym: string;
  Part:number;
  CourseId:number;
}

export class Lesson extends base {
  Name: string;
  Unit: number;
  SubjectId:number;
}

export class Question extends base {
  Question1: string;
  LessonId: number;
  Type: number;
}

export class QuestionPaper extends base {
  Name: string;
  Html: string;
  SubjectId: number;
}

export class QuestionType extends base {
  Name: string;
}



