import { UrlMetaResponse } from "./url-meta-response";

export interface ScanResultsDto {
    urls: string[];
    status: Status;
    urlMetaResults: UrlMetaResponse[];
    key: string;
    createdOn: Date | null;
    notificationEmail: string | null;
}

enum Status {
    New,
    InProgress,
    Done,
    Error
}