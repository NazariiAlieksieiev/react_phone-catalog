export const fetchJson = async <T>(filePath: string): Promise<T | null> => {
  try {
    const response = await fetch(`/api/${filePath}`);

    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}`);
    }

    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error loading JSON from ${filePath}:`, error);

    return null;
  }
};
