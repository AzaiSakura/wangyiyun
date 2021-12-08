import {
    request
} from "./request";

//获取音乐信息
export function getMusic(id){
    return request({
        url :'/check/music',
        params:{
            id
        }
    })
}