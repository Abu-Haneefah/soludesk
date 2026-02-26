"use client";

import { HelpCircle, RefreshCcw, Trophy } from "lucide-react";
import { Button } from "../ui/button";

interface QuizOption {
  id: string;
  label: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  points: number;
  options?: QuizOption[];
}

interface QuizLesson {
  quiz: QuizQuestion[];
}

interface QuizViewProps {
  lesson: QuizLesson;
  isSubmitted: boolean;
  score: number;
  maxScore: number;
  answers: Record<number, string>;
  setAnswers: (answers: Record<number, string>) => void;
  onSubmit: () => void;
  onReset: () => void;
}

export function QuizView({
  lesson,
  isSubmitted,
  score,
  maxScore,
  answers,
  setAnswers,
  onSubmit,
  onReset,
}: QuizViewProps) {
  if (isSubmitted) {
    return (
      <div className="text-center py-8 md:py-12 px-6 border rounded-2xl bg-gray-50 animate-in zoom-in-95 duration-300">
        <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900">Quiz Completed!</h2>
        <p className="text-gray-500 text-sm mb-6">
          You scored {score} out of {maxScore} points
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <Button onClick={onReset} variant="outline" className="gap-2">
            <RefreshCcw className="w-4 h-4" /> Retake
          </Button>
          <Button className="bg-blue-600">Next Lesson</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex gap-3">
        <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
        <p className="text-xs text-blue-800 leading-relaxed font-medium">
          Answer all questions to proceed.
        </p>
      </div>

      {/* Dynamic Question Mapping */}
      {lesson.quiz.map((q: QuizQuestion, idx: number) => (
        <div key={q.id} className="space-y-4">
          <div className="flex justify-between items-start gap-4">
            <h4 className="font-bold text-gray-900 text-sm">
              {idx + 1}. {q.question}
            </h4>
            <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase shrink-0">
              {q.points} Pts
            </span>
          </div>

          <div className="grid gap-2">
            {q.options ? (
              /* Render Multiple Choice Options */
              q.options.map((opt: QuizOption) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition cursor-pointer ${
                    answers[q.id] === opt.id
                      ? "border-blue-600 bg-blue-50/50"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    className="hidden"
                    onChange={() => setAnswers({ ...answers, [q.id]: opt.id })}
                  />
                  {/* Custom Radio Circle */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      answers[q.id] === opt.id
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {answers[q.id] === opt.id && (
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      answers[q.id] === opt.id
                        ? "text-blue-900 font-bold"
                        : "text-gray-600"
                    }`}
                  >
                    {opt.label}
                  </span>
                </label>
              ))
            ) : (
              /* Render Textarea for Open-ended Questions */
              <textarea
                className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-blue-600 outline-none text-sm transition"
                rows={4}
                placeholder="Type your answer here..."
                onChange={(e) =>
                  setAnswers({ ...answers, [q.id]: e.target.value })
                }
              />
            )}
          </div>
        </div>
      ))}

      <div className="flex justify-end pt-6">
        <Button
          onClick={onSubmit}
          className="w-full cursor-pointer md:w-auto bg-blue-600 h-12 px-10 rounded-xl font-bold shadow-lg shadow-blue-200"
        >
          Submit Assessment
        </Button>
      </div>
    </div>
  );
}
