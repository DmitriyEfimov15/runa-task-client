import { FC, ReactNode, useRef, useState, DragEvent } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog";
import { Input } from "@/src/shared/ui/input";
import { Button } from "@/src/shared/ui/button";
import { cn } from "@/src/shared/lib/utils";

type UploadFileProps = {
  children: ReactNode;
  multiple?: boolean;
  onSubmit: (files: File[]) => Promise<void>;
  accept?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const UploadFile: FC<UploadFileProps> = ({
  children,
  multiple = false,
  onSubmit,
  accept,
  onOpenChange,
  open,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const selected = Array.from(fileList);
    setFiles(multiple ? selected : [selected[0]]);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const resetFiles = (open: boolean) => {
    if (!open) {
      setFiles([]);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open);
    }
    resetFiles(open)
  };

  const handleSubmit = async (files: File[]) => {
    await onSubmit(files)
    setFiles([])
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-full">
        <DialogTitle>Смена аватара</DialogTitle>
        <div className="flex flex-col gap-4 w-full">
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragActive(true);
            }}
            onDragLeave={() => setIsDragActive(false)}
            onDrop={handleDrop}
            className={cn(
              "flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition",
              isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/30",
            )}
          >
            <p className="text-xs md:text-sm text-muted-foreground">
              Перетащите файл сюда или нажмите
            </p>
            <p className="text-xs text-muted-foreground">
              {multiple ? "Можно выбрать несколько файлов" : "Только один файл"}
            </p>
          </div>

          <Input
            ref={inputRef}
            type="file"
            multiple={multiple}
            accept={accept}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          {files.length > 0 && (
            <ul className="space-y-1 text-sm w-full">
              {files.map((file) => (
                <li key={file.name} className="truncate max-w-55" title={file?.name}>
                  {file?.name}
                </li>
              ))}
            </ul>
          )}

          <Button disabled={files.length === 0} onClick={() => handleSubmit(files)}>
            Загрузить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
