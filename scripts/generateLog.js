const fs = require("fs");
const path = require("path");

const today = new Date().toISOString().split("T")[0];

const content = `
# Dev Log - ${today}

## 🚀 What I Learned Today
- Placeholder (you can later automate or expand this)

## 🧠 Notes
- Consistency beats intensity.

## 🔧 Improvements
- Add real API integration later

---
Generated automatically
`;

const filePath = path.join(__dirname, `../logs/${today}.txt`);

fs.writeFileSync(filePath, content.trim());

console.log("Log generated:", filePath);
