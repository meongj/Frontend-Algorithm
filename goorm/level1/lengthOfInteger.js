// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		rl.close();
        console.log(solution(line));
	}
	
	process.exit();
})();

function solution(num) {
    return String(num).split("").length;
}