import React from "react";
import Header from "@/components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./utils";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import { useAppSelector } from "@/store/redux";
import { Task } from "@/interfaces";
import { useNewTaskModal } from "@/contexts";

type Props = {
  tasks: Task[];
  isLoading: boolean;
  isError: boolean;
};

const TableView = ({ tasks, isError, isLoading }: Props) => {
  const isDark = useAppSelector((state) => state.global.isDarkMode);
  const { setIsNewTaskModalOpen } = useNewTaskModal();
  if (isLoading) return <div>Loading...</div>;
  if (isError || !tasks)
    return <div>An error occurred while fetching tasks at Table View</div>;
  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="Table"
          buttonComponent={
            <button
              className="flex items-center rounded bg-blue-primary px-3 text-white hover:bg-blue-600"
              onClick={() => setIsNewTaskModalOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>
      <DataGrid
        rows={tasks || []}
        columns={columns}
        className={dataGridClassNames}
        sx={dataGridSxStyles(isDark)}
      />
    </div>
  );
};

export default TableView;
