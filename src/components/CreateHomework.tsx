import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export function CreateHomework() {

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Nova Tarefa</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Tarefa</DialogTitle>
            <DialogDescription>
              Crie sua tarefa com opções completas e personalize do seu jeito
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-6">
            <div className="grid items-center gap-6">
              <div className="flex gap-3 w-full">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="title" className="">Título</Label>
                  <Input className="w-full" id="title" placeholder="Praia" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="title" className="">Tarefa</Label>
                  <Input className="w-full" id="title" placeholder="Arts" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Descrição</Label>
                <Textarea placeholder="Resumo sobre a tarefa" />
              </div>
              <div className="space-y-3 flex flex-col">
                <Label>Prioridade</Label>
                <Select>
                  <SelectTrigger className="w-[220px] flex items-center py-2 px-3 border rounded-md border-input">
                    <ArrowDown size={18} />
                    <SelectValue placeholder="Selecione a prioridade" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="low">Baixo</SelectItem>
                      <SelectItem value="medium">Médio</SelectItem>
                      <SelectItem value="right">Alto</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <DialogFooter className="sm:flex gap-4">
              <Button type="button" variant={"outline"}>Cancelar</Button>
              <Button type="submit" variant={"default"}>Salvar tarefa</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}