"use client";

import { useState, use, useMemo } from "react";
import { ArrowLeft, Play, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { coursesData } from "@/data/courses";
import { notFound } from "next/navigation";
import { dummyLessons, dummyReviews } from "@/data/lesson";
import { LessonSidebar } from "@/components/learning/LessonSideBar";
import { QuizView } from "@/components/learning/Quiz";
import { ReviewsView } from "@/components/learning/Reviews";

interface QuizQuestion {
  id: number;
  question: string;
  points: number;
  options?: { id: string; label: string }[];
}

interface SubLesson {
  id: string;
  title: string;
  content?: string;
  quiz?: QuizQuestion[];
}

export default function LearningPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const courseId = resolvedParams.id;
  const course = coursesData.find((c) => c.id === courseId);

  const [activeLessonId, setActiveLessonId] = useState("s1");
  const [currentTab, setCurrentTab] = useState("content");
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(dummyLessons.map((s) => s.id)),
  );

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!course) notFound();

  const activeLesson = useMemo((): SubLesson => {
    for (const section of dummyLessons) {
      const found = section.subLessons.find((s) => s.id === activeLessonId);
      if (found) return found;
    }
    return dummyLessons[0].subLessons[0];
  }, [activeLessonId]);

  const totalLessons = useMemo(
    () =>
      dummyLessons.reduce((acc, section) => acc + section.subLessons.length, 0),
    [],
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSelectLesson = (id: string) => {
    setActiveLessonId(id);
    setIsSubmitted(false);
    setCurrentTab("content");
    setIsSidebarOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMarkComplete = () => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      next.add(activeLessonId);
      return next;
    });
  };

  const handleSubmitAssessment = () => {
    if (!activeLesson.quiz) return;
    let totalScore = 0;
    activeLesson.quiz.forEach((q) => {
      if (answers[q.id]) totalScore += q.points;
    });
    setScore(totalScore);
    setIsSubmitted(true);
    handleMarkComplete();
  };

  const maxPossibleScore = useMemo(() => {
    return activeLesson.quiz?.reduce((acc, q) => acc + q.points, 0) || 0;
  }, [activeLesson]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
      <header className="flex items-center justify-between px-4 md:px-6 h-16 sticky top-0 z-40 shrink-0 bg-[#F9FAFB]">
        <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
          <Link
            href={`/dashboard/courses/${course.id}`}
            className="p-2 rounded-full hover:bg-gray-100 transition shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-tight truncate">
            {course.title}
          </h1>
        </div>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      <div className="flex flex-col lg:flex-row p-3 md:p-4 gap-4 max-w-7xl mx-auto w-full flex-1">
        <main className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm relative h-fit">
          <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8">
            {!activeLesson.quiz && (
              <div className="relative w-full h-48 md:h-72 rounded-xl overflow-hidden bg-gray-900 mb-6 md:mb-8 group">
                <Image
                  src="/course.png"
                  alt="Banner"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition shadow-2xl">
                    <Play className="w-6 h-6 md:w-7 md:h-7 text-white fill-white ml-1" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-6 md:gap-8 border-b border-gray-100 mb-6 md:mb-8">
              {["content", "feedback"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`pb-4 text-[10px] md:text-xs font-bold uppercase tracking-wider relative transition-all ${
                    currentTab === tab
                      ? "text-blue-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab === "content" ? "Course Content" : "Reviews"}
                  {currentTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="pb-10">
              {currentTab === "content" ? (
                activeLesson.quiz ? (
                  <QuizView
                    lesson={
                      activeLesson as SubLesson & { quiz: QuizQuestion[] }
                    }
                    isSubmitted={isSubmitted}
                    score={score}
                    maxScore={maxPossibleScore}
                    answers={answers}
                    setAnswers={setAnswers}
                    onSubmit={handleSubmitAssessment}
                    onReset={() => {
                      setAnswers({});
                      setIsSubmitted(false);
                    }}
                  />
                ) : (
                  <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {activeLesson.title}
                    </h2>
                    <div className="text-sm leading-relaxed text-gray-600 whitespace-pre-wrap mb-10">
                      {activeLesson.content}
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={handleMarkComplete}
                        className="w-full md:w-auto cursor-pointer bg-blue-600 hover:bg-blue-700 px-8 h-11 rounded-lg font-bold"
                      >
                        Mark as Complete
                      </Button>
                    </div>
                  </article>
                )
              ) : (
                <ReviewsView reviews={dummyReviews} />
              )}
            </div>
          </div>
        </main>

        <div
          className={`
            fixed inset-0 z-50 lg:z-0 lg:block lg:w-80 h-full lg:h-fit lg:sticky lg:top-20
            ${isSidebarOpen ? "block" : "hidden"}
          `}
        >
          <div
            className="absolute inset-0 bg-black/40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />

          <div className="relative ml-auto w-72 md:w-80 h-full lg:h-auto bg-white lg:rounded-2xl border-l lg:border border-gray-200 shadow-xl lg:shadow-sm flex flex-col overflow-hidden">
            <div className="lg:hidden p-4 border-b flex items-center justify-between">
              <span className="font-bold text-xs uppercase text-gray-500">
                Curriculum
              </span>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <LessonSidebar
              lessons={dummyLessons}
              activeLessonId={activeLessonId}
              completedIds={completedIds}
              openSections={openSections}
              toggleSection={toggleSection}
              onSelectLesson={handleSelectLesson}
              totalLessons={totalLessons}
              completedCount={completedIds.size}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
