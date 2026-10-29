<?php
/**
 * Plugin Name: RVCE Chatbot
 * Plugin URI: 
 * Description: Interactive AI chatbot for RV College of Engineering (RVCE).
 * Version: 1.0.0
 * Author: Hemanth BV
 * Text Domain: rvce-chatbot
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Enqueue styles and scripts
function rvce_chatbot_enqueue_assets() {
    $version = '1.0.0';
    wp_enqueue_style( 'rvce-chatbot-style', plugin_dir_url( __FILE__ ) . 'assets/style.css', array(), $version );
    
    // Enqueue Inter font
    wp_enqueue_style( 'rvce-chatbot-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap', array(), null );

    wp_enqueue_script( 'rvce-chatbot-script', plugin_dir_url( __FILE__ ) . 'assets/script.js', array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'rvce_chatbot_enqueue_assets' );

// Inject HTML into footer
function rvce_chatbot_inject_html() {
    ?>
    <!-- RVCE Chatbot HTML -->
    <canvas id="particles"></canvas>

    <div class="app-container">
        <!-- Floating Chat Widget Button -->
        <button class="chat-fab" id="chatFab" title="Chat with RVCE Assistant">
            <span class="fab-icon open-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </span>
            <span class="fab-icon close-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </span>
            <span class="fab-badge" id="fabBadge">1</span>
        </button>

        <!-- Chat Window -->
        <div class="chat-window" id="chatWindow">
            <!-- Header -->
            <div class="chat-header">
                <div class="header-left">
                    <div class="avatar-container">
                        <div class="avatar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5"/>
                                <path d="M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <div class="avatar-ring"></div>
                    </div>
                    <div class="header-info">
                        <h1>RVCE Assistant</h1>
                        <div class="status-row">
                            <span class="status-dot"></span>
                            <span class="status-text">Online — Ready to help</span>
                        </div>
                    </div>
                </div>
                <div class="header-actions">
                    <div class="tone-switch" id="toneSwitch" title="Toggle tone">
                        <div class="tone-track">
                            <span class="tone-emoji funny-emoji">??</span>
                            <span class="tone-emoji pro-emoji">??</span>
                            <div class="tone-thumb" id="toneThumb"></div>
                        </div>
                        <span class="tone-current-label" id="toneLabel">Funny</span>
                    </div>
                </div>
            </div>

            <!-- Quick Stats Bar -->
            <div class="stats-bar">
                <div class="stat-chip">
                    <span class="stat-icon">??</span>
                    <span>NAAC A+</span>
                </div>
                <div class="stat-chip">
                    <span class="stat-icon">??</span>
                    <span>NIRF 101-150</span>
                </div>
                <div class="stat-chip">
                    <span class="stat-icon">??</span>
                    <span>Avg 9.18 LPA</span>
                </div>
                <div class="stat-chip">
                    <span class="stat-icon">??</span>
                    <span>Est. 1963</span>
                </div>
            </div>

            <!-- Chat Messages -->
            <div class="chat-messages" id="chatMessages">
                <!-- Messages injected here -->
            </div>

            <!-- Typing Indicator -->
            <div class="typing-indicator" id="typingIndicator">
                <div class="typing-bubble">
                    <div class="typing-av">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    </div>
                    <div class="typing-dots"><span></span><span></span><span></span></div>
                </div>
            </div>

            <!-- Quick Suggestions -->
            <div class="quick-suggestions" id="quickSuggestions">
                <button class="suggestion-chip" data-query="What are the placements like?">?? Placements</button>
                <button class="suggestion-chip" data-query="How to get admission?">?? Admissions</button>
                <button class="suggestion-chip" data-query="hostels">?? Hostels</button>
                <button class="suggestion-chip" data-query="departments">?? Departments</button>
                <button class="suggestion-chip" data-query="campus life">??? Campus</button>
                <button class="suggestion-chip" data-query="contact">?? Contact</button>
            </div>

            <!-- Input Area -->
            <div class="chat-input-area">
                <div class="input-wrapper">
                    <button id="emojiBtn" class="emoji-btn" title="Main Menu">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                            <line x1="9" y1="9" x2="9.01" y2="9"/>
                            <line x1="15" y1="9" x2="15.01" y2="9"/>
                        </svg>
                    </button>
                    <button id="micBtn" class="mic-btn" title="Voice Search">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                            <line x1="12" y1="19" x2="12" y2="23"/>
                            <line x1="8" y1="23" x2="16" y2="23"/>
                        </svg>
                    </button>
                    <input type="text" id="userInput" placeholder="Ask me anything about RVCE..." autocomplete="off">
                    <button id="sendBtn" class="send-btn" title="Send">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <?php
}
add_action( 'wp_footer', 'rvce_chatbot_inject_html' );

