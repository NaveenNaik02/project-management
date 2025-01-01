import Modal from "@/components/Modal";
import { IInitialState } from "@/interfaces";
import { handleAddNewProject } from "@/lib/server-action";
import React, { useActionState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const inputStyles =
  "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";

export const initialState: IInitialState = {
  success: false,
  error: {
    ProjectName: "",
    StartDate: "",
    EndDate: "",
  },
};

const NewProjectModal = ({ isOpen, onClose }: Props) => {
  const [state, formAction, isPending] = useActionState(
    handleAddNewProject,
    initialState,
  );

  console.log(state, "state");
  return (
    <Modal isOpen={isOpen} onClose={onClose} name="Create New Project">
      <form action={formAction} className="mt-4 space-y-6">
        <input
          type="text"
          placeholder="Project Name"
          className={inputStyles}
          name="projectName"
        />
        <textarea
          placeholder="Description"
          className={inputStyles}
          name="description"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <input type="date" className={inputStyles} name="startDate" />
          <input type="date" className={inputStyles} name="endDate" />
        </div>
        <button
          className="focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="submit"
        >
          {isPending ? "Creating Project..." : "Create Project"}
        </button>
      </form>
    </Modal>
  );
};

export default NewProjectModal;
