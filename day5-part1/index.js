import { promises as fs } from 'fs'



async function parseInputFromFile(filePath) {
    const data = await fs.readFile(filePath, "utf-8");
    const lines = data.split("\n");

    const rulesArray = [];
    const updatesArray = [];

    for (const line of lines) {
        if (line.includes("|")) {
            rulesArray.push(line);
        } else if (line.includes(",")) {
            updatesArray.push(line);
        }
    }


    return { rulesArray, updatesArray };
}

const { rulesArray, updatesArray } = await parseInputFromFile("input.txt");


function parseInputFromArray(rulesArray, updatesArray) {
    const rules = rulesArray.map(rule => {
        const [x, y] = rule.split("|").map(Number)
        return [x, y]
    })

    const updates = updatesArray.map(update =>
        update.split(",").map(Number)
    );
    console.log("🚀 ~ parseInputFromArray ~ updates:", updates)
    console.log("🚀 ~ parseInputFromArray ~ rules:", rules)

    return { rules, updates };
}


function isValidUpdate(update, rules) {

    const pageIndex = new Map();
    update.forEach((page, index) => pageIndex.set(page, index));



    for (const [x, y] of rules) {
        console.log(x, y, 'input')
        if (pageIndex.has(x) && pageIndex.has(y)) {
            if (pageIndex.get(x) > pageIndex.get(y)) {
                return false;
            }
        }
    }
    return true;
}

function getMiddlePage(update) {
    const middleIndex = Math.floor(update.length / 2);
    return update[middleIndex];
}

function calculateMiddlePageSumFromArrays(rulesArray, updatesArray) {
    const { rules, updates } = parseInputFromArray(rulesArray, updatesArray);
    let middlePageSum = 0;

    for (const update of updates) {
        if (isValidUpdate(update, rules)) {
            middlePageSum += getMiddlePage(update);
        }
    }

    return middlePageSum;
}

const answer = calculateMiddlePageSumFromArrays(rulesArray, updatesArray)
console.log("🚀 ~ answer:", answer)


