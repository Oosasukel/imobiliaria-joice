import { Readable } from 'node:stream';

export const getBody = async (readable: Readable) => {
  const chunks: any[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');

  return JSON.parse(rawBody);
};
