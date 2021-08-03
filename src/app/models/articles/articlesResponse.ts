import { Paging } from '../paging';
import { Article } from './articles';

export interface ArticlesResponse {
  articles: Article[];
  paging: Paging;
}
