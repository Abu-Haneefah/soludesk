"use client";
import { CheckCircle2, ChevronDown, ChevronUp, FileText } from "lucide-react";

interface QuizItem {
  id: number;
  question: string;
  points: number;
  options?: { id: string; label: string }[];
}

interface SubLesson {
  id: string;
  title: string;
  quiz?: QuizItem[];
}

interface LessonSection {
  id: string;
  title: string;
  subLessons: SubLesson[];
}

interface LessonSidebarProps {
  lessons: LessonSection[];
  activeLessonId: string;
  completedIds: Set<string>;
  openSections: Set<string>;
  toggleSection: (id: string) => void;
  onSelectLesson: (id: string) => void;
  totalLessons: number;
  completedCount: number;
}

export function LessonSidebar({
  lessons,
  activeLessonId,
  completedIds,
  openSections,
  toggleSection,
  onSelectLesson,
  totalLessons,
  completedCount,
}: LessonSidebarProps) {
  return (
    <div className="flex flex-col h-10/12 bg-white overflow-hidden">
      {/* Sidebar Header: Shows overall progress */}
      <div className="shrink-0 bg-white border-b px-5 py-5">
        <p className="text-[12px] font-semibold text-gray-400">
          Lessons ({completedCount}/{totalLessons})
        </p>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-50 no-scrollbar">
        {lessons.map((section) => {
          const isOpen = openSections.has(section.id);

          const isDone = section.subLessons?.every((sub: SubLesson) =>
            completedIds.has(sub.id),
          );

          return (
            <div key={section.id} className="bg-white">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-[13px] font-bold text-gray-900 text-left">
                  {section.title}
                </span>
                <div className="flex items-center gap-2">
                  {isDone && (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  )}
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="pb-2">
                  {section.subLessons?.map((sub: SubLesson) => {
                    const isActive = activeLessonId === sub.id;
                    const isCompleted = completedIds.has(sub.id);
                    const isQuiz = sub.id === "assessment-quiz" || !!sub.quiz;

                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectLesson(sub.id)}
                        className={`w-full flex items-center justify-between px-5 py-3.5 text-[13px] group transition ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          {isQuiz && (
                            <FileText className="w-3.5 h-3.5 shrink-0" />
                          )}
                          <span
                            className={`truncate ${
                              isActive ? "font-semibold" : "font-medium"
                            }`}
                          >
                            {sub.title}
                          </span>
                        </div>

                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50 shrink-0" />
                        ) : (
                          <div
                            className={`w-4 h-4 rounded-full border-2 shrink-0 ${
                              isActive ? "border-blue-400" : "border-gray-200"
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
