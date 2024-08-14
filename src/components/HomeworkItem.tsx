import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useContext } from "react";
import { HomeworkContext } from "@/context/Homework";
import { useToast } from "@/components/ui/use-toast";

interface HomeworkItemProps {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  done: boolean
}

export function HomeworkItem({id, title, description, priority, done}: HomeworkItemProps) {
  const { deleteHomework, toggleHomeworkIsDone } = useContext(HomeworkContext);
  const { toast } = useToast();

  function handleDeleteHomework() {
    setTimeout(() => {
      deleteHomework(id);
      toast({
        variant: "success",
        description: 'Tarefa foi excluída com sucesso.',
        duration: 2000,
      });
    }, 2000);
  }

  function handleDoneHomework() {
    setTimeout(() => {
      toggleHomeworkIsDone(id);
      toast({
        variant: "success",
        description: 'Tarefa finalizada com sucesso.',
        duration: 2000,
      });
    }, 2000);
  }

  return (
    <div className={`border mb-8 p-4 rounded-md ${done ? 'bg-zinc-800/50' : ''}`}>
      <div className="flex justify-between mb-8">
        <div>
          <h2 className={`text-xl antialiased font-medium mb-2 ${done ? 'line-through text-muted-foreground' : 'text-zinc-200'} max-md:text-lg`}>{title}</h2>
          <span className={`text-base antialiased ${done ? 'line-through text-zinc-400 text-muted-foreground' : 'text-zinc-200'} max-md:text-sm`}>{description}</span>
        </div>
        <div className="flex flex-col">
          <Label className="text-sm font-semibold text-zinc-300 mb-2">Status</Label>
          <div className={`font-medium text-sm px-3 rounded-full ${priority === 'low' && 'bg-green-700 text-green-200'} ${priority === 'medium' && 'bg-yellow-700 text-yellow-200'} ${priority === 'high' && 'bg-red-700 text-red-100'} ${done ? 'line-through bg-zinc-700/40' : ''}`}>
            <span>{priority}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={handleDeleteHomework} size={"sm"} variant={"destructive"}>
          <Trash className="h-5 max-md:h-4" />
        </Button>
        <Button onClick={handleDoneHomework} size={"sm"} className="flex items-center gap-3 font-semibold" variant={done ? 'default' : 'success'}>
          {!done ? (
            <span className="max-md:text-sm">Concluído</span>
          ) : (
            <span className="max-md:text-sm">Desfazer</span>
          )}
        </Button>
      </div>
    </div>
  )
}