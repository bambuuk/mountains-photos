export interface IData {
  id: string;
  img: string;
  comments: {
    date?: string;
    name?: string;
    text?: string;
  }[];
}
