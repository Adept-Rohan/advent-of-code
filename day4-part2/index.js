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
const grid = myData.map(row => row.split(""));
console.log("🚀 ~ grid:", grid)

function countXMAS(data) {
    const row = data.length;
    const col = data[0].length;
    let count = 0;

    const isMAS = (a, b, c) =>
        (a === "M" && b === "A" && c === "S") || (a === "S" && b === "A" && c === "M");

    for (let r = 1; r < row - 1; r++) {
        for (let c = 1; c < col - 1; c++) {
            const topLeft = data[r - 1][c - 1];
            const topRight = data[r - 1][c + 1];
            const center = data[r][c];
            const bottomLeft = data[r + 1][c - 1];
            const bottomRight = data[r + 1][c + 1];

            if (
                isMAS(topLeft, center, bottomRight) &&
                isMAS(bottomLeft, center, topRight)
            ) {
                count++;
            }
        }
    }
    return count
}

const result = countXMAS(grid)
console.log("🚀 ~ result:", result)

