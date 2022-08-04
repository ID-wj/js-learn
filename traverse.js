//树遍历
let tree = [
  {
    id: '1',
    title: '节点1',
    children: [
      {
        id: '1-1',
        title: '节点1-1',
      },
      {
        id: '1-2',
        title: '节点1-2',
      },
    ],
  },
  {
    id: '2',
    title: '节点2',
    children: [
      {
        id: '2-1',
        title: '节点2-1',
      },
    ],
  },
];

function actNode(node) {
  console.log(node.title);
}

/**
 * 广度优先
 * 维护一个数据
 * 把根放进去 执行 有子节点就放子节点进去
 * @param {*} tree
 * @param {*} func
 */
function breadthTraversal(tree, func) {
  let node,
    list = [...tree];
  while ((node = list.shift())) {
    func(node);
    node.children && list.push(...node.children);
  }
}
console.log('广度优先');
breadthTraversal(tree, actNode);

/**
 * 深度优先-先序
 * @param {*} tree
 * @param {*} func
 */
function deepTraversalPreorder(tree, func) {
  tree.forEach((element) => {
    func(element);
    element.children && deepTraversalPreorder(element.children, func);
  });
}

/**
 * 深度优先-先序循环
 * @param {*} tree
 * @param {*} func
 */
function deepTraversalPreorderFor(tree, func) {
  let node,
    list = [...tree];
  while ((node = list.shift())) {
    func(node);
    node.children && list.unshift(...node.children);
  }
}
console.log('深度优先先序递归');
deepTraversalPreorder(tree, actNode);
console.log('深度优先先序循环');
deepTraversalPreorderFor(tree, actNode);

/**
 * 深度优先-后序
 * @param {*} tree
 * @param {*} func
 */
function deepTraversalPost(tree, func) {
  tree.forEach((element) => {
    element.children && deepTraversalPost(element.children, func);
    func(element);
  });
}

/**
 * 深度优先-后序循环
 * @param {*} tree
 * @param {*} func
 */
function deepTraversalPostFor(tree, func) {}

deepTraversalPost(tree, actNode);
