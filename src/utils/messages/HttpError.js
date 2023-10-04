class HttpError {
  message = '';

  errors = [];

  constructor(errors, message) {
    this.message = message || 'Ocorreu um erro inesperado';
    this.errors = errors?.length ? [...errors] : [];
  }
}

export default HttpError;
