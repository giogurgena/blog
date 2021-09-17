import { Paging } from '../paging';
import { Articles } from './articles';

export interface ArticlesResponse {
  articles: Articles[];
  paging: Paging;
}
