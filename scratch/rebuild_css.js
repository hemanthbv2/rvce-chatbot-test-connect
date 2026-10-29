const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace('--bg-dark: #0A0F1E;', '--bg-dark: #E6E6E6;');
css = css.replace('--bg-chat: #12182B;', '--bg-chat: #F5F5F5;');
css = css.replace('--bg-header: #1A2235;', '--bg-header: #FFFFFF;');
css = css.replace('--bg-input: #1A2235;', '--bg-input: #FFFFFF;');
css = css.replace('--text: #F8FAFC;', '--text: #1E293B;');
css = css.replace('--text-2: #CBD5E1;', '--text-2: #475569;');
css = css.replace('--text-3: #94A3B8;', '--text-3: #64748B;');
css = css.replace('--glass: rgba(255, 255, 255, 0.05);', '--glass: rgba(0, 0, 0, 0.08);');
css = css.replace('--user-bg: linear-gradient(135deg, #004B8D, #003366);', '--user-bg: linear-gradient(135deg, #0081C6, #006096);');
css = css.replace('--bot-bg: #1A2235;', '--bot-bg: #FFFFFF;');
css = css.replace('--bot-border: rgba(255,255,255,0.05);', '--bot-border: rgba(0,0,0,0.08);');
css = css.replace('--btn-bg: rgba(255,255,255,0.03);', '--btn-bg: #FFFFFF;');
css = css.replace('--btn-border: rgba(255,255,255,0.08);', '--btn-border: rgba(0,0,0,0.1);');

css = css.replace('--primary: #E31E24;', '--primary: #0081C6;');
css = css.replace('--primary-light: #F04248;', '--primary-light: #33A1DB;');
css = css.replace('--primary-dark: #C2191E;', '--primary-dark: #006096;');
css = css.replace('--secondary: #004B8D;', '--secondary: #EB5624;');
css = css.replace('--secondary-light: #1A63A5;', '--secondary-light: #F0784F;');
css = css.replace('--primary-glow: rgba(227, 30, 36, 0.2);', '--primary-glow: rgba(0, 129, 198, 0.2);');
css = css.replace('--secondary-glow: rgba(0, 75, 141, 0.2);', '--secondary-glow: rgba(235, 86, 36, 0.2);');

css = css.replace(/background: linear-gradient\\(135deg, var\\(--primary\\) 0%, var\\(--primary-dark\\) 100%\\);/g, 'background: #0081C6;');
css = css.replace('.header-info h1 { font-size: 13.5px; font-weight: 700; letter-spacing: -0.2px; }', '.header-info h1 { font-size: 13.5px; font-weight: 700; letter-spacing: -0.2px; color: #ffffff; }');
css = css.replace('.status-text { font-size: 10px; color: rgba(255,255,255,0.8); font-weight: 500; }', '.status-text { font-size: 10px; color: #ffffff; font-weight: 500; }');

css = css.replace(/background: linear-gradient\\(135deg, #E31E24, #004B8D\\);/g, 'background: #ED4816;');
css = css.replace(/background: conic-gradient\\(from 0deg, #E31E24, #F04248, #004B8D, #E31E24\\);/g, 'background: #ED4816;');
css = css.replace(/background: linear-gradient\\(135deg, #E31E24, #C2191E\\);/g, 'background: #ED4816;');
css = css.replace(/background: linear-gradient\\(135deg, #E31E24, #F04248\\);/g, 'background: #ED4816;');

css = css.replace(/\\.clear-btn \\{[^}]*\\}/, '.clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.15); color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }');

css = css.replace('background: rgba(5,5,16,0.5);', 'background: #ffffff;');
css = css.replace('.quick-suggestions {\\n    display: flex; gap: 4px; padding: 10px 10px 8px;\\n    overflow-x: auto; flex-shrink: 0;\\n    border-top: 1px solid var(--glass);\\n}', '.quick-suggestions {\\n    display: flex; gap: 4px; padding: 10px 10px 8px;\\n    overflow-x: auto; flex-shrink: 0;\\n    border-top: 1px solid var(--glass);\\n    background: #ffffff;\\n}');
css = css.replace('.quick-suggestions {\\r\\n    display: flex; gap: 4px; padding: 10px 10px 8px;\\r\\n    overflow-x: auto; flex-shrink: 0;\\r\\n    border-top: 1px solid var(--glass);\\r\\n}', '.quick-suggestions {\\r\\n    display: flex; gap: 4px; padding: 10px 10px 8px;\\r\\n    overflow-x: auto; flex-shrink: 0;\\r\\n    border-top: 1px solid var(--glass);\\r\\n    background: #ffffff;\\r\\n}');

css = css.replace(/color: var\\(--secondary\\);/g, 'color: #007CC5;');
css = css.replace(/border-color: var\\(--primary\\); color: var\\(--primary\\);/g, 'border-color: #007CC5; color: #007CC5;');
css = css.replace(/border: 1px solid var\\(--btn-border\\);/g, 'border: 1px solid rgba(0, 124, 197, 0.3);');

fs.writeFileSync('style.css', css);
console.log('Successfully rebuilt style.css with ALL proper fixes!');
