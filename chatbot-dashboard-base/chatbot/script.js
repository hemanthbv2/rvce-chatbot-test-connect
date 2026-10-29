document.addEventListener('DOMContentLoaded', () => {
    const fab = document.getElementById('chat-fab');
    const chatContainer = document.getElementById('chat-container');
    const closeBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle Chat Window
    const toggleChat = () => {
        chatContainer.classList.toggle('active');
        if (chatContainer.classList.contains('active')) {
            chatInput.focus();
        }
    };

    fab.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Send Message
    const sendMessage = () => {
        const text = chatInput.value.trim();
        if (!text) return;

        // 1. Display User Message
        appendMessage(text, 'user');
        chatInput.value = '';

        // =========================================================================
        // YOUR ALGORITHM GOES HERE
        // Replace this simulation with your actual chatbot logic (e.g., fetch API)
        // =========================================================================
        
        // Simulating a thinking delay
        setTimeout(() => {
            const botResponse = generateBotResponse(text);
            appendMessage(botResponse, 'bot');
        }, 1000);
    };

    // Helper: Append Message to UI
    const appendMessage = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.textContent = text;
        
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // Auto-scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // Placeholder Logic for Bot Response (REPLACE WITH YOUR ALGORITHM)
    const generateBotResponse = (userInput) => {
        const input = userInput.toLowerCase();
        if (input.includes('hello') || input.includes('hi')) {
            return "Hello! How can I assist you with RVCE queries today?";
        } else if (input.includes('admission')) {
            return "For admission queries, please visit the official RVCE admission portal or contact the administration desk.";
        }
        return "I'm a boilerplate bot! You can replace me with your actual algorithm logic.";
    };

    // Event Listeners for sending
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});
