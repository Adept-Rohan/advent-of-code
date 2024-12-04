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

const isIncreasingOrDecreasing = (array) => {
    let increasing = true
    let decreasing = true

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) decreasing = false
        if (array[i] > array[i + 1]) increasing = false
    }

    console.log("🚀 ~ isIncreasingOrDecreasing ~ increasing || decreasing:", increasing || decreasing)
    return increasing || decreasing
}

const validDifference = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        const differences = Math.abs(array[i] - array[i + 1])
        if (differences < 1 || differences > 3) return false
    }
    return true
}


const isSafe = (array) => isIncreasingOrDecreasing(array) && validDifference(array);


const checkArray = (array) => {
    const greatData = array.map(subArray => {

        if (isSafe(array)) {
            return true
        }

        for (let i = 0; i < subArray.length; i++) {
            const modifiedArrayPart1 = subArray.slice(0, i)
            console.log("🚀 ~ greatData ~ modifiedArrayPart1:", modifiedArrayPart1)
            const modifiedArrayPart2 = subArray.slice(i + 1)
            console.log("🚀 ~ greatData ~ modifiedArrayPart2:", modifiedArrayPart2)

            const finalArray = modifiedArrayPart1.concat(modifiedArrayPart2)

            if (isSafe(finalArray)) {
                return true
            }
        }
        return false
    })
    console.log("🚀 ~ checkArray ~ greatData:", greatData)
    return greatData
}


const result = checkArray(transformedData)
console.log("🚀 ~ result:", result)


const finalResult = result.filter((res) => res === true).length
console.log("🚀 ~ finalResult:", finalResult)



