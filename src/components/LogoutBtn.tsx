import authService from "@/appwrite/auth";
import { logout as storeLogout } from "@/lib/store/auth/authSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { LogOut } from "lucide-react";
import React from "react";

function LogoutBtn() {
  const dispach = useAppDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => dispach(storeLogout()))
      .catch((error) => console.log("Error :: Logout :: ", error));
    
  };
  return (
    <button
      onClick={handleLogout}
      className="flex items-center w- px-4 py-2 text-sm text-red-500 w-fit hover:bg-gray-100"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </button>
  );
}

export default LogoutBtn;
