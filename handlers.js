import bot from "./bot.js";
import { handleStart, handleChat } from "./commands.js";

bot.onText(/\/start/, handleStart);
bot.onText(/\/chat (.+)/, handleChat);
