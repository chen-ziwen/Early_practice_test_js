
 // obj 表示需要添加新class名的属性
// cn 表示新添加的class属性值
function addClass (obj,cn) {
    obj.className += " "+cn;
}

// obj 表示需要删除的class名的属性
// cn 表示需要删除的class属性值
function deleClass (obj,cn) {
    let a = new RegExp("\\b"+cn+"\\b")
    if( a.test(obj.className)){
        obj.className =obj.className.replace(" "+cn,"");
    }
   
}

//判断是否有这个class属性

 function hasClass (obj,cn) {
     let b = new RegExp ("\\b"+cn+"\\b");
     if(b.test(obj.className))
     return 1;
     
 }

 //集合全部的功能

 function total(obj,cn) {
     if(!hasClass(obj,cn)) {
        addClass (obj,cn)
     }
     else {
         deleClass(obj,cn);
     }
     
 }