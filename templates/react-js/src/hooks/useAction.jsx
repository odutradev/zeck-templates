import { toast } from "react-toastify";

const useAction = async ({ action, callback, toastMessages }) => {
  const send = async () => {
    const result = await action();
    if (result && typeof result === 'object' && 'error' in result) {
      toast.warning(result.error);
      throw new Error(result.error);
    }
    if (callback) setTimeout(() => callback(), 500);
  };

  await toast.promise(send(), toastMessages);
};

export default useAction;
