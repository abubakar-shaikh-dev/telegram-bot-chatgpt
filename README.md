
# XERY AI Bot

XERY AI is a Telegram bot that leverages the ChatGPT-4.2 API to provide intelligent conversation capabilities.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js v20
- Telegram Bot Token
- RapidAPI Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/xery-ai-bot.git
   cd xery-ai-bot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a file named `.env` in the root directory.
   - Add your environment variables by following the structure of `.env.local`.
   <br>
   Example `.env` file:
   ```env
   BOT_TOKEN=your-telegram-bot-token
   RAPIDAPI_KEY=your-rapidapi-key
   ```

4. **Run the bot:**
   ```bash
   node index.js
   ```

### Usage

1. Open Telegram and search for your bot.
2. Start a conversation by sending the `/start` command.
3. Use the `/chat` command followed by your message to chat with the bot.

### Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

### License

This project is licensed under the MIT License.