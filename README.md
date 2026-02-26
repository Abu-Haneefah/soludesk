## 🎓 SoluDesk LMS

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

## 📁 Project Structure

```text
├── app/                # Next.js 15 App Router (Routes & Layouts)
│   ├── (auth)/         # Auth group (Login/Register)
│   └── dashboard/      # Protected LMS Dashboard
├── components/         # React Components
│   ├── learning/       # Quiz & Lesson Player logic
│   ├── shared/         # Sidebar & Navbar
│   └── ui/             # Shadcn base components
├── lib/                # Core Logic
│   ├── store/          # Redux Store & API Slices
│   └── schema/         # Zod Validation Schemas
└── data/               # Mock Lessons & Course Data

```
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

🤝 Contributing

   1. Fork the Project.

    2. Create your Feature Branch (git checkout -b feature/AmazingFeature).

    3. Commit your Changes (git commit -m 'Add some AmazingFeature').

    4. Push to the Branch (git push origin feature/AmazingFeature).

    5. Open a Pull Request.
npm start
```
