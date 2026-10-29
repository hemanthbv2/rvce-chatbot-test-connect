const fs = require('fs');

const cssToAppend = `

/* ============================================
   LANDING PAGE STYLES
   ============================================ */
.landing-wrapper {
    position: relative;
    z-index: 10; /* Above particles */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Outfit', 'Inter', sans-serif;
    color: var(--text);
    overflow-y: auto;
}

.glass-panel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
}

.navbar {
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    z-index: 100;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(0,0,0,0.05);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.brand-logo {
    height: 40px;
    width: 40px;
    object-fit: contain;
}

.brand-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--secondary);
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-2);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;
}

.nav-links a:hover {
    color: var(--primary);
}

.nav-btn-primary {
    background: var(--primary);
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px var(--primary-glow);
}

.nav-btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px var(--primary-glow);
}

.hero-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem 4rem;
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
}

.badge-pill {
    display: inline-block;
    background: rgba(0, 75, 141, 0.1);
    color: var(--secondary);
    padding: 0.4rem 1rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(0, 75, 141, 0.2);
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--text);
    letter-spacing: -1px;
}

.gradient-text {
    background: linear-gradient(135deg, var(--secondary), var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: var(--text-2);
    max-width: 600px;
    margin: 0 auto 3rem;
    line-height: 1.6;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 5rem;
}

.hero-actions .btn-primary {
    background: var(--secondary);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    box-shadow: 0 8px 24px var(--secondary-glow);
}

.hero-actions .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px var(--secondary-glow);
}

.hero-actions .btn-secondary {
    background: white;
    color: var(--text);
    border: 1px solid rgba(0,0,0,0.1);
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.hero-actions .btn-secondary:hover {
    border-color: rgba(0,0,0,0.2);
    transform: translateY(-2px);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
}

.feature-card {
    padding: 2rem;
    border-radius: 16px;
    text-align: left;
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text);
}

.feature-card p {
    font-size: 0.95rem;
    color: var(--text-2);
    line-height: 1.5;
}

.footer {
    text-align: center;
    padding: 2rem;
    color: var(--text-3);
    font-size: 0.9rem;
    margin-top: auto;
}

/* Ensure Chatbot behaves properly */
.app-container {
    pointer-events: none; /* allow clicking through to landing page */
}
.chat-fab {
    pointer-events: auto;
}
.chat-window {
    pointer-events: auto;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links a { display: none; }
    .hero-title { font-size: 2.5rem; }
    .hero-actions { flex-direction: column; }
}
`;

fs.appendFileSync('style.css', cssToAppend, 'utf8');
console.log("Appended landing page styles.");
