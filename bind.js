Function.prototype.fackBind = function (obj, ...args) {
  return (...rest) => this.call(obj, ...args, ...rest);
};

function f(...arg) {
  console.log(this.a, arg);
}

f.bind({
  a: 1,
})(4);

f.fackBind({
  a: 1,
})(4);
