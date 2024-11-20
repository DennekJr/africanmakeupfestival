import { accessDenied, bugFixing, pageNotFound } from './assets/svg';
import { ErrorStatus, ErrorMessage } from './constants';

export const getErrorDetails = (status: ErrorStatus): { appIcon: JSX.Element; message: ErrorMessage } => {
  const getValues = (icon: JSX.Element, message: ErrorMessage): { appIcon: JSX.Element; message: ErrorMessage } => ({
    appIcon: icon,
    message,
  });
  switch (status) {
    case ErrorStatus.NOT_FOUND:
      return getValues(pageNotFound, ErrorMessage.NOT_FOUND);
    case ErrorStatus.UNAUTHORIZED:
      return getValues(accessDenied, ErrorMessage.UNAUTHORIZED);
    case ErrorStatus.ERROR:
      return getValues(bugFixing, ErrorMessage.ERROR);
    default:
      return { appIcon: pageNotFound, message: ErrorMessage.NOT_FOUND };
  }
};
