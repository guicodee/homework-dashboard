import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useContext, useState } from "react";
import { HomeworkContext } from "@/context/Homework";
import { useForm, Controller } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { IHomework } from "@/types/IHomework";
import { v4 as uuidv4 } from 'uuid';
import { useToast } from "@/components/ui/use-toast";

const createHomeworkFormSchema = z.object({
  title: z.string().min(2, 'Título muito curto.').max(50, 'Título muito grande'),
  subtitle: z.string().min(2, 'Sub título muito curto.').max(50, 'Sub título muito grande'),
  description: z.string().min(2, 'Descrição muito curta.'),
  priority: z.union([z.literal('low'), z.literal('medium'), z.literal('high')]),
});

type CreateHomeworkForm = z.infer<typeof createHomeworkFormSchema>;

export function CreateHomework() {
  const [open, setOpen] = useState(false);
  const { newHomework } = useContext(HomeworkContext);
  const { 
    control, 
    register, 
    handleSubmit, 
    reset, 
    formState: { isSubmitting },
  } = useForm<CreateHomeworkForm>({
    resolver: zodResolver(createHomeworkFormSchema),
    defaultValues: {
      title: '',
      subtitle: '',
      description: '',
      priority: 'low',
    }
  });
  const { toast } = useToast();

  function handleCreateNewHomework(data: CreateHomeworkForm) {
    return new Promise(() => {
      setTimeout(() => {
        const values: IHomework = {
          id: uuidv4(),
          title: data.title,
          description: data.description,
          priority: data.priority,
          done: false,
        };
    
        newHomework(values);
        reset();

        toast({
          variant: "success",
          description: 'Tarefa criada com sucesso.',
          duration: 2000,
        });
        setOpen(false);
      }, 2000);
    });
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size={"sm"}>Nova Tarefa</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Tarefa</DialogTitle>
            <DialogDescription>
              Crie sua tarefa com opções completas e personalize do seu jeito
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(handleCreateNewHomework)} className="space-y-6">
            <div className="grid items-center gap-6">
              <div className="flex gap-3 w-full">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="title" className="">Título</Label>
                  <Input 
                    required
                    {...register('title')} 
                    className="w-full"
                    id="title"
                    placeholder="Praia"
                    maxLength={50}
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="subtitle" className="">Tarefa</Label>
                  <Input 
                    required 
                    {...register('subtitle')} 
                    className="w-full" 
                    id="subtitle" 
                    placeholder="Arts" 
                    maxLength={50}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Descrição</Label>
                <Textarea 
                  required 
                  {...register('description')} 
                  placeholder="Resumo sobre a tarefa" 
                />
              </div>
              <div className="space-y-3 flex flex-col">
                <Label>Prioridade</Label>
                <Controller 
                  name="priority"
                  control={control}
                  render={({ field }) => (
                    <Select 
                      name="priority" 
                      value={field.value} 
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-[220px] flex items-center py-2 px-3 border rounded-md border-input">
                        <ArrowDown size={18} />
                        <SelectValue placeholder="Selecione a prioridade" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="low">Baixo</SelectItem>
                          <SelectItem value="medium">Médio</SelectItem>
                          <SelectItem value="high">Alto</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            
            <DialogFooter className="sm:flex gap-4">
              <DialogClose asChild>
                <Button type="button" variant={"outline"}>Cancelar</Button>
              </DialogClose>
              <Button
                disabled={isSubmitting} 
                type="submit"
                variant={"default"}
              >
                {!isSubmitting ? (
                  <span>Salvar tarefa</span>
                ) : (
                  <span>Criando...</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}