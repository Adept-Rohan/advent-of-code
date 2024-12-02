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

const transformedData = myData.map(item => item.split(" ").map(Number))



const checkArray = (array) => {
    const greatData = array.map(subArray => {
        let increasing = true
        let decreasing = true

        for (let i = 0; i < subArray.length - 1; i++) {
            let difference = (subArray[i] - subArray[i + 1])
            console.log("🚀 ~ checkArray ~ difference:", difference)

            if (difference > 0) decreasing = false;
            if (difference < 0) increasing = false;

            if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
                return false;
            }
        }
        return increasing || decreasing

    })
    console.log(greatData)
    return greatData
}

const result = checkArray(transformedData)

const totalSafeCount = result.filter(boo => boo === true).length
console.log("🚀 ~ totalSafeCount:", totalSafeCount)
