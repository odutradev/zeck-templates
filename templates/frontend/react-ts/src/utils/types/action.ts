export interface ResponseError  {
    error: string;
};

export interface ResponseDeleted {
    delete: boolean
};

export type DeletedOrError = TypeOrError<ResponseDeleted>;
export type TypeOrError<T> = Promise<T | ResponseError>;