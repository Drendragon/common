import {CustomError} from "./custom-error";

export class BadRequestException extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super("Invalid request " + message);

        Object.setPrototypeOf(this, BadRequestException.prototype);
    }

    serializeErrors() {
        return [{
            message: this.message
        }];
    }
}
