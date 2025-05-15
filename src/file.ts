import { writeFile } from 'node:fs/promises';

export function encodeToBuffer(str: string) {
  return Buffer.from(str, 'latin1');
}

export async function writeStringToFile(str: string, filePath: string) {
  try {
    const buffer = encodeToBuffer(str);
    await writeFile(filePath, new Uint8Array(buffer));
  } catch (error) {
    console.error('Error writing buffer to file:', error);
  }
}
