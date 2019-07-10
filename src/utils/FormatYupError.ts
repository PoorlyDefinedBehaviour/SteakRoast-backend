import { ValidationError } from "yup";

export interface FormattedYupError {
  status: number;
  path: string;
  message: string;
}

export const FormatYupError = (
  error: ValidationError
): Array<FormattedYupError> =>
  error.inner.map<any>((e: any) => ({
    path: e.path,
    message: e.message
  }));
