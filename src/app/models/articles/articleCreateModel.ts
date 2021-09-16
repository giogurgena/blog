import { Language } from './language';

export interface ArticleCreateModel {
  categoryId: string;
  languages: Language[];
}
