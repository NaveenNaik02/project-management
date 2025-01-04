import ReusablePriorityPage from "@/components/reusablePriorityPage";
import { Priority } from "@/interfaces";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Urgent} />;
};

export default Urgent;
