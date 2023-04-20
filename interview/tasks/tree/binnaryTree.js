const binnaryTree = {
    value: 6,
    left: {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 1,
            }
        },
        right: {
            value: 7,
        }
    },
    right: {
        value: 10,
        left: {
            value: 4,
        },
        right: {
            value: 5,
        }
    }
}


function sumTree(tree) {
    let result = tree.value;

    if (tree.left) {
        result += sumTree(tree.left);
    }

    if (tree.right) {
        result += sumTree(tree.right);
    }

    return result;
}

console.log(sumTree(binnaryTree));
