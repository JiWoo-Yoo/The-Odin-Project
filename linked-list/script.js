// factory function
const Node = (value = null, nextNode = null) => {
    return {
        value,
        nextNode,
    }
};

// linkedlist module (IIFE)
const LinkedList = (() => {
    let headNode = null;
    let tailNode = null;
    let length = 0;
    
    const append = (value) => {
        const newNode = Node(value);
        if (headNode === null) {
            headNode = newNode;
            tailNode = newNode;
        } else {
            tailNode.nextNode = newNode;
            tailNode = newNode;
        }
        length++;
    }

    const prepend = (value) => {
        const newNode = Node(value);
        if (headNode === null) {
            headNode = newNode;
            tailNode = newNode;
        } else {
            newNode.nextNode = headNode;
            headNode = newNode;
        }
        length++;
    }

    const size = () => {
        return length;
    }

    const head = () => {
        return headNode;
    }

    const tail = () => {
        return tailNode;
    }

    const at = (index) => {
        let cnt = 0;
        let currentNode = headNode;
        while (cnt <= index) {
            if (cnt === index) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
            cnt++;
        }
    }

    const pop = () => {
        let currentNode = headNode;
        for (let i = 0; i < length; i++) {
            if(i === length - 1) {
                currentNode.nextNode = null;
                tailNode = currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        tailNode = null;
    }

    const contains = (value) => {
        let currentNode = headNode;
        while (currentNode) {
            if(currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    const find = (value) => {
        let index = 0;
        let currentNode = headNode;
        while (currentNode) {
            if(currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    const toString = () => {
        let currentNode = headNode;
        let result = '';
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }

    const insertAt = (value, index) => {
        let currentNode = headNode;
        const newNode = Node(value);
        for(let i = 0; i < index; i++) {
            if(i === index - 1) {
                let temp = currentNode.nextNode;
                currentNode.nextNode = newNode;
                newNode.nextNode = temp;
                length++;
                return;
            }
            currentNode = currentNode.nextNode;
        }
    }

    const removeAt = (index) => {
        let currentNode = headNode;
        for(let i = 0; i < index; i++) {
            if(i === index - 1) {
                currentNode.nextNode = currentNode.newNode.nextNode;
                length--;
            }
        }
    }
    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }
})();

