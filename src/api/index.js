const SAT_HOST = 'http://localhost:8080';
const UAT_HOST = 'http://m.maoyan.com';
const PRO_HOST = 'http://m.maoyan.com';

/*
正在热映的接口
参数：token：可选，用户标识
*/
const PLAYING_API = '/ajax/movieOnInfoList';

/*
更多正在热映的借口
参数: token：可选，用户标识
     movieIds: 需要请求的电影id列表，如果没有，请求第一页数据
*/
const MORE_PLAYING_API = '/ajax/moreComingList';

/*
即将上映的接口
参数：ci 城市id
     token 用户标识
     limit 数据长度

*/
const COMING_API = '/ajax/comingList';

/*
更多即将上映的接口
参数：ci 城市id
     token 用户标识
     limit 数据长度
     movieIds: 需要请求的电影id列表，如果没有，请求第一页数据
*/
const MORE_COMING_API = '/ajax/moreComingList';

/*
最受期待的接口
参数：ci 城市id
     token 用户标识
     limit 数据长度
     offset 第几个数据
*/
const MOST_EXPECTED_API = '/ajax/mostExpected';

/*
电影详情数据
参数: movieId 电影id
*/
const DETAILMOVIE_API = '/ajax/detailmovie';

/*
城市列表数据
*/
const CITY_LIST_API = '/dianying/cities.json';




//===================================================================================================
//影院
/*
影院名字的接口
参数：day=2018-11-15 日期
     offset=0       第几个数据
     limit=20       数据长度
*/
const CINEMALIST_API = '/ajax/cinemaList';

/*
电影详情内置影院的接口
参数：day 2018-11-15 日期
     offset 第几个数据
     limit 数据长度
     movieId 电影id
*/
const MOVIE_API = '/ajax/movie';

/*
搜索的接口
参数：kw 输入的内容
     cityId 城市id
     stype -1
*/
const SEARCH_API = '/ajax/search';

export default {
    SAT_HOST,
    UAT_HOST,
    PRO_HOST,
    PLAYING_API,
    COMING_API,
    MORE_PLAYING_API,
    MORE_COMING_API,
    MOST_EXPECTED_API,
    DETAILMOVIE_API,
    CINEMALIST_API,
    MOVIE_API,
    CITY_LIST_API,
    SEARCH_API,
}