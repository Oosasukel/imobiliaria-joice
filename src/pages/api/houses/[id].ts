import { query as q } from 'faunadb';
import { deleteObject, ref } from 'firebase/storage';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { auth } from '../../../api/middlewares/auth';
import { ironSession } from '../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';
import { fauna } from '../../../api/services/fauna';
import { storage } from '../../../api/services/firebase';
import { House } from '../../../api/types';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.use(ironSession);
handler.use(auth);
handler.delete(async (req, res) => {
  const { id } = req.query;

  let house: House;
  try {
    const faunaResponse = await fauna.query<any>(
      q.Get(q.Ref(q.Collection('Houses'), id))
    );
    house = faunaResponse.data;
  } catch {
    return res.status(404).send('casa não encontrada');
  }

  for (const image of house.images) {
    const imageRef = ref(storage, image.referenceUrl);
    try {
      await deleteObject(imageRef);
    } catch (error) {
      console.error(`Erro ao excluir imagem ${imageRef.fullPath} do firebase`);
      console.error(error);
    }
  }

  await fauna.query(q.Delete(q.Ref(q.Collection('Houses'), id)));

  return res.status(204).end();
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
