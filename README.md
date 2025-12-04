# chatbot
# chatbot

This project is a simple chatbot interface built using React inside a single HTML file. The app provides a clean user interface where users can type a message and receive an automated bot response. It demonstrates how React can be used directly inside an HTML file without bundlers or build tools.

Features:
---------

 1. User & Bot Messaging:

    Users can enter messages, and the chatbot responds using a predefined bot logic.

 2. Typing / Loading Indicator:

    While waiting for the bot to respond, a “Typing…” message appears to show that the bot is generating a reply.

 3. Simple Chat UI:

    Messages are displayed in a structured chat layout with user and bot avatars for clarity.

 4. React Without Build Tools:

    This project uses:
        •	React
        •	ReactDOM
        •	Babel Standalone

All loaded via CDN, meaning no setup, no installation, and no bundling is required.

 5. Clean Component Structure:

    The UI is divided into logical React components:
        •	ChatInput
        •	ChatMessage
        •	ChatMessages
        •	App

This keeps the code organized and easy to understand.

File Structure:
---------------
    chatbot.html
    chatbot.css
    robot.png
    user.png

NOTE:
-----
    •This project is meant for learning purposes, showing how to use React inside a static HTML file.
	•It can be extended with APIs, styling, animations, or backend integrations.
