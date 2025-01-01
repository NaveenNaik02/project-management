import React, { useCallback } from "react";
import Modal from "./Modal";
import { useNewTaskModal } from "@/contexts";
import NewTaskForm from "./newTaskForm";

type Props = {
  id?: string;
};

const NewTaskModal = ({ id }: Props) => {
  const { isNewTaskModalOpen, setIsNewTaskModalOpen } = useNewTaskModal();
  const handleNewTaskModalClose = useCallback(() => {
    setIsNewTaskModalOpen(false);
  }, [setIsNewTaskModalOpen]);
  return (
    <Modal
      isOpen={isNewTaskModalOpen}
      onClose={handleNewTaskModalClose}
      name="Create New Task"
    >
      <NewTaskForm id={id} />
    </Modal>
  );
};

export default NewTaskModal;
