import { Language } from "./language";

export interface Article {
  id: string,
  categoryId: string,
  categoryName: string,
  imageUrl: string,
  createDate: string,
  languages: Language[]
}