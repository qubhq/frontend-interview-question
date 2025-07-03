import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
import type { Task, FilterType } from "../../types/Task";
import "./index.css";

// PART 1a: This component has a bug that prevents the completed count from updating
// BUG: The completed count display doesn't update when tasks change
// HINT: Think about what data this useEffect depends on to calculate the counts
const TaskList: React.FC<{
  tasks: Task[];
  onToggleTask: (id: number) => void;
}> = ({ tasks, onToggleTask }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setCompletedCount(tasks.filter((task) => task.completed).length);
    setTotalCount(tasks.length);
  }, []);

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
          onClick={() => onToggleTask(task.id)}
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
const TaskManager: React.FC<{
  tasks: Task[];
  toggleTask: (id: number) => void;
}> = ({ tasks, toggleTask }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  // TODO: Implement filtering logic here
  // HINT: You need to filter the tasks array based on two criteria:
  // 1. Search term: Does the task title contain the search term? (case-insensitive)
  // 2. Filter status: Does the task match the selected filter (all/completed/pending)?
  const filteredTasks = useMemo(() => {
    // Start with all tasks, then apply filters step by step
    // Remember: "pending" means NOT completed
    return tasks;
  }, [tasks]);

  return (
    <div className="task-manager">
      <header className="task-header">
        <h1>Personal Task Manager</h1>
        <nav className="category-nav">
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

      <TaskList tasks={filteredTasks} onToggleTask={toggleTask} />
    </div>
  );
};

function Index({
  tasks,
  toggleTask,
}: {
  tasks: Task[];
  toggleTask: (id: number) => void;
}) {
  return <TaskManager tasks={tasks} toggleTask={toggleTask} />;
}

export default Index;
