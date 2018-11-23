import Vue from 'vue'

Vue.filter('replaceWH',(path,w,h)=>{
    // console.log(path)
    return path.replace(/w.h/,`${w}.${h}`);
})

Vue.filter('replaceDate',(content)=>{
    return content.split('周')[0]
})

Vue.filter('toUpperLetter',(content)=>{
    return content.toUpperCase()
})

Vue.filter('modifyDate',(content)=>{
    var arr = content.split('-');
    return `${arr[1]}月${arr[2]}日`
})