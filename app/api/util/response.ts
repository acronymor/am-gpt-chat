export class ResponseResult<T> {
    private code: number;

    private message: string;

    private data: T;

    constructor(code: number, message: string, data: T) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    static Ok(data: any, message: string = "success") {
        return new ResponseResult.Builder<any>().code(200).message(message).data(data).build()
    }

    static Fail(code: number, data: any, message: string) {
        return new ResponseResult.Builder<any>().code(code).message(message).data(data).build()
    }


    private static Builder = class ResponseResultBuilder<T> {
        private errorCode: number;
        private errorMessage: string;
        private rawData: T | string;

        constructor() {
            this.errorCode = 200;
            this.errorMessage = ""
            this.rawData = "";
        }

        code(code: number) {
            this.errorCode = code;
            return this
        }

        message(msg: string) {
            this.errorMessage = msg;
            return this;
        }

        data(data: T) {
            this.rawData = data;
            return this;
        }

        build(): ResponseResult<string | T> {
            return new ResponseResult(this.errorCode, this.errorMessage, this.rawData)
        }
    }
}