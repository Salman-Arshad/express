function hello(){

  console.log("done");
  this.f=7
}

hello.prototype.hello = ()=>{
  console.log("dss.")
}
console.log(hello.prototype)