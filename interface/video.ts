export interface Ivideos {
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
    default:Ithumbnail
    medium:Ithumbnail
    high:Ithumbnail
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