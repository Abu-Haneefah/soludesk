export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizItem {
  id: number;
  type: "multiple-choice" | "short-answer";
  points: number;
  question: string;
  options?: QuizOption[];
}

export interface SubLesson {
  id: string;
  title: string;
  content?: string;
  quiz?: QuizItem[];
}

export interface LessonSection {
  id: string;
  title: string;
  subLessons: SubLesson[];
}

export const dummyLessons: LessonSection[] = [
  {
    id: "sec-1",
    title: "Introduction",
    subLessons: [
      {
        id: "s1",
        title: "Welcome Message",
        content: `Lesson 1 - Welcome Message
  
Welcome to 'Communicate with Confidence'! In an era where the pace of work is ever-increasing and the demands on our time are relentless, the ability to communicate effectively has never been more crucial. This comprehensive course is meticulously crafted to equip you with the essential skills that will not only enhance your communication abilities but also empower you to thrive in any professional environment you find yourself in.
  
 Why Communication Matters
  
Effective communication is the cornerstone of success in the workplace. It is the bridge that connects individuals, teams, and organizations, facilitating collaboration and understanding. In today's diverse and dynamic work settings, the ability to convey your thoughts clearly and listen actively is paramount. This course aims to illuminate the significance of communication and provide you with the tools necessary to master it.
  
   What You'll Learn
  
  Throughout this course, you will delve into various aspects of communication, each designed to build upon the last, creating a robust foundation for your skills:
  
  1. Clear Articulation: You will learn techniques to express your ideas with clarity and precision, ensuring that your message is understood as intended. This includes understanding your audience and tailoring your message accordingly.
  
  2. Active Listening: Developing the ability to listen actively is crucial. You will practice techniques that enhance your listening skills, enabling you to fully engage with others and respond thoughtfully.
  
  3. Confident Conversations: Navigating challenging discussions can be daunting. This course will provide you with strategies to approach these conversations with poise and assurance, transforming potential conflicts into constructive dialogues.
  
  4. Non-Verbal Communication: Communication is not just about words. You will explore the nuances of non-verbal cues, such as body language and facial expressions, and learn how to utilize them to reinforce your message.
  
  5. Persuasive Language: Crafting compelling arguments is an art. You will learn how to influence others positively through the use of persuasive language, enabling you to advocate for your ideas effectively.
  
Building a Collaborative Environment
  
Mastering these skills will not only enhance your personal communication but will also contribute to building stronger interpersonal relationships within your team. A collaborative work environment is vital for team success, and effective communication is the key to fostering this atmosphere. You will learn how to create an inclusive environment where ideas can flourish, and everyone feels valued.
  
   Course Outcomes
  
By the end of this transformative course, you will be equipped to:
  
  - Communicate effectively in any situation, whether in meetings, presentations, or casual conversations.
  - Navigate complex challenges with confidence, turning potential obstacles into opportunities for growth.
  - Contribute significantly to your organization's success through improved communication practices, fostering a culture of openness and collaboration.
  
  Join us on this journey to transform your communication skills and unlock new heights in your career! Together, we will explore the depths of effective communication, ensuring that you emerge not just as a better communicator, but as a leader in your field.`,
      },
      {
        id: "s2",
        title: "A Note on Style",
        content:
          "This lesson explores how to develop your authentic communication style while maintaining professionalism in various workplace settings.",
      },
      {
        id: "s3",
        title: "What You'll Learn",
        content:
          "An overview of the course curriculum including verbal excellence, active listening, difficult conversations, non-verbal communication, and persuasive language techniques.",
      },
      {
        id: "s4",
        title: "Meet Your Instructor",
        content:
          "Learn about Sarah Mitchell, your course instructor with over 15 years of experience in corporate communication and executive coaching.",
      },
    ],
  },
  {
    id: "sec-2",
    title: "Setting Up Your Workspace",
    subLessons: [
      {
        id: "s5",
        title: "Environment Basics",
        content:
          "Guidelines for creating an optimal physical and digital environment for effective communication, including lighting, background, and audio setup.",
      },
      {
        id: "s6",
        title: "Tools of the Trade",
        content:
          "Overview of essential communication tools including video conferencing platforms, presentation software, and practice tools for improving your skills.",
      },
    ],
  },
  {
    id: "sec-3",
    title: "The Psychology of Communication",
    subLessons: [
      {
        id: "s7",
        title: "Understanding Your Audience",
        content:
          "Learn how to analyze your audience's demographics, psychographics, and communication preferences to tailor your message effectively.",
      },
      {
        id: "s8",
        title: "Emotional Intelligence in Conversation",
        content:
          "Explore the four pillars of emotional intelligence and how they apply to workplace conversations and relationship building.",
      },
    ],
  },
  {
    id: "sec-4",
    title: "Assessment",
    subLessons: [
      {
        id: "s9",
        title: "Quiz",
        quiz: [
          {
            id: 1,
            type: "multiple-choice",
            points: 4,
            question: "What is the purpose of React Hooks?",
            options: [
              {
                id: "A",
                label:
                  "To use state and other React features in functional components",
              },
              { id: "B", label: "To create class components" },
              { id: "C", label: "To style React components" },
              { id: "D", label: "To handle routing in React applications" },
            ],
          },
          {
            id: 2,
            type: "multiple-choice",
            points: 4,
            question: "Which hook is used for side effects in React?",
            options: [
              {
                id: "A",
                label: "useState",
              },
              { id: "B", label: "useEffect" },
              { id: "C", label: "useContext" },
              { id: "D", label: "useReducer" },
            ],
          },
          {
            id: 3,
            type: "short-answer",
            points: 10,
            question: "Explain the Virtual DOM and its benefits",
          },
          {
            id: 4,
            type: "multiple-choice",
            points: 4,
            question: "What is the purpose of React Hooks?",
            options: [
              {
                id: "A",
                label:
                  "To use state and other React features in functional components",
              },
              { id: "B", label: "To create class components" },
              { id: "C", label: "To style React components" },
              { id: "D", label: "To handle routing in React applications" },
            ],
          },
          {
            id: 5,
            type: "multiple-choice",
            points: 4,
            question: "Which hook is used for side effects in React?",
            options: [
              {
                id: "A",
                label: "useState",
              },
              { id: "B", label: "useEffect" },
              { id: "C", label: "useContext" },
              { id: "D", label: "useReducer" },
            ],
          },
          {
            id: 6,
            type: "short-answer",
            points: 10,
            question: "Explain the Virtual DOM and its benefits",
          },
        ],
      },
    ],
  },
];

export const dummyReviews = [
  {
    id: 1,
    user: "Madison Greg",
    rating: 5,
    date: "Oct 24, 2025",
    comment:
      "This lesson on Workplace Communication was incredibly insightful.",
  },
  {
    id: 2,
    user: "James Wilson",
    rating: 5,
    date: "Oct 22, 2025",
    comment:
      "The instructor's teaching style is engaging and easy to follow. I've already noticed improvements in my daily conversations.",
  },
  {
    id: 3,
    user: "Priya Patel",
    rating: 4,
    date: "Oct 20, 2025",
    comment:
      "Great course structure! The practical exercises really help reinforce the concepts. Would recommend to anyone looking to improve their communication skills.",
  },
  {
    id: 4,
    user: "Michael Chen",
    rating: 5,
    date: "Oct 18, 2025",
    comment:
      "Finally a course that addresses real-world communication challenges. The techniques are practical and immediately applicable.",
  },
  {
    id: 5,
    user: "Sarah Johnson",
    rating: 5,
    date: "Oct 15, 2025",
    comment:
      "The section on difficult conversations was worth the entire course price. Life-changing advice delivered clearly and compassionately.",
  },
];
