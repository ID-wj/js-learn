/**
 * 先处理传进来的列表，新建一个对象，对象的键是每一个元素的id，值就是该id的元素
 * 然后需要做的就是把每一个元素有parentId的放到他父元素的children里，再把有parentId的过滤掉，返回
 * @param {*} arr 列表
 * @returns 树
 */
const list2tree = (arr) => {
  let info = arr.reduce((prev, next) => {
    prev[next.id] = next;
    next.children = [];
    return prev;
  }, {});
  return arr.filter((item) => {
    info[item.parentId]?.children.push(item);
    return !item.parentId;
  });
};

const arr = [
  {
    id: '1-1',
    name: 'aa',
    parentId: '1',
  },
  {
    id: '1-1-1',
    name: 'aaa',
    parentId: '1-1',
  },
  {
    id: '1',
    name: 'a',
    parentId: '',
  },
  {
    id: '2-1',
    name: 'b1',
    parentId: '2',
  },
  {
    id: '2-2',
    name: 'b2',
    parentId: '2',
  },
  {
    id: '2',
    name: 'b',
    parentId: '',
  },
];

console.log(JSON.stringify(list2tree(arr)));
