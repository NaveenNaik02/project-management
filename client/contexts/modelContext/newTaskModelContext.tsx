import React, { createContext, useCallback, useContext, useState } from "react";

type NewTaskModalContext = {
  isNewTaskModalOpen: boolean;
  setIsNewTaskModalOpen: (isOpen: boolean) => void;
};

const ModalContext = createContext<NewTaskModalContext | undefined>(undefined);

export const NewTaskModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNewTaskModalOpen, setIsModalNewTaskOpen] = useState(false);

  const handleSetIsModalNewTaskOpen = useCallback((isOpen: boolean) => {
    setIsModalNewTaskOpen(isOpen);
  }, []);
  return (
    <ModalContext.Provider
      value={{
        isNewTaskModalOpen,
        setIsNewTaskModalOpen: handleSetIsModalNewTaskOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useNewTaskModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useNewTaskModal must be used within a NewTaskModalProvider",
    );
  }
  return context;
};
