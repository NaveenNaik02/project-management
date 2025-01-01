"use server";

import { ITaskInitialState } from "@/interfaces/ITask";
import { validateNewTask } from "@/utils/validateNewTask";

const handleAddNewTask = async (
  prevState: ITaskInitialState,
  formData: FormData,
) => {
  try {
    const parsedData = validateNewTask(formData);
    if (!parsedData.success || !parsedData.data) {
      return parsedData;
    }
    const res = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...parsedData.data,
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

export { handleAddNewTask };
