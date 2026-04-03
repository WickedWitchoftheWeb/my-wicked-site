export type WickedSearchItem = {
  title: string;
  href: string;

  section?: string;
  breadcrumb?: string;
  snippet?: string;
  bodyText?: string;
  keywords?: string;
};

export { WICKED_SEARCH_INDEX } from "./wickedSearchIndex.generated";