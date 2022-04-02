// Space - 0(n)
// Time - 0(n*mlogm) 

function designingFileSystem(listOfNames) {
    // use a hash map
    const namesMap = {};
    populateNamesMap(listOfNames, namesMap);
    // checks the key-value pairs and generate the output
    return generateListOfUniqueFileNames(namesMap);
}

function populateNamesMap(list, map) {
    for(const element of list) {
        let [checkedElement, suffix] = getCheckedElementAndSuffix(element);
        if(map[checkedElement]) {
            suffix = checkSuffixNotExistsOrReturnNewSuffix(map[checkedElement], suffix);
            map[checkedElement].push(suffix);
        } else {
            map[checkedElement] = [suffix];
        }
    }
}

function getCheckedElementAndSuffix(string) {
    let suffixFlag = false;
    let start = 0;
    let end = 0;
    for(let i=0; i<string.length; i++) {
        if(string[i] === '(') {
            start = i;
            suffixFlag = true;
        } else if(string[i] === ')') {
            end = i;
        }
    }

    if(suffixFlag) {
        return [string.slice(0, start), parseInt(string.slice(start+1, end))];
    } else {
        return [string, 0];
    }
}

function checkSuffixNotExistsOrReturnNewSuffix(array, suffix) {
    if(!array.includes(suffix)) return suffix;

    array.sort();
    let curIdx = array.indexOf(suffix)
    let prevIdx = curIdx - 1;
    let nextIdx = curIdx + 1;
    let leftToSuffix = suffix-1;
    let rightToSuffix = suffix+1;

    while(prevIdx >= 0) {
        if(array[prevIdx] != leftToSuffix)  {
            return leftToSuffix;
        } else {
            prevIdx--;
            leftToSuffix -= 1;
        }
    }

    while(nextIdx < array.length) {
        if(array[nextIdx] != rightToSuffix)  {
            return rightToSuffix;
        } else {
            nextIdx++;
            rightToSuffix += 1;
        }
    }

    return leftToSuffix >= 0 ? leftToSuffix : rightToSuffix;

}

function generateListOfUniqueFileNames(namesMap) {
    let res = [];
    for(const key in namesMap) {
        let keyValueArray = namesMap[key];
        for(const element of keyValueArray) {
            if(element === 0) res.push(key);
            else {
                res.push(`${key}(${element})`);
            }
        }
    }
    return res;
}



console.log(designingFileSystem(["Valorant(3)", "Valorant(3)", "Valorant(3)", "Valorant(3)", "Valorant(3)"]));
