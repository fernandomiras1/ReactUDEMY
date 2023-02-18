import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedData } from '../../database';
import { Entry } from '../../models';

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (  process.env.NODE_ENV === 'production' ) {
        return res.status(401).json({ message: 'No tiene acceso a este servicio' });
    }

    await db.connect();
    await Entry.deleteMany(); // Borra TODO LO DE LA BASE DE DATOS
    await Entry.insertMany( seedData.entries ); // ACA VOLVEMOS A CARGAR LA BASE DE DATOS CON LOS DATOS MOCKS
    await db.disconnect();


    res.status(200).json({ message: 'Proceso realizado correctamente' });
}