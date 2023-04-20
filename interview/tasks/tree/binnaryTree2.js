const tree = {
    value: 6,
    children: [
      {
        value: 2,
        children: [
          {value: 3},
        ]
      },
      {
        value: 4,
        children: [
          { value: 5 },
          { value: 6 }
        ]
      }
    ]
}

// with stack
function sumTree(tree) {
  const result = [];
  let stack = [tree];

  while(stack.length > 0) {
    const node = stack.shift();

    if (node.value !== undefined) {
      result.push(node.value)
    }

    if (node.children?.length) {
      stack.push(...node.children)
    }
  }

  return result;
}
console.log(sumTree(tree));

// recursive
const result = [];

function arrValues(tree) {
  result.push(tree.value)

  if (tree.children) {
    tree.children.forEach(node => {
      arrValues(node)
    })
  }

  return result;
}

console.log(arrValues(tree))
