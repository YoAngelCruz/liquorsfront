import { Configuration, OpenAIApi } from "openai";

export const openaiConfig = {
  getOpenai: function () {
    const configuration = new Configuration({
      apiKey: "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",
    });

    if (!configuration.apiKey) {
      throw new Error("OpenAI API key not configured, please follow instructions in README.md");
    }

    return new OpenAIApi(configuration);
  }
};


