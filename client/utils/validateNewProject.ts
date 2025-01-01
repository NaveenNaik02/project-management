import { IInitialState, newProjectSchema } from "@/interfaces";

export const validateNewProject = (formData: FormData): IInitialState => {
  const name = formData.get("projectName");
  const description = formData.get("description");
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const initialData: IInitialState = {
    success: true,
    error: {
      ProjectName: "",
      StartDate: "",
      EndDate: "",
    },
  };

  const newProjectData = newProjectSchema.safeParse({
    name,
    description,
    startDate,
    endDate,
  });
  if (!newProjectData.success) {
    initialData.success = newProjectData.success;
    newProjectData.error.issues.forEach((issue) => {
      const field = issue.path[0];
      switch (field) {
        case "name":
          initialData.error!.ProjectName = issue.message;
          break;
        case "startDate":
          initialData.error!.StartDate = issue.message;
          break;
        case "endDate":
          initialData.error!.EndDate = issue.message;
          break;
        default:
          break;
      }
    });
    return initialData;
  }
  return { ...initialData, data: newProjectData.data };
};
