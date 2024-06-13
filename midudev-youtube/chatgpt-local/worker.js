import { MLCEngineWorkerHandler, MLCEngine } from "https://esm.run/@mlc-ai/web-llm"

const engine = new MLCEngine()
const handler = new MLCEngineWorkerHandler(engine)

// Cuando resive un evento
onmessage = msg => {
  console.log('Worker: Message received from main thread');
  handler.onmessage(msg)
}