const lcs = function (a1, a2) {
  const len1 = a1.length;
  const len2 = a2.length;

  // 初始化
  const db = new Array(len1);
  for (let i = 0; i < len1; i++) {
    db[i] = new Array(len2).fill('');
  }

  for(let i = 0; i < len1; i++) {
    db[i][0] = a1
  }
  return db;
};

const str1 = 'abcdfg';
const str2 = 'bfg';

console.log(lcs(str1, str2));
