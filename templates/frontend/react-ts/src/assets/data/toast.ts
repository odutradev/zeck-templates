import { Bounce, ToastContainerProps, ToastPosition } from "react-toastify";

export const toastContainerConfig: ToastContainerProps = {
    position: "top-right" as ToastPosition,
    hideProgressBar: false,
    pauseOnFocusLoss: true,
    transition: Bounce,
    pauseOnHover: true,
    closeOnClick: false,
    newestOnTop: false,
    autoClose: 5000,
    draggable: true,
    theme: "dark",
    rtl: false,
};
