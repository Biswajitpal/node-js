let a=20;
let b=10;

setTimeout(()=>{
   b=30;
   console.log("sync",a+b);
},2000)


console.log("async",a+b)
