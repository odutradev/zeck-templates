export interface ResponseError  {
    error: string;
};

export interface ResponseDeleted {
    delete: boolean
};

export type DeletedOrError = TypeOrError<ResponseDeleted>;
export type TypeOrError<T> = Promise<T | ResponseError>;

export interface PaginationMeta {
    pages: number;
    limit: number;
    total: number;
    page: number;
};
  
export interface PaginationResponse<T> {
    meta: PaginationMeta;
    data: T[];
};
  
export type PaginationOrError<T> = TypeOrError<PaginationResponse<T>>;
  
export interface PaginationOptions {
    limit?: number;
    page?: number;
};
  