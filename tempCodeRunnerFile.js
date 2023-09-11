let name = 'zhangsan'
const obj = {
    name : 'lisi',
    sayName:function(){
        console.log(this.name);
    }
}

obj.sayName()