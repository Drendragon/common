import { Request, Response, NextFunction} from "express";
import {NotAuthorizedException} from "../errors/not-authorized-exception";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser){
        throw new NotAuthorizedException();
    }

    next();
}
