 import type { Request, Response, NextFunction } from "express";
import { env } from "../../env";

export function verifyServiceKey(req: Request, _res: Response, next: NextFunction) {
    const serviceKey = req.headers['x-service-key'];
    if (serviceKey !== env.MY_SERVICE_TOKEN) {
        throw new Error('Unauthorized service access');
    }
    next();
}