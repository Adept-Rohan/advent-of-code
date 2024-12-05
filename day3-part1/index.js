import { promises as fs } from 'fs'

async function readFileAndProcess() {
    try {
        const data = await fs.readFile("input.txt", "utf8")
        const formattedData = data.split("\n")
        return formattedData
    } catch (error) {
        console.error(error)
    }
}

const myData = await readFileAndProcess()
console.log(myData[0])

function sumValidMultiplications(data) {
    const validMulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

    let match;
    let totalSum = 0;

    while ((match = validMulRegex.exec(data)) !== null) {
        const num1 = parseInt(match[1], 10);
        const num2 = parseInt(match[2], 10);
        totalSum += num1 * num2;
    }

    return totalSum;
}

const result = sumValidMultiplications(myData[0])
console.log("🚀 ~ result:", result)







