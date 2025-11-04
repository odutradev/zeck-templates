import packageJson from "../../../package.json";

interface DefaultConfig {
    mode: 'developing' | 'production';
    baseURL: string;
    version: string;
};

const production = import.meta.env.VITE_PRODUCTION == 'true';
const baseURL = import.meta.env.VITE_BASEURL;


let defaultConfig: DefaultConfig = production ? {
    version: packageJson.version,
    mode: 'production',
    baseURL
}  : {
    version: packageJson.version,
    mode: 'developing',
    baseURL
};

export default defaultConfig;