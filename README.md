##🎓 SoluDesk LMS

SoluDesk is a high-performance, responsive Learning Management System (LMS) dashboard. Engineered with a focus on speed, type safety, and a seamless student learning experience, it handles everything from complex curriculum navigation to real-time assessments.

## 🛠️ Built With

This section lists the major frameworks and libraries that power SoluDesk.

| Technology        | Description                                                             |
| :---------------- | :---------------------------------------------------------------------- |
| **Next.js 15**    | The core framework, providing server-side rendering and the App Router. |
| **TypeScript**    | Ensures type safety and an excellent developer experience.              |
| **Redux Toolkit** | Manages global application state and authentication logic.              |
| **RTK Query**     | Handles all data fetching, caching, and server-state synchronization.   |
| **Tailwind CSS**  | A utility-first CSS framework for rapid and responsive UI development.  |
| **Lucide React**  | A consistent and beautiful set of open-source icons.                    |

##🔐 Core Architecture & Logic
1. Zero-Flicker Authentication

SoluDesk uses a Derived State Pattern for its authentication guards. Unlike traditional methods that cause "flashes" of content, our layout synchronizes with the Redux store during the render phase to ensure a smooth transition from the login screen to the dashboard.
2. Intelligent Data Caching

By utilizing RTK Query, SoluDesk minimizes redundant API calls. The system automatically fetches and caches course data, providing an "instant" feel when navigating between lessons and modules.

soludesk/
├── app/                        # Next.js 15 App Router (Routes & Layouts)
│   ├── (auth)/                 # Route Group for Authentication
│   │   ├── login/              # Login Page
│   │   └── register/           # Registration Page
│   ├── dashboard/              # Protected Dashboard Routes
│   │   ├── courses/            # Course listing and details
│   │   │   └── [id]/           # Individual course view
│   │   │       └── learn/      # Interactive course player
│   │   ├── profile/            # User profile management
│   │   └── layout.tsx          # Dashboard Shell (Sidebar + Navbar)
│   ├── api/                    # Route Handlers (Backend logic)
│   ├── layout.tsx              # Root Layout (Redux Provider, Fonts)
│   └── page.tsx                # Landing Page (Marketing)
├── components/                 # React Components
│   ├── learning/               # LMS specific (Quiz, Sidebar, VideoPlayer)
│   ├── shared/                 # Reusable (Navbar, Sidebar, Footer)
│   └── ui/                     # Shadcn / Atomic components (Button, Input)
├── lib/                        # Core Logic & Utilities
│   ├── store/                  # Redux Store Configuration
│   │   ├── features/           # Redux Slices (userSlice, courseSlice)
│   │   ├── api/                # RTK Query API Definitions (appSlice)
│   │   └── store.ts            # Root Store definition
│   ├── schema/                 # Zod Validation Schemas
│   └── utils.ts                # Helper functions (cn, formatters)
├── hooks/                      # Custom React Hooks (useAuth, useLocalStorage)
├── data/                       # Mock Data & Constants (dummyLessons.ts)
├── types/                      # Global TypeScript Interfaces
├── public/                     # Static Assets
│   ├── icons/                  # Custom SVG Icons
│   └── images/                 # Banner and Profile images
├── styles/                     # Global CSS and Tailwind configurations
├── middleware.ts               # Next.js Middleware (Auth protection)
├── tailwind.config.ts          # Tailwind Configuration
└── next.config.ts              # Next.js Configuration


## 🚀 Getting Started

Follow these simple steps to get a local copy up and running.

### Prerequisites

- Node.js (version 18.17 or later recommended)
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository**

    ```sh
    git clone https://github.com/yourusername/soludesk.git
    cd soludesk
    ```

2.  **Install NPM packages**

    ```sh
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server**

    ```sh
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```sh
npm run build
npm start
```
