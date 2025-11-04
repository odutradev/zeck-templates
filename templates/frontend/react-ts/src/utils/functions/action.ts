import axios from "axios";

export const manageActionError = (error: unknown, log?: boolean) => {
    if (log) console.log(error);
    if (axios.isAxiosError(error) && error.response) {
        return { error: error.response.data.message || 'Erro desconhecido' };
    }
    if (error instanceof Error) return { error: error.message };
    return { error: 'Erro na requisição' };
};