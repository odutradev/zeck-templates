import { Bounce } from "react-toastify";

const config = {
    baseURL: "https://api.lab.odutra.com/v1/",
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