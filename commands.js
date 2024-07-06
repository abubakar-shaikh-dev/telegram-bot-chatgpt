import axios from "axios";
import bot from "./bot.js";

export const handleStart = (msg) => {
  const chatId = msg.chat.id;
  const userFirstName = msg.from.first_name;

  const response = `🤖 Hello, ${userFirstName}! Welcome to XERY AI. How can I assist you today?`;

  bot.sendMessage(chatId, response);
};

export const handleChat = async (msg, match) => {
  const chatId = msg.chat.id;
  const userMessage = match[1];

  bot.sendMessage(chatId, "🤖 Thinking..");

  bot.sendChatAction(chatId, "typing");

  const options = {
    method: "POST",
    url: "https://chatgpt-42.p.rapidapi.com/conversationgpt4-2",
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
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

    // Add a delay before sending the message
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay

    bot.sendMessage(chatId, botResponse);
  } catch (error) {
    console.error(error);

    bot.sendChatAction(chatId, "typing");

    // Add a delay before sending the message
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay

    bot.sendMessage(
      chatId,
      "Sorry, something went wrong while processing your request."
    );
  }
};
