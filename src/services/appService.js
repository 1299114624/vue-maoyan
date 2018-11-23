import http from '../utils/http'
import API from '../api'

//取得城市列表数据
export function getCityList(){
    return new Promise((resolve,reject)=>{
        http({
            url: API.CITY_LIST_API,
            method: 'GET'
        })
        .then(({data,status})=>{
            // console.log(data)
            let cityMap = {};
            data.cts.map(item=>{
                //取得首字母
                let letter = item.py[0];
                //按首字母分类
                if(!cityMap[letter]){
                    cityMap[letter] = [];
                }
                cityMap[letter].push(item);
            })
            // console.log(cityMap)
            //选择排序,升序
            let keys = Object.keys(cityMap);
            // console.log(keys)
            for(let i = 0; i < keys.length; i++){
                for(let j = i+1; j< keys.length ;j++){
                    if(keys[i] > keys[j]){
                        let tmp = keys[i];
                        keys[i] = keys[j];
                        keys[j] = tmp;
                    }
                }
            }
            // console.log(keys)
            //组装数据
            let newData = keys.map(item=>{
                return {
                    key: item,
                    value: cityMap[item]
                }
            })
            // console.log(data.cts)
            resolve({
                keys,
                olddata:data.cts,
                data:newData
            })
        })
        .catch(()=>{

        })
    })
}