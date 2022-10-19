import {CustomError} from "./custom-error";

export class NotAuthorizedException extends CustomError {
    statusCode = 401;

    constructor() {
        super("Not authorized request");

        Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    }

    serializeErrors() {
        return [{
            message: "Not authorized"
        }];
    }
}
