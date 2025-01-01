import React, { useActionState } from "react";
import { ITaskInitialState, Priority, Status } from "@/interfaces";
import { handleAddNewTask } from "@/lib/server-action";

type Props = {
  id?: string;
};

const selectStyles =
  "mb-4 block w-full rounded border border-gray-300 px-3 py-2 dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";

const inputStyles =
  "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";

const NewTaskForm = ({ id }: Props) => {
  if (!id) {
    return <div>Project ID is required</div>;
  }
  const initialState: ITaskInitialState = {
    success: false,
    error: {
      title: "",
      projectId: "",
    },
  };
  const [state, formAction, isPending] = useActionState(
    handleAddNewTask,
    initialState,
  );
  console.log(state, "state");
  return (
    <form action={formAction} className="mt-4 space-y-6">
      <input
        type="text"
        className={inputStyles}
        placeholder="Title"
        name="title"
      />
      <textarea
        className={inputStyles}
        placeholder="Description"
        name="description"
      />
      <div className="gird grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
        <select name="status" className={selectStyles}>
          <option value="">Select Status</option>
          <option value={Status.ToDo}>To Do</option>
          <option value={Status.WorkInProgress}>Work In Progress</option>
          <option value={Status.UnderReview}>Under Review</option>
          <option value={Status.Completed}>Completed</option>
        </select>
        <select name="priority" className={selectStyles}>
          <option value="">Select Priority</option>
          <option value={Priority.Urgent}>Urgent</option>
          <option value={Priority.High}>High</option>
          <option value={Priority.Medium}>Medium</option>
          <option value={Priority.Low}>Low</option>
          <option value={Priority.Backlog}>Backlog</option>
        </select>
      </div>
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        className={inputStyles}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
        <input type="date" className={inputStyles} name="startDate" />
        <input type="date" className={inputStyles} name="dueDate" />
      </div>
      <input
        type="text"
        className={inputStyles}
        placeholder="Author User ID"
        name="authorUserId"
      />
      <input
        type="text"
        className={inputStyles}
        placeholder="Assigned User ID"
        name="assignedUserId"
      />
      {!id && (
        <input
          type="text"
          className={inputStyles}
          placeholder="ProjectId"
          name="projectId"
        />
      )}
      <button
        type="submit"
        className={`focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600`}
      >
        {isPending ? "Creating Task..." : "Create Task"}
      </button>
    </form>
  );
};

export default NewTaskForm;
