export interface IData {
  id: string;
  img: string;
  comments: {
    date?: string;
    text?: string;
  }[];
}
