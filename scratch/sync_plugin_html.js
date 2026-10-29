const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const pluginPhp = fs.readFileSync('rvce-chatbot/rvce-chatbot.php', 'utf8');

// Extract app-container from index.html
const startIdx = indexHtml.indexOf('<div class="app-container">');
const endIdx = indexHtml.indexOf('<script src="script.js?v=10000"></script>');
const htmlSnippet = indexHtml.substring(startIdx, endIdx).trim();

// Replace in php file
const phpStartIdx = pluginPhp.indexOf('<div class="app-container">');
const phpEndIdx = pluginPhp.indexOf('</div>\n        </div>\n    </div>\n    <?php');
const phpEndFull = pluginPhp.indexOf('<?php\n}', phpStartIdx);

let newPhp = pluginPhp.substring(0, phpStartIdx) + htmlSnippet + "\n        </div>\n    </div>\n    <?php\n" + pluginPhp.substring(phpEndFull + 6);

// Ensure the ID `rvce-chatbot-root` is retained properly wrapping the app-container
const finalReplaceStart = pluginPhp.indexOf('<div id="rvce-chatbot-root" class="rvce-chatbot-widget">');
const finalReplaceEnd = pluginPhp.indexOf('<?php\n}', finalReplaceStart);

const wrapperTop = `<div id="rvce-chatbot-root" class="rvce-chatbot-widget">\n        <canvas id="particles"></canvas>\n\n        `;
const wrapperBottom = `\n    </div>\n    `;

const newSnippet = wrapperTop + htmlSnippet + wrapperBottom;

let updatedPhp = pluginPhp.substring(0, finalReplaceStart) + newSnippet + pluginPhp.substring(finalReplaceEnd);

fs.writeFileSync('rvce-chatbot/rvce-chatbot.php', updatedPhp);
console.log("Updated rvce-chatbot.php successfully.");
