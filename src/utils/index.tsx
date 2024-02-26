import { Slide } from "react-toastify";

export const TOAST_OBJ = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    
  } as const;