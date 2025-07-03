import { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Task, FilterType } from "../../types/Task";
import "./index.css";

// PART 1: This component has bugs that need fixing!
// The bugs are subtle - the code runs without errors but doesn't work correctly
const TaskList: React.FC<{
  tasks: Task[];
  onToggleTask: (id: number) => void;
}> = ({ tasks, onToggleTask }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // BUG 1: Missing dependency in useEffect - this won't update when tasks change
  useEffect(() => {
    setCompletedCount(tasks.filter((task) => task.completed).length);
    setTotalCount(tasks.length);
  }, []); // Missing 'tasks' dependency!

  const handleToggleTask = (id: number) => {
    // BUG 2: Direct mutation - this won't trigger re-render properly
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed; // Direct mutation!
      onToggleTask(id);
    }
  };

  return (
    <div className="task-list">
      <div className="task-stats">
        <p>
          Completed: {completedCount} / {totalCount}
        </p>
      </div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="task-card"
          onClick={() => handleToggleTask(task.id)}
        >
          <div className="task-content">
            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
            {task.category && (
              <span className="task-category">#{task.category}</span>
            )}
          </div>
          <div className="task-actions">
            <button className="toggle-btn">{task.completed ? "✓" : "○"}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

// PART 3: This component needs search and filter logic implemented
const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", completed: false, category: "learning" },
    { id: 2, title: "Build an app", completed: false, category: "development" },
    { id: 3, title: "Write tests", completed: true, category: "development" },
    {
      id: 4,
      title: "Deploy to production",
      completed: false,
      category: "deployment",
    },
    { id: 5, title: "Review code", completed: true, category: "development" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  // TODO: Implement this function to filter tasks based on search and filter
  const getFilteredTasks = (): Task[] => {
    // Candidate needs to implement filtering logic here
    // Should filter by both searchTerm (title contains) and filter (completed status)
    return tasks; // Currently returns all tasks - needs implementation!
  };

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="task-manager">
      <header className="task-header">
        <h1>Personal Task Manager</h1>
        <nav className="category-nav">
          <Link to="/">All Tasks</Link>
          <Link to="/category/learning">Learning</Link>
          <Link to="/category/development">Development</Link>
          <Link to="/category/deployment">Deployment</Link>
        </nav>
      </header>

      <div className="task-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          // TODO: Connect to search functionality in getFilteredTasks
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterType)}
          className="filter-select"
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <TaskList tasks={getFilteredTasks()} onToggleTask={handleToggleTask} />
    </div>
  );
};

function Index() {
  return <TaskManager />;
}

export default Index;
