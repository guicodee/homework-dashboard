import { IHomework } from "@/types/IHomework";
import { Priority } from "@/types/Priority";
import { ReactNode, createContext, useEffect, useState } from "react";
import { getLocalStorageHomeworks } from "@/localstorage";

type HomeworkContextType = {
  currentPriority: Priority | null;
  homeworks: IHomework[];
  filteredHomeworks: IHomework[];
  newHomework(homework: IHomework): void;
  filteredByPriority(priority: Priority): void;
  deleteHomework(id: string): void;
  toggleHomeworkIsDone(id: string): void;
  resetFilter(): void;
};

export const HomeworkContext = createContext({} as HomeworkContextType);

export function HomeworkProvider({ children }: { children: ReactNode }) {
  const homeworksGift = getLocalStorageHomeworks();
  const [homeworks, setHomeworks] = useState<IHomework[]>(homeworksGift);
  const [filteredHomeworks, setFilteredHomeworks] = useState<IHomework[]>(homeworksGift);
  const [currentPriority, setCurrentPriority] = useState<Priority | null>(null);

  useEffect(() => {
    setFilteredHomeworks(homeworks)
  }, [homeworks]);

  useEffect(() => {
    localStorage.setItem('homeworks', JSON.stringify(homeworks));
  }, [homeworks]);

  function newHomework(homework: IHomework) {
    setHomeworks((previous) => [...previous, homework]);
  }

  function filteredByPriority(priority: Priority) {
    const filtered = homeworks.filter((homework) => homework.priority === priority && !homework.done);
    setFilteredHomeworks(filtered);
    setCurrentPriority(priority);
  }

  function deleteHomework(id: string) {
    const remainingHomeworks = homeworks.filter((homework) => homework.id !== id);
    setHomeworks(remainingHomeworks);
  }

  function toggleHomeworkIsDone(id: string) {
    const newHomeworks = homeworks.map((homework) => {
      if (homework.id === id) {
        return { ...homework, done: !homework.done };
      }
      return homework;
    });

    setHomeworks(newHomeworks);
  }

  function resetFilter() {
    setFilteredHomeworks(homeworks);
    setCurrentPriority(null);
  }

  return (
    <HomeworkContext.Provider value={{
      newHomework, 
      homeworks, 
      filteredHomeworks, 
      resetFilter, 
      filteredByPriority, 
      currentPriority, 
      deleteHomework, 
      toggleHomeworkIsDone 
    }}>
      {children}
    </HomeworkContext.Provider>
  );
}
