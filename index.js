import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

import { config } from "dotenv";
config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userFirstName = msg.from.first_name;

  const response = `🤖 Hello, ${userFirstName}! Welcome to XERY AI. How can I assist you today?`;

  bot.sendMessage(chatId, response);
});

bot.onText(/\/chat (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userMessage = match[1];

  bot.sendMessage(chatId, "🤖 Thinking..");

  bot.sendChatAction(chatId, "typing");

  const options = {
    method: "POST",
    url: "https://chatgpt-42.p.rapidapi.com/conversationgpt4-2",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
      system_prompt: "",
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
      web_access: false,
    },
  };

  try {
    const response = await axios.request(options);
    const botResponse = response.data.result;

    bot.sendChatAction(chatId, "typing");

    bot.sendMessage(chatId, botResponse);
  } catch (error) {
    console.error(error);

    bot.sendChatAction(chatId, "typing");

    bot.sendMessage(
      chatId,
      "Sorry, something went wrong while processing your request."
    );
  }
});

console.log("XERY AI Bot started. Press Ctrl+C to exit.");
