// Space - 0(n)
// Time - 0(n*m) 

// there is room for improvment, erronous code
function designingFileSystem(listOfNames) {
    // use a hash map
    const namesMap = {};
    populateNamesMap(listOfNames, namesMap);

    // checks the key-value pairs and generate the output
    return generateListOfUniqueFileNames(namesMap);
}

function populateNamesMap(list, map) {
    for(const element of list) {
        if(map[element]) {
            map[element] += 1;
        } else {
            map[element] = 1;
        }
    }
}

function generateListOfUniqueFileNames(map) {
    const res = [];

    for(const fileName in map) {
        if(map[fileName] === 1) {
            res.push(fileName);
        } else {
            res.push(fileName);
            for(let i=1; i<map[fileName]; i++) {
                let newFileName = `${fileName}(${i})`;

                while(true) {
                    let newFileName2 = newFileName;
                    if(newFileName2 in map) {
                        newFileName2 = getIncrementalNewFileName(newFileName2);
                    } else {
                        res.push(newFileName2);
                        break;
                    }
                }

                res.push(newFileName);
            }
        }
    }

    console.log(res);
    return res;
}

function getIncrementalNewFileName(fileName) {
    let start = 0;
    let end = 0;
    for(let i=0; i<fileName.length; i++) {
        if(fileName[i] === '(') {
            start = i;
        } else if(fileName[i] === ')') {
            end = i;
        }
    }
    return parseInt(fileName.slice(start, end));
}

designingFileSystem(["Valorant","Valorant(1)","Valorant","Valorant(2019)"]);