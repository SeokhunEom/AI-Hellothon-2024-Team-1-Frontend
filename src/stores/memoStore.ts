import { AnswerResponse, Question } from "../types";

import { create } from "zustand";

interface MemoState {
  questions: Question[];
  currentQuestion: Question | null;
  answers: AnswerResponse[];
  setCurrentQuestion: (question: Question) => void;
  addAnswer: (answer: AnswerResponse) => void;
  addQuestion: (question: Question) => void;
  answeredQuestionIds: number[];
  addAnsweredQuestionId: (questionId: number) => void;
  clearAnsweredQuestionIds: () => void;
  currentQuestionNumber: number;
  incrementQuestionNumber: () => void;
  resetQuestionNumber: () => void;
}

export const useMemoStore = create<MemoState>((set) => ({
  questions: [],
  currentQuestion: null,
  answers: [],
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  addAnswer: (answer) =>
    set((state) => ({ answers: [...state.answers, answer] })),
  addQuestion: (question) =>
    set((state) => ({ questions: [...state.questions, question] })),
  answeredQuestionIds: [],
  addAnsweredQuestionId: (questionId) =>
    set((state) => ({
      answeredQuestionIds: [...state.answeredQuestionIds, questionId],
    })),
  clearAnsweredQuestionIds: () => set({ answeredQuestionIds: [] }),
  currentQuestionNumber: 1,
  incrementQuestionNumber: () =>
    set((state) => ({
      currentQuestionNumber: state.currentQuestionNumber + 1,
    })),
  resetQuestionNumber: () => set({ currentQuestionNumber: 1 }),
}));
