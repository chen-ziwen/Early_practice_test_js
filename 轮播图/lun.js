window.onload = function () {

    let uls = document.querySelector(".uls");
    let lis2 = document.querySelectorAll(".uls2 li");
    

    uls.style.left = 0 + "px"; //让内联元素left初始化为0

  //  自己封装函数 ，js有现成的方法，我自己无聊自己封装。
  // 1.添加类名的函数
   function add (obj,cn) {
       obj.className =" "+cn;
   }
   //2.判断className中是否有这个类名的
   function has (obj,cn) {
       let a = new RegExp(`\\b${cn}\\b`);
       if(a.test(obj.className)) {
           return true;
       }
       else {
           return false;
       }
   }
   //3.删除选定的类名
   function del (obj,cn) {
         obj.className = obj.className.replace(`${cn}`,""); //旧值然后新值
   }

   //4.如果有这个类名就删除，没有就添加。
   function toggle (obj,cn) {
    if(has(obj,cn)) {
        del(obj,cn);
    }
       else {
           add(obj,cn)
       }
   }

   //让轮播图上的小圆点动起来
   //保存第一个点,如果点击的不是第一个点，而且第一个点有class的话，重新绑定一个点给chs。
  
   //点击切换图片，本质是移动div
    //遍历绑定事件
  //   创建一个变量保存第一个li的值
    let chs = lis2[0] ,index = 1;
        
    /* 获取当前i的值，第一次移动会到第二张图片，
    所以到第六张图片的时候，其实只是移动了五次*/
   for(let i= 0; i<lis2.length; i++) {
       lis2[i].onclick = function () {
          // 点击第n个就往左偏移,-520px * n 的偏移量，520是盒子的宽度
          uls.style.left = -520*(i)+"px";
          if(chs!=lis2[i]&&has(chs,"change")) {
              del(chs,"change");
              toggle(lis2[i],"change");
          }
          chs = lis2[i];
          index = i; 
          
       }
   }
      //1.需要移动的元素，2.移动的速度 3.定时器的频率  
   function move (obj,speed,rate) {
      let son; //声明一个变量来存放定时器的地址。
      // 两个定时器嵌套实现
       setInterval(()=>{
      
          clearInterval(son);

            //控制图片的移动
              son = setInterval(()=>{ 
                  //把当前的盒子偏移量转换为数值，如果大于

                  /*底下的index有两个作用，一个是如果我们点击盒子底部跳转框时候，
                  会获取一个当前跳转框的索引值。例如我们点了第3个跳转框，
                  我们的index值就是2，这个值刚好偏移到第三张图片完全露出，
                  这样图片不止会跳转到第三张，同时-index*520也会被限制住。
                  第二个作用就是当我们不点击跳转框时，index值默认为1*/
              if(parseInt(obj.style.left)>= -index*520) {

              obj.style.left = parseInt(obj.style.left)-speed+"px"; 
              
          }  
          /*当我们的偏移值大于-index*520时，
          我们需要关闭内部的定时器，同时index++，进入下一次循环。*/
           else {
               obj.style.left = -index*520 +"px"; //防止出现空白
               clearInterval(son);
               index++;
           }
         },rate)
      
          //当index大于5时，让index = 0，图片重新回到第一张。
          if(index>5) {
            //   obj.style.left = 0+"px"; 
              index = 0;
          }
        
     },3000);
     
     //设置底下小方块的移动，全部用index代替
  //    这一部分是底下跳转框的跟随跳动，利用类名的添加去改变颜色
      setInterval(()=>{
      if(has(chs,"change")) {
              del(chs,"change");
              toggle(lis2[index],"change");
          }
          chs = lis2[index];

    },3000);
     
   }
   move(uls,1,4); //1.需要移动的元素，2.移动的速度 3.定时器的频率
              
  }
 