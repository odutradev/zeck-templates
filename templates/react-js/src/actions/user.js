import api from "../utils/functions/api";

export const getUser = async () => {
    try {
        const response = await api.get("/user/me");
        return response.data;
    } catch (error) {
        return { error: 'Erro na requisição' };
    };
};