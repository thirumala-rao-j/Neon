const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.createOpenAiId = async (req, res) => {
  const assistant = await openai.beta.assistants.create({
    model: "gpt-4-turbo",
  });

  // const myUpdatedAssistant = await openai.beta.assistants.update(
  //   "asst_XcSq0V13K7GHSGyAmaG3zS9j",
  //   {
  //     instructions:
  //       "You are an HR bot, and you have access to files to answer employee questions about company policies. Always response with info from either of the files.",
  //     name: "HR Helper",
  //     tools: [{ type: "file_search" }],
  //     model: "gpt-4-turbo",
  //   }
  // );

  res.status(201).json({
    status: "success",
    assistant_id: assistant.id,
  });
};
