
export type QuestionType = 'MCQ' | 'GAP_FILL' | 'WORD_FORM' | 'CONVERSATION' | 'TEXT_INSERTION';

export interface Question {
  id: number;
  section: number;
  type: QuestionType;
  text: string;
  options?: string[]; // For MCQ and Text Insertion
  clue?: string; // For Word Form (the word in brackets)
  correctAnswer: string;
  explanation?: string; // We won't show this as per requirement, but it's good practice
}

export interface ConversationSet {
  id: number;
  sentences: { label: string; text: string }[];
  correctOrder: string; // e.g., "BECAD"
}

export interface TextInsertionSet {
  id: number;
  title: string;
  paragraphTemplate: string; // e.g., "The generation gap is... (71) ____."
  options: { label: string; text: string }[];
  answers: Record<number, string>; // e.g., { 71: 'C', 72: 'E' }
}

export interface ExamData {
  mcqs: Question[];
  gapFills: Question[];
  wordForms: Question[];
  conversations: ConversationSet[];
  textInsertions: TextInsertionSet[];
}
