export class NotFoundError extends Error {
  constructor(message){
    super(message)
    this.status = 404;
    this.errorType = "NotFoundError";
  }
}

export class BadUserRequestError extends Error {
  constructor(message){
    super(message)
    this.status = 400;
    this.errorType = "BadUserRequestError";
  }
}
export class UnAuthorizedError extends Error {
  constructor(message){
    super(message)
    this.status = 401;
    this.errorType = "UnAuthorizedError";
  }
}

export class MailNotSentError extends Error {
  constructor(message){
    super(message)
    this.status = 401;
    this.errorType = "MailNotSentError";
  }
}

