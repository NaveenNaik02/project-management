import ReusablePriorityPage from "@/components/reusablePriorityPage";
import { Priority } from "@/interfaces";

const High = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default High;
