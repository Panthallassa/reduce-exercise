const names = [
    {name: 'Elie'},              
    {name: 'Tim'}, 
    {name: 'Matt'}, 
    {name: 'Colt'}
];

const nums = [2, 5, 6, 8, 12, 1];

function extractValue(arr, key) {
    return arr.reduce(function(resultArr, obj) {
        if (obj.hasOwnProperty(key)) {
            resultArr.push(obj[key]);
        }
        return resultArr;
    }, []);
}

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.toLowerCase().split('').reduce(function(result, char) {
        if (vowels.includes(char)) {
            result[char] = (result[char] || 0) + 1;
        }
        return result;
    }, {});
}

function addKeyAndValue(arr, key, val) {
    return arr.reduce(function(resultArr, obj) {
        const newObj = { ...obj };
        newObj[key] = val;
        resultArr.push(newObj);
        return resultArr
    }, []);
}

function isEven(val) {
    return val % 2 === 0;
}

function partition(arr, callback) {
    return arr.reduce(function(result, el) {
        const index = callback(el) ? 0 : 1;
        result[index].push(el);
        return result;  
    }, [[], []]);
}