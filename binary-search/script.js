const Node = (value = null, leftChild = null, rightChild = null) => {
    return {
        value,
        leftChild,
        rightChild
    }
}

const buildTree = (array) => {
    if(!array.length) {
        return null;
    }

    const middle = Math.floor(array.length / 2);
    const root = Node(array[middle]);
    root.leftChild = buildTree(array.slice(0, middle));
    root.rightChild = buildTree(array.slice(middle + 1));

    return root;
};

const Tree = (() => {
    let root = null;
    const size = 0;

    const insert = (value) => {
        const newNode = Node(value);
        if (root === null) {
            root = newNode;
        } else {
            let current = root;
            while (true) {
                if (value < current.value) {
                    if (current.leftChild === null) {
                        current.leftChild = newNode;
                        break;
                    }
                    current = current.leftChild;
                } else {
                    if (current.rightChild === null) {
                        current.rightChild = newNode;
                        break;
                    }
                    current = current.rightChild;
                }
            }
        }
    };

    const deleteItem = (value) => {
        let currentNode = root;
        while (true) {
            if (value === currentNode.value) {
                if(currentNode.leftChild === null && currentNode.rightChild === null) {
                    currentNode = null;
                    console.log(`deleted ${value}`);
                    return;
                }
                else if(currentNode.rightChild === null) {
                    currentNode = currentNode.leftChild;
                    console.log(`deleted ${value}`);
                    return;
                }else if(currentNode.leftChild === null) {
                    currentNode = currentNode.rightChild;
                    console.log(`deleted ${value}`);
                    return;
                }else { // 양쪽 모두 자식이 있음
                    // 오른쪽 서브트리 중 가장 작은 노드로 교체
                    let tempNode = currentNode.rightChild;
                    while(tempNode.leftChild) {
                        tempNode = tempNode.leftChild;
                    }
                    currentNode.value = tempNode.value;
                    tempNode = null;
                    console.log(`deleted ${value}`);
                    return;
                }
            }
            else if (value < currentNode.value) {
                if (currentNode.leftChild === null) {
                    // 찾는게 없음
                    console.log(`cannot find ${value}`);
                    return false;
                }
                currentNode = currentNode.leftChild;
            }
            else {
                if (currentNode.rightChild === null) {
                    // 찾는게 없음
                    console.log(`cannot find ${value}`);
                    return false;
                }
                currentNode = currentNode.rightChild;
            }
        }
    };

    const find = (value) => {
        let currentNode = root;
        while (true) {
            if (currentNode.value === value) {
                return currentNode;
            }
            else if (value < currentNode.value) {
                if (currentNode.leftChild === null) {
                    return false;
                }
                currentNode = currentNode.leftChild;
            }
            else {
                if (currentNode.rightChild === null) {
                    return false;
                }
                currentNode = currentNode.rightChild;
            }
        }
    };

    const levelOrder = (callback) => {
        // queue 이용
        if (!callback) {
            throw new Error('input a callback funciton.');
        }
        const queue = [root];
        while (queue.length > 0) {
            const node = queue.shift();
            callback(node.value);
            if (node.leftChild) {
                queue.push(node.leftChild);
            }
            if (node.rightChild) {
                queue.push(node.rightChild);
            }
        }
    };

    const inOrder = (node, result = []) => {
        if (!node) {
            return;
        }
        // L
        if (node.leftChild) {
            inOrder(node.leftChild, result);
        }
        // V
        result.push(node.value);

        // R
        if (node.rightChild) {
            inOrder(node.rightChild, result);
        }
        return result;
    };

    const preOrder = (node, callback) => {
        if (!callback) {
            throw new Error('input a callback funciton.');
        }
        if (!node) {
            return;
        }

        // V
        callback(node.value);

        // L
        if (node.leftChild) {
            preOrder(node.leftChild, callback);
        }

        // R
        if (node.rightChild) {
            preOrder(node.rightChild, callback);
        }
    };

    const postOrder = (node, callback) => {
        if (!callback) {
            throw new Error('input a callback funciton.');
        }
        if (!node) {
            return;
        }

        // L
        if (node.leftChild) {
            postOrder(node.leftChild, callback);
        }

        // R
        if (node.rightChild) {
            postOrder(node.rightChild, callback);
        }

        // V
        callback(node.value);
    };

    const height = (node) => {
        if (node === null) {
            return -1;
        }

        // 왼쪽 서브트리의 높이와 오른쪽 서브트리의 높이
        let leftHeight = height(node.leftChild);
        let rightHeight = height(node.rightChild);

        // 현재 노드의 높이는 왼쪽과 오른쪽 서브트리 중 더 큰 높이에 1을 더한 값
        return Math.max(leftHeight, rightHeight) + 1;
    };

    const depth = (node) => {
        const findDepth = (current, target, currentDepth) => {
            if (current === null) {
                return -1;  // 타겟 노드를 찾을 수 없을 때
            }
            if (current === target) {
                return currentDepth;  // 타겟 노드를 찾았을 때
            }
    
            // 왼쪽 서브트리에서 타겟 노드를 찾기
            let leftDepth = findDepth(current.leftChild, target, currentDepth + 1);
            if (leftDepth !== -1) {
                return leftDepth;
            }
    
            // 오른쪽 서브트리에서 타겟 노드를 찾기
            let rightDepth = findDepth(current.rightChild, target, currentDepth + 1);
            return rightDepth;
        };
    
        return findDepth(root, node, 0);  // 초기 깊이는 0
    };

    const isBalanced = (node) => {
        if (!node) return true;

        // 왼쪽 서브트리와 오른쪽 서브트리의 높이를 계산
        let leftHeight = height(node.leftChild);
        let rightHeight = height(node.rightChild);

        // 현재 노드에서 균형이 잡혀있는지 확인
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        // 왼쪽과 오른쪽의 서브트리 모두 균형이 잡혀 있는지 확인
        return isBalanced(node.leftChild) && isBalanced(node.rightChild);
    };

    const rebalance = () => {
        // 트리의 노드들을 정렬된 배열로 변환
        const sortedNodes = inOrder(root);

        // 정렬된 배열을 균형잡힌 이진탐색트리로 변환
        return buildTree(sortedNodes);
    };

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.rightChild !== null) {
          prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.leftChild !== null) {
          prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };
    
    return {
        insert,
        deleteItem,
        find,
        levelOrder,
        inOrder,
        preOrder,
        postOrder,
        height,
        depth,
        isBalanced,
        rebalance,
        prettyPrint,
    };
})();

const makeArr = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    arr.sort();
    return arr;
}

const tree = Tree;
tree.root = buildTree(makeArr());