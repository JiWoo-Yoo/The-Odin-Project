// my rule
// : 해싱한 키의 값이 이미 존재할 경우 덮어쓴다.

// hashMap module 만들기
const HashMap = (() => {
    let bucket = {};

    // hash function
    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    } 

    const set = (key, value) => {
        const hKey = hash(key);
        if (!bucket[hKey]) {
            bucket[hKey] = value;
        }
        else { // 이미 값이 존재하면 update
            console.log(`${key} updated: (${bucket[hKey]}) -> (${value})`);
            bucket[hKey] = value;
        }
    }

    const get = (key) => {
        const hKey = hash(key);
        if (!bucket[hKey]) return null;
        return bucket[hKey];
    }
    // !!: boolean type change
    const has = (key) => {
        const hKey = hash(key);
        return !!bucket[hKey];
    }

    const remove = (key) => {
        const hKey = hash(key);
        if (bucket[hKey]) {
            console.log(`${key} removed: ${bucket[hKey]}`);
            delete bucket[hKey];
            return true;
        }
        return false;
    }

    const length = () => {
        return Object.keys(bucket).length;
    }

    const clear = () => {
        console.log('hashTable cleared');
        bucket = {};
    }

    const keys = () => {
        return Object.keys(bucket);
    }

    const values = () => {
        return Object.values(bucket);
    }

    const entries = () => {
        return Object.entries(bucket);
    }

    return {
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }
})();

const hashMap = HashMap;