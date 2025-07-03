import { useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import type { FilterType, Task } from "../../types/Task";
import "./category.css";

// PART 4: This component needs to be extended with new features
//TODO: implement category filtering and add new functionality
const CategoryPage: React.FC<{
  tasks: Task[];
  toggleTask: (id: number) => void;
}> = ({ tasks, toggleTask }) => {
  const { categoryId } = useParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  // TODO: Implement category filtering logic
  const categoryTasks = useMemo((): Task[] => {
    // To implement:
    // 1. Filter tasks by categoryId from URL params
    // 2. Apply search term filtering
    // 3. Apply completion status filtering
    // 4. Handle edge cases (invalid category, no tasks, etc.)

    return tasks;
  }, [tasks]);

  const handleToggleTask = (id: number) => {
    toggleTask(id);
  };

  return (
    <div className="category-page">
      <header className="category-header">
        <nav className="breadcrumb">
          <Link to="/">← Back to All Tasks</Link>
        </nav>
        <h1>
          {categoryId
            ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Tasks`
            : "Category Tasks"}
        </h1>
        <p className="category-description">
          Showing {categoryTasks.length} tasks in the {categoryId} category
        </p>
      </header>

      <div className="category-controls">
        <input
          type="text"
          placeholder={`Search ${categoryId} tasks...`}
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

      <div className="category-tasks">
        {categoryTasks.length === 0 ? (
          <div className="no-tasks">
            <p>No tasks found in this category.</p>
            <Link to="/" className="back-link">
              View all tasks
            </Link>
          </div>
        ) : (
          <div className="task-grid">
            {categoryTasks.map((task) => (
              <div key={task.id} className="category-task-card">
                <div className="task-info">
                  <h3 className={task.completed ? "completed" : ""}>
                    {task.title}
                  </h3>
                  <span className="task-status">
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                </div>
                <button
                  onClick={() => handleToggleTask(task.id)}
                  className={`status-toggle ${task.completed ? "completed" : "pending"}`}
                >
                  {task.completed ? "✓ Done" : "○ Mark Done"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TODO: should add new features here such as:
          - Add new task form for this category
          - Task notes/descriptions
      */}
      <div className="category-actions">
        <p className="todo-note">
          🚧 TODO: Add new task creation form and additional features here
        </p>
      </div>
    </div>
  );
};

export default CategoryPage;
