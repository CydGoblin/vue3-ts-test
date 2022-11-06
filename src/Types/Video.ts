export interface YoutubeResponse {
  kind: string;
  etag: string;
  items: Video[];
  pageInfo: VideoPageInfo;
}
export interface VideoItemsSnippetThumbnailsDefault {
  url: string;
  width: number;
  height: number;
}
export interface VideoItemsSnippetThumbnailsMedium {
  url: string;
  width: number;
  height: number;
}
export interface VideoItemsSnippetThumbnailsHigh {
  url: string;
  width: number;
  height: number;
}
export interface VideoItemsSnippetThumbnailsStandard {
  url: string;
  width: number;
  height: number;
}
export interface VideoItemsSnippetThumbnailsMaxres {
  url: string;
  width: number;
  height: number;
}
export interface VideoItemsSnippetThumbnails {
  default: VideoItemsSnippetThumbnailsDefault;
  medium: VideoItemsSnippetThumbnailsMedium;
  high: VideoItemsSnippetThumbnailsHigh;
  standard: VideoItemsSnippetThumbnailsStandard;
  maxres: VideoItemsSnippetThumbnailsMaxres;
}
export interface VideoItemsSnippetLocalized {
  title: string;
  description: string;
}
export interface VideoItemsSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoItemsSnippetThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: VideoItemsSnippetLocalized;
  defaultAudioLanguage: string;
}
export interface VideoItemsContentDetailsContentRating {}
export interface VideoItemsContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: VideoItemsContentDetailsContentRating;
  projection: string;
}
export interface VideoItemsStatistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}
export interface Video {
  _id?: string;
  kind: string;
  etag: string;
  id: string;
  snippet: VideoItemsSnippet;
  contentDetails: VideoItemsContentDetails;
  statistics: VideoItemsStatistics;
}
export interface VideoPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
