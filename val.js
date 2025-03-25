const fs = require("fs");
const { execSync } = require("child_process");

// Replace with your Val.town username and function name
const VALTOWN_USERNAME = "your_valtown_username";
const FUNCTION_NAME = "your_function_name";

// Fetch Val.town function as a file
const valtownUrl = `https://val.town/v/${VALTOWN_USERNAME}.${FUNCTION_NAME}.js`;
fetch(valtownUrl)
  .then(response => response.text())
  .then(data => {
    fs.writeFileSync(`./${FUNCTION_NAME}.js`, data);
    
    // Git commands to push to GitHub
    execSync("git add .");
    execSync(`git commit -m "Updated ${FUNCTION_NAME} from Val.town"`);
    execSync("git push origin main");

    console.log(`✅ ${FUNCTION_NAME}.js updated and pushed to GitHub!`);
  })
  .catch(err => console.error("❌ Error fetching from Val.town:", err));
