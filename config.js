import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.production ? 'https://hostguest-backend.herokuapp.com/' : 'http://localhost:8000';
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const GOOGLE_CLIENT_ID =722419178757-le6fn8kpvjo7dch9nl6vg4jlo01mm150.apps.googleusercontent.com