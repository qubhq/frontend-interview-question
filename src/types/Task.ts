export interface Task {
  id: number;
  title: string;
  completed: boolean;
  category?: string;
}

export type FilterType = "all" | "completed" | "pending";
