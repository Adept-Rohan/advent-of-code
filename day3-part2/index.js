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
    const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/;

    const doRegex = /do\(\)/g;
    const dontRegex = /don't\(\)/g;

    let isEnabled = true;
    let sum = 0;

    const tokens = data.split(/(?=mul\(|do\(\)|don't\(\))/);

    for (const token of tokens) {
        console.log("🚀 ~ sumValidMultiplications ~ token:", token)

        if (doRegex.test(token)) {
            isEnabled = true
        } else if (dontRegex.test(token)) {
            isEnabled = false
        } else if (isEnabled) {
            const match = mulRegex.exec(token)
            console.log("🚀 ~ sumValidMultiplications ~ match:", match)
            if (match) {
                const num1 = parseInt(match[1])
                const num2 = parseInt(match[2])
                sum += num1 * num2
            }
        }
    }
    return sum
}

const result = sumValidMultiplications(myData[0])
console.log("🚀 ~ result:", result)
