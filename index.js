const app=require('./app');
const exModul = require('./exportModule');
let arr=[4,1,6,3,4,89,0];
console.log(app.xyz())
const result =arr.filter((item)=>{
    return item>=4
});
console.warn(result);
console.warn(exModul.a);
let v = 4;
let newarr = arr.filter((i,v)=>{
    return i>=5;
});
console.log(newarr);