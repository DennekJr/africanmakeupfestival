import Box from "@mui/material/Box";
import {
  formatCurrency,
  getTicketCost
} from "@/app/(home)/checkout/components/utils";
import { ExhibitionBoothBillingInfo } from "@/app/lib/features/exhibition/exhibitionSlice";

export const PurchaseDetailTable = ({
                                      metaData,
                                      total,
                                      currency,
                                      paymentType,
                                      tickets
                                    }: {
  metaData: {
    buyerForm:
      | { [ticket: string]: { name: string; value: string }[] }[]
      | ExhibitionBoothBillingInfo;
  };
  total: number;
  currency: string;
  paymentType: string;
  tickets: { ticketName: string; value: number }[];
}) => {
  const mainBuyer = Object.values(
    metaData.buyerForm as {
      [ticket: string]: { name: string; value: string }[];
    }[],
  )[0];
  const mainBuyerTicket = Object.keys(metaData.buyerForm)[0].toUpperCase();
  const mainBuyerForm = paymentType === "code" ? mainBuyer : mainBuyer;
  return (
    <Box className={"w-full"}>
      <Box
        className={
          "flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"
        }
      >
        <Box className={"font-semibold"}>Ticket</Box>
        <Box className={"font-semibold"}>{mainBuyerTicket}</Box>
      </Box>
      {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {(mainBuyerForm as any).map((ticketData, index) => {
        if (
          ticketData.name === "First Name" ||
          ticketData.name === "Last Name" ||
          ticketData.name === "Phone Number" ||
          ticketData.name === "Email"
        )
          return (
            <Box
              key={index}
              className={
                "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
              }
            >
              <Box>{ticketData.name}</Box>
              <Box>
                {ticketData.name === "Phone Number" && (
                  <span className={"mr-1"}>+</span>
                )}
                {ticketData.value}
              </Box>
            </Box>
          );
      })}
      <Box
        className={
          "flex text-lightSecondary font-semibold justify-center p-4 border-b border-midGrey"
        }
      >
        <Box>{paymentType === "code" ? "Ticket Reserved" : "Tickets Bought"}</Box>
      </Box>
      {tickets.map((ticket, index) => {
        const value = paymentType === "code" ? 0 : getTicketCost(ticket);
        if (ticket.value > 0) {
          return (
            <Box
              key={index}
              className={
                "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
              }
            >
              <Box>
                {ticket.ticketName.toUpperCase()}{" "}
                <span className={"italic text-[.8rem] xl:text-[1rem]"}>
                  x&nbsp;{ticket.value}
                </span>
              </Box>
              <Box>
                {currency.toUpperCase()}&nbsp;
                {formatCurrency(value)}
              </Box>
            </Box>
          );
        }
      })}
      <Box
        className={
          "flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"
        }
      >
        <Box className={"font-semibold"}>Total</Box>
        <Box className={"font-semibold"}>
          {currency}&nbsp;{formatCurrency(total / 100)}
        </Box>
      </Box>
    </Box>
  );
};
