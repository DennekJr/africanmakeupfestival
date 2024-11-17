import { Result, Button } from 'antd';
import { FC } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { getErrorDetails } from './functions';
import urls from './globalContants';
import styles from './ErrorPage.module.css';
import { ErrorStatus } from './constants';

// TODO: Change prop to accept key and not require import in components

const ErrorPage: FC<{ status?: string }> = ({ status = ErrorStatus.NOT_FOUND }) => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.error(error);

  const onClick = (): void => {
    navigate(urls.client.root, { replace: true });
  };

  const extraButtons = [
    <Button type="primary" onClick={onClick} key="home">
      Home
    </Button>,
  ];

  const { appIcon, message } = getErrorDetails(status);
  return <Result className={styles['result-error']} title={status} subTitle={message} icon={appIcon} extra={extraButtons} />;
};

export default ErrorPage;
