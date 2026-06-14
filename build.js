// Build complete index.html for BMR Calculator v2.0
const fs = require('fs');
const target = 'C:/Users/助理/代谢计算器/index.html';

// Helper to build HTML piece by piece
let H = '';

function add(s) { H += s + '\n'; }
