export type SomeResourceType = {
  id: string;
  name: string;
  value: number;
};

export type CreateData = {
  name: string;
  value: number;
};

export type UpdateData = {
  name?: string;
  value?: number;
};