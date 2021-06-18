import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
  const validationsErrors: Errors = {};

  error.inner.forEach((single_error) => {
    if (!single_error.path) {
      throw new Error('Deu ruim');
    }

    validationsErrors[single_error.path] = error.message;
  });

  return validationsErrors;
}
