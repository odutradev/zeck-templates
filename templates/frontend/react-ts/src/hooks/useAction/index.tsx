import { toast } from "react-toastify";

import { defaultToastMessages } from "./defaultValues";
import type { UseActionProps } from "./types";

const useAction = async ({ action, callback, onError, toastMessages }: UseActionProps): Promise<void> => {
  const send = async () => {
    const result = await action();
    if (result && typeof result === "object" && "error" in result){
      toast.warning(result.error);
      throw new Error(result.error);
    }
    if (callback) setTimeout(() => callback(result), 500);
  };

  toastMessages = { ...defaultToastMessages, ...toastMessages };

  try {
    await toast.promise(send(), toastMessages);
  } catch (error) {
    if (onError && error instanceof Error) {
      onError(error);
    }
    throw error;
  }
};

export default useAction;
