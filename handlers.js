import bot from './bot';
import { handleStart, handleChat } from './commands';

bot.onText(/\/start/, handleStart);
bot.onText(/\/chat (.+)/, handleChat);