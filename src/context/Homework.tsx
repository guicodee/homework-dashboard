import { IHomework } from "@/types/IHomework";
import { Priority } from "@/types/Priority";
import { ReactNode, createContext, useEffect, useState } from "react";

type HomeworkContextType = {
  currentPriority: Priority | null;
  homeworks: IHomework[];
  filteredHomeworks: IHomework[];
  newHomework(homework: IHomework): void;
  filteredByPriority(priority: Priority): void;
  deletedHomeworks(id: string): void;
  resetFilter(): void;
};

export const HomeworkContext = createContext({} as HomeworkContextType);

export function HomeworkProvider({ children }: { children: ReactNode }) {
  const [homeworks, setHomeworks] = useState<IHomework[]>([]);
  const [filteredHomeworks, setFilteredHomeworks] = useState<IHomework[]>([]);
  const [currentPriority, setCurrentPriority] = useState<Priority | null>(null);

  useEffect(() => {
    setFilteredHomeworks(homeworks)
  }, [homeworks]);

  function newHomework(homework: IHomework) {
    setHomeworks((previus) => [...previus, homework]);
  }

  function filteredByPriority(priority: Priority) {
    const filtered = homeworks.filter((homework) => homework.priority === priority);
    setFilteredHomeworks(filtered);
    setCurrentPriority(priority);
  }

  function deletedHomeworks(id: string) {
    const deletedHomework = homeworks.filter((homework) => homework.id !== id);
    setHomeworks(deletedHomework);
  }

  function resetFilter() {
    setFilteredHomeworks(homeworks);
    setCurrentPriority(null);
  }

  return (
    <HomeworkContext.Provider value={{ newHomework, homeworks, filteredHomeworks, resetFilter, filteredByPriority, currentPriority, deletedHomeworks }}>
      {children}
    </HomeworkContext.Provider>
  )
}