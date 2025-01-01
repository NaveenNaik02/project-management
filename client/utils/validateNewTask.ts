import { createTaskSchema, ITaskInitialState } from "@/interfaces/ITask";

export const validateNewTask = (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string;
  const priority = formData.get("priority") as string;
  const tags = formData.get("tags") as string;
  const startDate = formData.get("startDate") as string;
  const dueDate = formData.get("dueDate") as string;
  const authorUserId = formData.get("authorUserId") as string;
  const assignedUserId = formData.get("assignedUserId") as string;
  const projectId = formData.get("projectId") as string;
  const initialData: ITaskInitialState = {
    success: true,
    error: {
      title: "",
      projectId: "",
    },
  };
  const newTask = createTaskSchema.safeParse({
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    projectId: Number(projectId),
    authorUserId: Number(authorUserId),
    assignedUserId: Number(assignedUserId),
  });
  if (!newTask.success) {
    initialData.success = newTask.success;
    newTask.error.issues.forEach((issue) => {
      const field = issue.path[0];
      switch (field) {
        case "title":
          initialData.error!.title = issue.message;
          break;
        case "projectId":
          initialData.error!.projectId = issue.message;
          break;
        default:
          break;
      }
    });
    return initialData;
  }
  return { ...initialData, data: newTask.data };
};
