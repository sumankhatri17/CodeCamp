const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
const question = "Explain the Process of Photosynthesis.";
const answer = "otato";
async function generateContent() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `The Question is ${question} and the answer given is ${answer}, How correct is the answer ? Just give answer on Scale of 0-10 nothing more and al
  so Consider the fact that it is given by someone of 12-15 years of age`;
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

generateContent();
