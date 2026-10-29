import re

with open('style.css', 'r') as f:
    css = f.read()

# 1. Logo colors: #ED4816 solid for the gradients
css = re.sub(r'background: linear-gradient\(135deg, #[0-9A-Fa-f]{6}, #[0-9A-Fa-f]{6}\);', 'background: #ED4816;', css)
css = re.sub(r'background: conic-gradient\(from 0deg, #[0-9A-Fa-f]{6}, #[0-9A-Fa-f]{6}, #[0-9A-Fa-f]{6}\);', 'background: #ED4816;', css)

# 2. Clear button -> white icon/border
# the current clear-btn is: .clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
css = re.sub(r'\.clear-btn \{[^}]*\}', '.clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.8); background: rgba(255,255,255,0.15); color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }', css)

# 3. Restore the typing indicator block right before .quick-suggestions::-webkit-scrollbar
missing = """
.act-btn.lk { background: rgba(16,185,129,0.06); border-color: rgba(16,185,129,0.2); color: #6ee7b7; }
.act-btn.lk:hover { background: rgba(16,185,129,0.15); border-color: var(--emerald); }
.act-btn[disabled] { opacity: 0.3; pointer-events: none; }

/* === TYPING === */
.typing-indicator { display: none; padding: 0 12px 4px; flex-shrink: 0; }
.typing-indicator.show { display: block; }
.typing-bubble {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 12px; background: var(--bot-bg);
    border: 1px solid var(--bot-border); border-radius: 4px 14px 14px 14px;
}
.typing-av { width: 18px; height: 18px; border-radius: 6px; background: #ED4816; display: flex; align-items: center; justify-content: center; color: #fff; }
.typing-dots { display: flex; gap: 3px; }
.typing-dots span { width: 5px; height: 5px; border-radius: 50%; background: var(--primary-light); animation: bounce 1.4s ease-in-out infinite; }
.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounce { 0%,60%,100% { transform: translateY(0); opacity: 0.3; } 30% { transform: translateY(-5px); opacity: 1; } }

/* === SUGGESTIONS === */
.quick-suggestions {
    display: flex; gap: 4px; padding: 10px 10px 8px;
    overflow-x: auto; flex-shrink: 0;
    border-top: 1px solid var(--glass);
}
"""

if '.typing-bubble {' not in css:
    css = css.replace('.quick-suggestions::-webkit-scrollbar', missing + '\n.quick-suggestions::-webkit-scrollbar')

with open('style.css', 'w') as f:
    f.write(css)

print("Fixed using Python!")
