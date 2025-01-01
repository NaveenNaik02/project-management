"use server";
import { initialState } from "@/components/projectHeader/utils/newProjectModal";
import { validateNewProject } from "@/utils/validateNewProject";
const handleAddNewProject = async (
  _prevState: typeof initialState,
  formData: FormData,
) => {
  try {
    const parsedData = validateNewProject(formData);
    if (!parsedData.success || !parsedData.data) {
      return parsedData;
    }
    const { name, description, startDate, endDate } = parsedData.data;

    const res = await fetch("http://localhost:8080/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        startDate,
        endDate,
      }),
    });
    await res.json();
    return {
      success: true,
    };
  } catch (error: unknown) {
    console.log(error);
    return {
      success: false,
    };
  }
};

export { handleAddNewProject };
