const a = [
  {
    id: '1',
    name: 'a',
    children: [
      {
        id: '1-1',
        name: 'a1',
      },
    ],
  },
  {
    id: '2',
    name: 'b',
    children: [
      {
        id: '2-1',
        name: 'b1',
        children: [
          {
            id: '2-1-1',
            name: 'b11',
          },
        ],
      },
      {
        id: '2-2',
        name: 'b2',
      },
    ],
  },
];

const treeToList = (arr, res = []) => {
  arr.forEach((element) => {
    res.push(element);
    element.children && treeToList(element.children, res);
  });
  return res;
};

console.log(treeToList(a));
