import http from '../utils/http'
import API from '../api'

// 请求正在热映的电影数据
export function getPlayingList(){
    return new Promise((resolve,reject)=>{

        http({
            url:API.PLAYING_API,
            method:'GET',
            data:{
                token:''
            }
        })
        .then(({data,status})=>{
            let newData = data.movieList.map(item=>{
                let {id,nm,img,version,sc,star,showInfo,wish,globalReleased} = item;
                img = img.replace(/w.h/,'64.90');
                return {id,nm,img,version,sc,star,showInfo,wish,globalReleased}
            })
            // console.log(data);
            resolve({
                data: newData,
                ids: data.movieIds
            });
        })
        .catch(()=>{

        })
    })
}

// 请求更多正在热映的电影数据
export function getMorePlayingList(ids){
    return new Promise((resolve,reject)=>{
        
        http({
            url:API.MORE_PLAYING_API,
            method:'GET',
            data:{
                token:'',
                movieIds: ids
            }
        })
        .then(({data,status})=>{
            // console.log(data)
            let newData = data.coming.map(item=>{
                let {id,nm,img,version,sc,star,showInfo,wish,globalReleased} = item;
                img = img.replace(/w.h/,'64.90');
                return {id,nm,img,version,sc,star,showInfo,wish,globalReleased}
            })
            // console.log(newData)
            resolve(newData);
        })
        .catch(()=>{

        })
    })
}


// 请求即将上映的电影数据
export function getComingList(ci){
    return new Promise((resolve,reject)=>{

        http({
            url:API.COMING_API,
            method:'GET',
            data:{
                ci,
                token:'',
                limit: 10
            }
        })
        .then(({data,status})=>{
            console.log(data)
            let newData = data.coming.map(item=>{
                let {id, nm, img, wish, star, showInfo, version, comingTitle} = item;
                img = img.replace(/w.h/,'64.90');
                return {id, nm, img, wish, star, showInfo, version, comingTitle}
            })
            resolve({
                data:newData,
                ids:data.movieIds
            })
        })
        .catch(()=>{
            
        })
    })
}

//处理即将上映的电影数据
export function handleComingList(newData){
    //按日期进行分类
    let dataMap = {};
    newData.map(item=>{
        if(!dataMap[item.comingTitle]){
            dataMap[item.comingTitle] = [];
        }
        dataMap[item.comingTitle].push(item);
    })
    // console.log(dataMap);
    return dataMap
}

// 请求更多即将上映的电影数据
export function getMoreComingList(ids,ci){
    return new Promise((resolve,reject)=>{
        http({
            url:API.MORE_COMING_API,
            method:'GET',
            data:{
                ci,
                token:'',
                limit: 10,
                movieIds: ids
            }
        })
        .then(({data,status})=>{
            console.log(data)
            let newData = data.coming.map(item=>{
                let {id, nm, img, wish, star, showInfo, version, comingTitle} = item;
                img = img.replace(/w.h/,'64.90');
                return {id, nm, img, wish, star, showInfo, version, comingTitle}
            })
            resolve(newData)
        })
        .catch(()=>{

        })
    })
}

//请求最受期待的电影数据
export function getMostExpectedData(ci){
    return new Promise((resolve,reject)=>{
        http({
            url:API.MOST_EXPECTED_API,
            method:'GET',
            data:{
                ci,
                limit: 10,
                offset: 0,
                token: ''
            }
        })
        .then(({data,status})=>{
            // console.log(data.coming)
            resolve(data.coming)
        })
        .catch(()=>{

        })
    })
}

//请求电影详情数据
export function getDetailMovie(movieId){
    return new Promise((resolve,reject)=>{
        http({
            url:API.DETAILMOVIE_API,
            method:'GET',
            data:{
                movieId
            }
        })
        .then(({data,status})=>{
            // console.log(data.detailMovie)
            let {id,nm,img,sc,enm,cat,src,pubDesc,albumImg} = data.detailMovie;
            img = img.replace(/w.h/,'148.219');
            resolve({id,nm,img,sc,enm,cat,src,pubDesc,albumImg})
        })
        .catch(()=>{

        })
    })
}

//请求搜素数据
export function getSearchMovie(kw,cityId){
    return new Promise((resolve,reject)=>{
        http({
            url:API.SEARCH_API,
            method:'GET',
            data:{
                kw,
                cityId,
                type:-1
            }
        })
        .then(({data,status})=>{
            console.log(data)
            resolve({
                movies:data.movies,
                cinemas:data.cinemas
            })
        })
        .catch(()=>{
            resolve('')
        })
    })
}

//==================================================================================================
// 请求影院数据

//请求影院名字的数据
export function getCinemaNameList(cityID){
    return new Promise((resolve,reject)=>{
        http({
            url:API.CINEMALIST_API,
            method:'GET',
            data:{
                day:Date.now(),
                offset:0,       
                limit:20,
                cityid:cityID,
                updateShowDay: true
            }
        })
        .then(({data,status})=>{
            // console.log(data)
            resolve(data.cinemas)
        })
        .catch(()=>{

        })
    })
}

//请求电影详情内置影院的数据
export function getMovieCinemaList(cityId,movieId,date){
    // console.log(cityId,movieId)

    return new Promise((resolve,reject)=>{
        http({
            url:API.MOVIE_API,
            method:'POST',
            data:{
                day:date || Date.now(),
                movieId,
                offset:0,  
                limit:20,
                item:'',
                cityId,
                updateShowDay: true
            }
        })
        .then(({data,status})=>{
            // console.log(data)
            resolve({
                cinemas:data.cinemas,
                showDays:data.showDays.dates})
        })
        .catch(()=>{

        })
    })
}

