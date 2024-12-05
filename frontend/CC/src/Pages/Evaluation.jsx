import React from "react";
import { useState } from "react";
import Questions from "./Questions";

const Evaluation = () => {
  const questionsData = Questions;
  const [answers, setAnswers] = useState({
    english_questions: {},
    science_questions: {},
    math_questions: {},
  });

  const handleAnswerChange = (category, id, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [category]: {
        ...prevAnswers[category],
        [id]: answer,
      },
    }));
  };

  const handleSubmit = () => {
    // Validate that all questions have been answered
    const allCategories = Object.keys(questionsData);
    const isAllAnswered = allCategories.every((category) =>
      questionsData[category].every(
        (question) => answers[category][question.id]?.trim() !== ""
      )
    );

    if (!isAllAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    console.log("Submitted Answers:", answers);
    alert("Quiz submitted successfully! Check console for details.");
  };

  const renderQuestionSection = (
    questions,
    category,
    sectionTitle,
    colorClass
  ) => {
    return (
      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-4 ${colorClass}`}>
          {sectionTitle}
        </h2>
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-white shadow-md rounded-lg p-4 mb-4 border-l-4 border-blue-500"
          >
            <div className="mb-3 text-gray-800 font-medium">
              {question.question}
            </div>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows="4"
              placeholder="Type your answer here..."
              value={answers[category][question.id] || ""}
              onChange={(e) =>
                handleAnswerChange(category, question.id, e.target.value)
              }
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        8th Grade Comprehension
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {renderQuestionSection(
          questionsData.english_questions,
          "english_questions",
          "English Questions",
          "text-blue-700"
        )}

        {renderQuestionSection(
          questionsData.science_questions,
          "science_questions",
          "Science Questions",
          "text-green-700"
        )}

        {renderQuestionSection(
          questionsData.math_questions,
          "math_questions",
          "Math Questions",
          "text-purple-700"
        )}

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Submit Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default Evaluation;
