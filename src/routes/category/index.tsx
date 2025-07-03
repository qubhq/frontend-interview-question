import "./category.css";
import { useParams } from "react-router";
export default function Index() {
  const { categoryId } = useParams();
  return <div>Hello, you're on {categoryId}!</div>;
}
