import { MdDelete } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { ImWarning } from "react-icons/im";

const ConfirmDelete = ({
    toConfirm,
  dialogTitle,
  dialogDescription,
  dialogAction='Delete',
  dialogCancel = "Cancel",
  actionFunc,
}: {
    toConfirm: React.ReactNode;
  dialogTitle: string;
  dialogDescription: string;
  dialogAction?: string;
  dialogCancel?: string;
  actionFunc?: () => void;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {toConfirm}
      </AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-500 flex items-center gap-1.5 ">
            <ImWarning className="text-red-600" /> {dialogTitle}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {dialogDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{dialogCancel}</AlertDialogCancel>
          <AlertDialogAction
            onClick={actionFunc}
            className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
          >
            {dialogAction}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDelete;
