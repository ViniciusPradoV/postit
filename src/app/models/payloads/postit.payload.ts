import { PostItColorEnum } from "../enums/postit-color.enum";

export interface PostItPayLoad {
    id?: number,
    title: string,
    annotation: string,
    color: PostItColorEnum,
  };