import { PostItColorEnum } from "../enums/postit-color.enum";

export interface PostItProxy {
    id: number;
    title: string;
    annotation: string;
    color: PostItColorEnum;
}