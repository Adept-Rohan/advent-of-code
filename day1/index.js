import { promises as fs } from "fs";

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


List1 = List1.sort((x, y) => x - y);
console.log("🚀 ~ List1:", List1)
List2 = List2.sort((x, y) => x - y);
console.log("🚀 ~ List2:", List2)

const Diff = [];

for (let i = 0; i < List1.length; i++) {
    Diff.push(Math.abs(List1[i] - List2[i]));
}



console.log(Diff)


const result = Diff.reduce((x, y) => x + y, 0)
console.log("🚀 ~ result:", result)
