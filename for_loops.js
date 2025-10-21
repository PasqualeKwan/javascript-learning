// lesson_6_for_loops.js

// 2 // --- For Loops ---

let regions = ["us-west-1", "us-east-1", "eu-west-1", "ap-southeast-1"];

for (let i = 0; i < regions.length; i++) {
    console.log("Deploying to region: " + regions[i]);
}
