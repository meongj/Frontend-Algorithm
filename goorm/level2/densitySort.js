const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let materials = []; // [{},{}...]
let lineCount = 0;

rl.on("line", (line) => {
    lineCount++;
    if (lineCount === 1) {
        n = parseInt(line);
    } else {
        const [weight, volume] = line.split(" ").map(Number);

        materials.push({
            id: lineCount - 1,
            weight: weight,
            volume: volume,
            desity: weight / volume,
        });

        if (lineCount === n + 1) {
            console.log(solution());
            rl.close();
        }
    }
});

function solution() {
    const result = materials.reduce((maxMaterial, currentMaterial) => {
        if (maxMaterial.desity < currentMaterial.desity) {
            return currentMaterial;
        } else if (maxMaterial.desity === currentMaterial.desity) {
            // 밀도가 같으면 무게비교
            if (currentMaterial.weight > maxMaterial.weight) {
                return currentMaterial;
            } else if (currentMaterial.weight === maxMaterial.weight) {
                // 무게가 같으면 번호 작은지 비교
                if (currentMaterial.id < maxMaterial.id) {
                    return currentMaterial;
                }
            }
        }
        return maxMaterial;
    });

    return result.id;
}