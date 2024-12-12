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
    // otherTicketForms: { id: string; data: TicketBilingInfo } | undefined;
  };
  total: number;
  currency: string;
  paymentType: string;
  tickets: { ticketName: string; value: number }[];
}) => {
  const mainBuyer = Object.keys(metaData.buyerForm).includes("form_booth")
    ? (metaData.buyerForm as ExhibitionBoothBillingInfo)
    : Object.values(
      metaData.buyerForm as {
        [ticket: string]: { name: string; value: string }[];
      }[]
    )[0];
  const mainBuyerTicket = Object.keys(metaData.buyerForm)[0].toUpperCase();
  const mainBuyerForm = paymentType === "stripe" ? mainBuyer[0] : mainBuyer[0];
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
      {mainBuyerForm.map((ticketData, index) => {
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
        <Box>Tickets Bought</Box>
      </Box>
      {tickets.map((ticket, index) => {
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
                {formatCurrency(paymentType === "code" ? 0 : getTicketCost(ticket))}
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
