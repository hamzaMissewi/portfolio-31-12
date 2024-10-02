import {
  AzureKeyCredential,
  ChatResponseMessage,
  OpenAIClient,
} from "@azure/openai";

export const fetchChatCompletion = async (term: string) => {
  const completions: (ChatResponseMessage | undefined)[] = [];

  const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const azureApiKey = process.env.AZURE_OPENAI_API_KEY;

  if (!endpoint) throw new Error("Missing endpoint");
  if (!azureApiKey) throw new Error("Missing Azure API Key");

  console.log(`Using endpoint: ${endpoint} and Azure API Key: ${azureApiKey}`);

  const client = new OpenAIClient(
    endpoint,
    new AzureKeyCredential(azureApiKey),
  );

  const deploymentId = "disney-clone-youtube-35";

  const result = await client.getChatCompletions(
    deploymentId,
    [
      {
        role: "system",
        content: `You are a digital video assistant working for services such as Netflix, Disney Plus & Amazon Prime Video. Your job is to provide suggestions based on the videos the user specifies. Provide an quirky breakdown of what the user should watch next! It should only list the names of the films after the introduction. Keep the response short and sweet! Always list at least 3 films as suggestions. If the user mentions a genre, you should provide a suggestion based on that genre.`,
      },
      {
        role: "user",
        content: `I like: ${term}`,
      },
    ],
    { maxTokens: 128 },
  );

  for (const choice of result.choices) {
    console.log(choice.message);
    completions.push(choice.message);
  }

  return completions[0];
};
