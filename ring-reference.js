function ringReference(data) {
  // 使用set来保存
  let dataSet = new Set();
  let res = false;

  function test(obj) {
    if (obj && typeof obj !== "object") return;

    if (dataSet.has(obj)) return (res = true);

    dataSet.add(obj);

    //检测下级属性
    for (let dataItem in obj) {
      if (obj.hasOwnProperty(dataItem)) {
        test(obj[dataItem]);
      }
    }

    //避免不同属性指向同一个引用导致误判
    dataSet.delete(obj);
  }

  test(data);

  return res;
}

let c = { cc: "dd" };
let a = {
  name: c,
  name1: c,
};

a.name = a;
console.log(ringReference(a));
