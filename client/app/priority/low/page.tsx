import ReusablePriorityPage from "@/components/reusablePriorityPage";
import { Priority } from "@/interfaces";

const Low = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Low;
