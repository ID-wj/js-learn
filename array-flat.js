const arr = [1, [1, 2, 3], [[1, [5]]]];

/**
 * 原生方法
 */

const aflat1 = (val) => {
  return val.flat(Infinity);
};

/**
 * reduce
 * @param {*} val 多维数组
 * @returns 新数组
 */

const aflat2 = (val) => {
  return val.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? aflat2(next) : next);
  }, []);
};

/**
 * 递归
 *
 */

const aflat3 = (val) => {
  let temp = [...val];
  let res = [];
  while (temp.length) {
    let prev = temp.shift();
    if (Array.isArray(prev)) {
      res.push(...aflat3(prev));
    } else {
      res.push(prev);
    }
  }
  return res;
};

console.log(aflat3(arr));
