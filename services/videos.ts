import request from "../utils/request";
// export interface Idetail {
//     part:string;
//     id:string;

// }
export const getSuggestedVideos = async () =>
request({
    method: 'GET',
    url: '/search?relatedToVideoId=7ghhRHRP6t4&part=id,snippet,statistics&type=video'
});
export const getPlaylistVideos = async () =>
request({
    method: 'GET',
    url: '/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet'
});

export const getVideoDetail = async (id:string) => {
    return request({
        method: 'GET',
        url: `/videos?part=contentDetails,snippet,statistics&id=${id}`
    });
}
   


// export const getPlaylistVideos = async () =>
// request({
//     method: 'GET',
//     url: '/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet'
// });