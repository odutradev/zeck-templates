import { Bounce } from "react-toastify";

const config = {
    toast: {
        hideProgressBar: false,
        pauseOnFocusLoss: true,
        position: "top-right",
        newestOnTop: false,
        pauseOnHover: true,
        closeOnClick: true,
        transition: Bounce,
        draggable: true,
        autoClose: 5000,
        theme: "dark",
        rtl: false,
      }
};

export default config;