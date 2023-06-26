export interface MainContentsType {
  data: {
    contents: string;
    createdAt: string;
    id: string;
    image: {
      utl: string;
    };
    publishedAt: string;
    title: string;
    updatedAt: string;
    new?: string;
  };
}
export interface SubContentsType {
  data: {
    createdAt: string;
    image: {
      utl: string;
    };
    id: string;
    publishedAt: string;
    title: string;
    updateAt: string;
    hit?: string;
  };
}

export interface ContentsType {
  contents: MainContentsType | SubContentsType;
  limit: number;
  offset: number;
  totalCount: number;
}
