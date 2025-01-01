"use client";

import React, { use, useCallback, useState } from "react";
import ProjectHeader from "@/components/projectHeader";
import BoardView from "../boardView";
import { Tab } from "@/interfaces/ITask";
import ListView from "../listView";
import TimelineView from "../timelineView";
import TableView from "../tableView";
import withTasks from "@/hoc/withTasks";
import { NewTaskModalProvider } from "@/contexts";
import NewTaskModal from "@/components/newTaskModal";

type Props = {
  params: Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Board);

  const handleActiveTab = useCallback((tabName: Tab) => {
    setActiveTab(tabName);
  }, []);

  const BoardViewHOC = withTasks(BoardView);
  const ListViewHOC = withTasks(ListView);
  const TimelineViewHOC = withTasks(TimelineView);
  const TableViewHOC = withTasks(TableView);

  return (
    <NewTaskModalProvider>
      <NewTaskModal id={id} />
      <ProjectHeader activeTab={activeTab} setActiveTab={handleActiveTab} />
      {activeTab === Tab.Board && <BoardViewHOC id={id} />}
      {activeTab === Tab.List && <ListViewHOC id={id} />}
      {activeTab === Tab.Timeline && <TimelineViewHOC id={id} />}
      {activeTab === Tab.Table && <TableViewHOC id={id} />}
    </NewTaskModalProvider>
  );
};

export default Project;
