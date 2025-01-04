import React from "react";
import ReusablePriorityPage from "@/components/reusablePriorityPage";
import { Priority } from "@/interfaces";

const Backlog = () => {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
};

export default Backlog;
