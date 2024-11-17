import styles from "../ErrorPage/ErrorPage.module.css";
import { Result } from "antd";
import { notFound } from "../ErrorPage/assets/svg/notFound";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

enum ErrorStatus {
  NOT_FOUND = "Seems like you're lost ",
  ERROR = "Page crashed",
  UNAUTHORIZED = "Unauthorized",
  UNAUTHENTICATED = "Oops! You're not signed in",
  BOOKING_CLOSED = "We are currently closed",
}

enum ErrorMessage {
  NOT_FOUND = "Page not found",
  ERROR = "Oops, an error occurred!",
  UNAUTHORIZED = `You're not authorized to view this resource`,
  UNAUTHENTICATED = "Please sign in to continue.",
  BOOKING_CLOSED = "Follow us on instagram @braidsbytifeh to see updates on when we open again.",
}

export default function Custom404() {
  const navigate = useNavigate();
  const onClick = (): void => {
    navigate("/", { replace: true });
  };
  const extraButtons = [
    <Button type="primary" onClick={onClick} key="home">
      Home
    </Button>
  ];
  return <Result className={styles["result-error"]} title={ErrorStatus.NOT_FOUND} subTitle={ErrorMessage.NOT_FOUND}
                 icon={notFound} extra={extraButtons} />;
}