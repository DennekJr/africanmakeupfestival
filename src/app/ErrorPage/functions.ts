import { accessDenied, bugFixing, pageNotFound } from './assets/svg';
import { ErrorStatus, ErrorMessage } from './constants';

export const getErrorDetails = (status: ErrorStatus): JSX.Element | object | any => {
  const getValues = (icon: JSX.Element, message: ErrorMessage): JSX.Element | object | any => ({
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
      return pageNotFound;
  }
};
