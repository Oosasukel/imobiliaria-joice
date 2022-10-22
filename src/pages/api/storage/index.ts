import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.get(async (req, res) => {
  try {
    // const fileRef = ref(storage, 'images/test.jpg');

    // const imageUrl = await getDownloadURL(fileRef);

    // const snapshot = await uploadBytes(fileRef, file);

    return res.json('123');
  } catch (error) {
    return res.json(error);
  }
});

export default handler;
