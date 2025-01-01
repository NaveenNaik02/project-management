import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useUpdateTaskStatusMutation } from "@/state/api";
import TaskColumn from "./utils/taskColumn";
import { Task } from "@/interfaces";

type Props = {
  tasks: Task[];
  isLoading: boolean;
  isError: boolean;
};

const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

const BoardView = ({ tasks, isLoading, isError }: Props) => {
  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const moveTask = (taskId: number, toStatus: string) => {
    updateTaskStatus({ taskId, status: toStatus });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An Error occurred while loading tasks</div>;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {taskStatus.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks || []}
            moveTask={moveTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default BoardView;
