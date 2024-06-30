export type IHomework = {
  id: string
  title: string
  description: string
  status: "baixo" | "medio" | "alto"
  done: boolean
}

export type Priority = "baixo" | "medio" | "alto"