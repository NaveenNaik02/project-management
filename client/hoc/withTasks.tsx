import React, { ComponentType } from "react";
import { useGetTasksQuery } from "@/state/api";
import { ITask } from "@/interfaces/ITask";

type WithTasksProps = {
  id: string;
};

type InjectedProps = {
  tasks: ITask[];
  isLoading: boolean;
  isError: boolean;
};

const withTasks = <P extends object>(
  WrappedComponent: ComponentType<P & InjectedProps>,
) => {
  const ComponentWithTasks = (
    props: Omit<P, keyof InjectedProps> & WithTasksProps,
  ) => {
    const { id } = props;
    const {
      data: tasks,
      isError,
      isLoading,
    } = useGetTasksQuery({ projectId: Number(id) });

    return (
      <WrappedComponent
        {...(props as P)}
        tasks={tasks || []}
        isLoading={isLoading}
        isError={isError}
      />
    );
  };

  ComponentWithTasks.displayName = `WithTasks(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithTasks;
};

export default withTasks;
