import { promises as fs } from 'fs'


async function readFileAndProcess() {
    try {
        const data = await fs.readFile("input.txt", "utf8");
        const formattedData = data.split("\n");
        return formattedData;
    } catch (err) {
        console.error(err);
    }
}

let formattedData = await readFileAndProcess()
console.log("🚀 ~ formattedData:", formattedData)

let List1 = [];
let List2 = [];

for (const pair of formattedData) {
    const [num1, num2] = pair.split("   ");
    List1.push(num1);
    List2.push(num2);
}

console.log(List1)
console.log(List2)

const SimilarityRate = [];

let i, j

for (i = 0; i < List1.length; i++) {
    let count = 0
    for (j = 0; j < List2.length; j++) {
        if (List1[i] === List2[j]) count++
    }
    SimilarityRate.push(List1[i] * count)
}

let result = SimilarityRate.reduce((x, y) => x + y, 0);
console.log("🚀 ~ result:", result)
