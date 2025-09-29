import {BASE_URL} from "../constants/urls.ts";

export const getPublicImagesUrl = (imageInternalPath: string) => BASE_URL +'/images/'+ imageInternalPath;