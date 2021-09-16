export interface Language {
  culture: string;
  caption: string;
}

export interface ArticleLanguage extends Language {
  description: string;
}
