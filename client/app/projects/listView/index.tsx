import Header from "@/components/Header";
import TaskCard from "@/components/taskCard";
import { useNewTaskModal } from "@/contexts";
import { Task } from "@/interfaces";
import React from "react";

type Props = {
  tasks: Task[];
  isLoading: boolean;
  isError: boolean;
};

const ListView = ({ tasks, isError, isLoading }: Props) => {
  const { setIsNewTaskModalOpen } = useNewTaskModal();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred while fetching tasks</div>;
  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="List"
          buttonComponent={
            <button
              className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsNewTaskModalOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tasks?.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default ListView;
