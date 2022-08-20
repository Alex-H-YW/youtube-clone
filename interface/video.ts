export interface Ivideos {
    [x: string]: any;
    videos: [Ivideo]
};

export interface Ivideo extends Ivideos {
    kind: string;
    id:Iid;
    snippet:Isnippet;
    statistics?: Istatistics;
};

export interface Iid {
    kind:string;
    videoId:string;
};

export interface Isnippet {
    [x: string]: any;
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Ithumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
};

interface Ithumbnails {
    default: Ithumbnail;
    medium: Ithumbnail;
    high: Ithumbnail;
    standard?: Ithumbnail;
    maxres?: Ithumbnail;
};

interface Ithumbnail {
    url:string;
    width:string;
    height:string;
};

export interface Istatistics {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;

}