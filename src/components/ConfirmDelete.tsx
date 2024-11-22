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


const ConfirmDelete = ({deleteItem}:{deleteItem?: () => void;}) => {
    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                <MdDelete className="cursor-pointer text-red-500 text-2xl" onClick={(e) => e.stopPropagation()} />
            </AlertDialogTrigger>
            <AlertDialogContent  onClick={(e) => e.stopPropagation()} >
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-red-500 flex items-center gap-1.5 "><ImWarning className="text-red-600" /> Confirm Deletion</AlertDialogTitle>
                    <AlertDialogDescription>Are you sure you want to delete this item? This action cannot be undone.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={deleteItem} className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ConfirmDelete;