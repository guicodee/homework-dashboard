export type IHomework = {
  id: string
  title: string
  description: string
  priority: Priority
  done: boolean
}

export type Priority = "low" | "medium" | "high"