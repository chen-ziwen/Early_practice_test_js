
         window.onload = function () {
          let uls = document.querySelector(".uls");
          let lis = document.querySelectorAll("li");
          uls.style.left = 0 + "px";
          
        //   uls.offsetTop;
           
        //   let timer = setInterval(() => {
        //           uls.style.left = uls.offsetLeft+(-1)+"px";
                 

        //   },10000);
         
        

        //  自己封装函数 
        // 1.添加类函数
         function add (obj,cn) {
             obj.className =" "+cn;
         }
         //2.判断类名中是否有这个类
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
         let lis2 = document.querySelectorAll(".uls2 li");
         let chs = lis2[0];
         let person = 1;
         //点击切换图片，本质是移动div
         for(let i= 0; i<lis2.length; i++) {
             lis2[i].onclick = function () {
                uls.style.left = -520*(i)+"px";
                // toggle (lis2[i],"change")
                if(chs!=lis2[i]&&has(chs,"change")) {
                    del(chs,"change");
                    toggle(lis2[i],"change");
                }
                chs = lis2[i];
                person = i+1; 
             }
         }
              
         function move () {
           
            let speed = 1;
            let son;

            let inter = setInterval(()=>{
                clearInterval(son);
                  //控制图片的移动
                    son = setInterval(()=>{
                    
                    if(parseInt(uls.style.left)>= -person*520) {
                    uls.style.left = parseInt(uls.style.left)-speed+"px"; 
                    
                }  
                 else {
                     clearInterval(son);
                     person++;
                 }
               },5)
               
            //    clearInterval(son);
                //  person++;
                if(person>5) {
                    uls.style.left = 0+"px"; 
                    person = 0;
                }
              
           },2000);
           
           //设置底下小方块的移动，全部用person代替
           let yuan = setInterval(()=>{
            if(chs!= lis2[person]&&has(chs,"change")) {
                    del(chs,"change");
                    toggle(lis2[person],"change");
                }
                chs = lis2[person];

          },2000);
           
         }
         move();
                    
        }