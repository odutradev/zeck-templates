import { manageActionError } from '@utils/functions/action';
import api from '@utils/functions/api';

import type { SomeResourceType, CreateData, UpdateData } from './types';
import type { TypeOrError } from '@utils/types/action';

export const createSomeResource = async (data: CreateData): TypeOrError<SomeResourceType> => {
  try {
    const response = await api.post("/resource", data);
    return response.data;
  } catch (error) {
    return manageActionError(error);
  }
};

export const getSomeResource = async (id: string): TypeOrError<SomeResourceType> => {
  try {
    const response = await api.get(`/resource/${id}`);
    return response.data;
  } catch (error) {
    return manageActionError(error);
  }
};

export const updateSomeResource = async (id: string, data: UpdateData): TypeOrError<SomeResourceType> => {
  try {
    const response = await api.patch(`/resource/${id}`, data);
    return response.data;
  } catch (error) {
    return manageActionError(error);
  }
};

export const deleteSomeResource = async (id: string): TypeOrError<void> => {
  try {
    await api.delete(`/resource/${id}`);
    return;
  } catch (error) {
    return manageActionError(error);
  }
};