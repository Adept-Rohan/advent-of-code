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
console.log(typeof myData[0])

const myRegex = /mul\(\d{1,3},\d{1,3}\)/g;

const isMatch = myData[0].match(myRegex)
console.log("🚀 ~ isMatch:", isMatch)


let sum = 0

for (const match of isMatch) {
    const regex = /mul\((\d+),(\d+)\)/
    const myNewMatch = match.match(regex)
    sum += parseInt(myNewMatch[1]) * parseInt(myNewMatch[2])
}

console.log(sum)







