import { Avatar } from "@/src/shared/ui/avatar";
import { Plus } from "lucide-react";
import { FC } from "react";

const AddProject: FC = () => {
  return (
    <div className="flex items-center gap-2 rounded-md cursor-pointer">
      <Avatar className="flex items-center">
        <Plus size={16} />
      </Avatar>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Добавить проект</span>
    </div>
  );
};

export default AddProject;
