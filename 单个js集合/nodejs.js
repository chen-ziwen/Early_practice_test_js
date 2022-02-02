
       

        
        let i = {
            name: "陈子文",
            age: 22,
            sex: "男"
        }
        console.log(i.name, i.age, i.sex);

        function Person(name, age, sex, work) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.work = work;

        };

        Person.prototype.fun = function () {
            console.log("你好,我好,大家好");
        };
        
        let czw = new Person("陈子文", 22, "男", "学生");
        // let say = czw.fn;
        czw.fun();
        // console.log(Person.fun());
        console.log(czw);
     
     