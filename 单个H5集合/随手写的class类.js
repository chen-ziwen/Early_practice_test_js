
function add (obj,cn) {
    obj.className = ` ${cn}`
}
function del(obj,cn) {
    // let a = new RegExp(`^${cn}$`)
    obj.className = obj.replace(`${cn}`,'')
}
function has(obj,cn) {
    let a = new RegExp(`^${cn}$`)
    if(a.test(obj.className))return 1
    else return 0
}
function toggle(obj,cn) {
    if(has(obj,cn)) del(obj,cn)
    else add(obj,cn)
}
class Person {
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex =sex;
        this.hu = '你就是个傻逼'
    }
    static hello = function name(params) {
        console.log('我是hello')
    }
    nihao() {
        console.log('我试试')
    }
    get gege () {
        console.log(this.hu)
        return this.hu
    }
    
    /**
     * @param {string} val
     */
    set shabi (val) {
        console.log(val,'我是坚不可摧')
    }
 } 
class Czw extends Person{
    constructor(name,age,sex,jiba,hj){
     super(name,age,sex);
     this.jiba = jiba
     this.hj = hj
    }
     abc = 'nihao';
     czw = '陈子文';
     a() {
         console.log('hehei')
     }
    //  nihao(){
    //      super
    //  }
}
let czwson = new Czw('陈子文',22,'男','20厘米','很大')
console.log(czwson.name,czwson.age,czwson.hj)
czwson.nihao()
// czwson.hello()
Person.hello()
czwson.gege
czwson.shabi = '你坚不可摧个屁，你就在我的后面吃屁'
Person.prototype.apple = function (params) {
    console.log('我是苹果')
}
czwson.apple()
console.log(czwson.__proto__.constructor.a())