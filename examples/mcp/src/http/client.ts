import { openai } from '@ai-sdk/openai';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import {
  experimental_createMCPClient as createMCPClient,
  experimental_MCPClient as MCPClient,
  generateText,
  stepCountIs,
} from 'ai';
import 'dotenv/config';

async function main() {
  const transport = new StreamableHTTPClientTransport(
    new URL('http://localhost:3000/mcp'),
  );

  const mcpClient: MCPClient = await createMCPClient({
    transport,
  });

  try {
    const tools = await mcpClient.tools();

    const { text: answer } = await generateText({
      model: openai('gpt-4o-mini'),
      tools,
      stopWhen: stepCountIs(10),
      onStepFinish: async ({ toolResults }) => {
        console.log(`STEP RESULTS: ${JSON.stringify(toolResults, null, 2)}`);
      },
      system: 'You are a helpful chatbot',
      prompt: 'Look up information about user with the ID foo_123',
    });

    console.log(`FINAL ANSWER: ${answer}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mcpClient.close();
  }
}

main();
