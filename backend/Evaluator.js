const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = "AIzaSyAJaQ1PxinUvCGr5YL3uXVT3merq6GzEJA";
const question = "Explain the Process of Photosynthesis.";
const answer =
  "Photosynthesis is the process by which green plants convert sunlight into chemical energy, producing oxygen as a byproduct";
async function generateContent() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `The Question is ${question} and the answer given is ${answer}, How correct is the answer ? Just give answer on Scale of 1-10 nothing more and al
  so Consider the fact that it is given by someone of 12-15 years of age`;
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

generateContent();
