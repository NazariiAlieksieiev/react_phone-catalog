// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const getJSONData = async <T>(filePath: string): Promise<T | []> => {
  try {
    const { data } = await axios.get<T>(`/api/${filePath}`);

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error loading JSON from ${filePath}:`, error);

    return [];
  }
};
