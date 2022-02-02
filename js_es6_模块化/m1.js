//分别暴露
export function mod () {
    console.log("我爱你")
}

export let obj = {
     name : "你好",
     age : 18,
     phone : "小米"
 }
//合并暴露
 function moudel () {
     console.log("我是一个测试用的")
 }

 let array = [1,3,56,89,,56,23,3,3]

 export {moudel,array}; 

 //合并暴露出一个函数每一个数组
  //可以这么用，一次性传出多个 ，每个暴露出去的数据可以是任意的数据类型，不限内容