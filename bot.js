import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

export default bot;