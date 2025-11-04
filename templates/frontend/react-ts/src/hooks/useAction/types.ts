export interface ToastMessages {
    pending: string;
    success: string;
    error: string;
};
  
export interface UseActionProps {
    toastMessages?: Partial<ToastMessages>;
    onError?: (error: Error) => void;
    action: () => Promise<any>;
    callback?: (data: any) => any
};