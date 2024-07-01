export type IHomework = {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  done: boolean
}

export type Priority = "low" | "medium" | "high"