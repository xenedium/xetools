import type { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatusCode } from '../../constants/HttpStatusCode';

type Data = {
    status: number;
    message: string | object | null;
    error: string | null;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'GET') {
        return res.status(HttpStatusCode.OK).json({
            status: HttpStatusCode.OK,
            message: 'Success',
            error: null
        });
    }
    res.status(HttpStatusCode.METHOD_NOT_ALLOWED).json({
        status: HttpStatusCode.METHOD_NOT_ALLOWED,
        message: null,
        error: 'Method Not Allowed'
    });
}