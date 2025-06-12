export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export interface DiseasePrediction {
  prediction: string;
  description: string;
}
