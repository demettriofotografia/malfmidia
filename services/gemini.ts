
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeProjectRequest = async (description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analise este pedido de orçamento de produção audiovisual e sugira 3 tópicos importantes para o cliente considerar. Pedido: "${description}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Sugestões de tópicos para o cliente'
            },
            estimatedComplexity: {
              type: Type.STRING,
              description: 'Nível de complexidade: Baixo, Médio ou Alto'
            }
          },
          required: ["suggestions", "estimatedComplexity"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Erro ao analisar com Gemini:", error);
    return null;
  }
};
