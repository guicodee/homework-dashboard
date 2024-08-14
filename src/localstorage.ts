import { IHomework } from "@/types/IHomework";

export function getLocalStorageHomeworks(): IHomework[] {
  try {
    const localStorageHomeworks = localStorage.getItem('homeworks');
    if (localStorageHomeworks) {
      return JSON.parse(localStorageHomeworks) as IHomework[];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error parsing localStorage data", error);
    return [];
  }
}
