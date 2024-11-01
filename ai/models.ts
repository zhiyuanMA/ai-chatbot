// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'qwen2.5:72b',
    label: 'qwen2.5:72b',
    apiIdentifier: 'qwen2.5:72b',
    description: 'qian wen biggggggg model',
  }
] as const;

export const DEFAULT_MODEL_NAME: string = 'qwen2.5:72b';
