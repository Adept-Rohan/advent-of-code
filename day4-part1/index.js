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
const gridArray = myData.map(row => row.split(""));


function countXMAS(data) {
    const word = "XMAS"
    const rows = data.length
    const col = data[0].length

    let count = 0;
    let wordLength = word.length

    const directions = [
        { dr: 0, dc: 1 },  // Horizontal (right)
        { dr: 0, dc: -1 }, // Horizontal (left)
        { dr: 1, dc: 0 },  // Vertical (down)
        { dr: -1, dc: 0 }, // Vertical (up)
        { dr: 1, dc: 1 },  // Diagonal (down-right)
        { dr: 1, dc: -1 }, // Diagonal (down-left)
        { dr: -1, dc: 1 }, // Diagonal (up-right)
        { dr: -1, dc: -1 } // Diagonal (up-left)
    ];

    function checkDirection(r, c, dc, dr) {
        for (let i = 0; i < wordLength; i++) {
            const nr = r + dr * i;
            const nc = c + dc * i;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= col || data[nr][nc] !== word[i]) {
                return false
            }
        }
        return true
    }


    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < col; c++) {
            for (const { dr, dc } of directions) {
                if (checkDirection(r, c, dc, dr)) {
                    count++
                }
            }
        }
    }
    return count

}

const result = countXMAS(gridArray)
console.log("🚀 ~ result:", result)
