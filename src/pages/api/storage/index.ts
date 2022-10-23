import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.post(async (req, res) => {
  // -------------------------------------- POST
  // const form = formidable({ multiples: true });
  // form.parse(req, async (err, fields, files) => {
  //   if (err) {
  //     return res.status(400).send('Error parsing files');
  //   }
  //   const mountainsRef = ref(storage, 'images/mountains.jpg');
  //   const myFile = await fs.readFile((files.image as any).filepath as string);
  //   console.log(myFile);
  //   const snapshot = await uploadBytes(mountainsRef, myFile, {
  //     contentType: (files.image as any).mimetype as string,
  //   });
  //   console.log('snapshot', snapshot);
  //   return res.json({ fields, files });
  // });
  // -------------------------------------- GET
  // try {
  //   const fileRef = ref(storage, 'goku.jpg');
  //   const imageUrl = await getDownloadURL(fileRef);
  //   return res.json({ imageUrl });
  // } catch (error) {
  //   return res.json(error);
  // }
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
