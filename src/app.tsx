import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import type { Task } from "./types/Task";
import Index from "./routes/index";
import Category from "./routes/category";

// Initial tasks data
const initialTasks: Task[] = [
  {
    id: 1,
    title: "Learn React basics",
    completed: false,
    category: "learning",
  },
  {
    id: 2,
    title: "Set up development environment",
    completed: true,
    category: "development",
  },
  {
    id: 3,
    title: "Create first component",
    completed: false,
    category: "development",
  },
  {
    id: 4,
    title: "Deploy to production",
    completed: false,
    category: "deployment",
  },
  {
    id: 5,
    title: "Write unit tests",
    completed: true,
    category: "development",
  },
  { id: 6, title: "Learn TypeScript", completed: false, category: "learning" },
];

// PART 1b: This component has a bug that prevents task toggling from working
// BUG: Clicking on tasks doesn't actually toggle their completion status
// HINT: Think about how React detects state changes
function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
    setTasks(tasks);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Index tasks={tasks} toggleTask={toggleTask} />}
        />
        <Route
          path="/category/:categoryId"
          element={<Category tasks={tasks} toggleTask={toggleTask} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
