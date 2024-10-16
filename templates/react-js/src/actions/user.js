import axios from "axios";

import api from "@utils/functions/api";

export const getUser = async () => {
    try {
        const response = await api.get("/user/me");
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return { error: error.response?.data?.msg || 'Erro desconhecido' };
          }
          return { error: 'Erro na requisição' };
    };
};