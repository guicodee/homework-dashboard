import { IHomework } from "@/types";
import { ReactNode, createContext, useState } from "react";

type HomeworkContextType = {
  homeworks: IHomework[];
  newHomework(homework: IHomework): void;
};

export const HomeworkContext = createContext({} as HomeworkContextType);

export function HomeworkProvider({ children }: { children: ReactNode }) {
  const [homeworks, setHomeworks] = useState<IHomework[]>([]);

  function newHomework(homework: IHomework) {
    console.log('add', homework)
    setHomeworks((previus) => [...previus, homework]);
  }

  return (
    <HomeworkContext.Provider value={{ newHomework, homeworks }}>
      {children}
    </HomeworkContext.Provider>
  )
}