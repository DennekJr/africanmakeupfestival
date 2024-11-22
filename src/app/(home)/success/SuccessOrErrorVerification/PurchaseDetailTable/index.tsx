import {
  DelegateTicket,
  ExplorerTicket, FounderTicket,
  InvestorTicket,
  TicketBilingInfo
} from "@/app/lib/features/checkout/checkoutSlice";
import Box from "@mui/material/Box";
import { formatCurrency } from "@/app/(home)/checkout/components/utils";

export const PurchaseDetailTable = ({ metaData, total, currency }: {
  metaData: {
    buyerForm: { [ticket: string]: { name: string; value: string }[] }[],
    otherTicketForms: { id: string; data: TicketBilingInfo },
  }
  total: number
  currency: string
}) => {
  const getTicketValue = (ticketName) => {
    return ticketName === "investor" ? InvestorTicket : ticketName === "explorer" ? ExplorerTicket : ticketName === "founder" ? FounderTicket : DelegateTicket;
  };
  const mainBuyer = Object.values(metaData.buyerForm)[0][0];
  const mainBuyerTicket = Object.keys(metaData.buyerForm)[0].toUpperCase();
  const otherTicketForms = Object.values(metaData.otherTicketForms as { id: string; data: TicketBilingInfo });
  const mappedDataArray = (otherTicketForms as TicketBilingInfo[]).map(ticket => {
    if (ticket.Ticket === "" || ticket.Ticket === undefined || ticket.Ticket.split("-")[1] === undefined) return;
    const ticketName = ticket.Ticket.split("-")[0].toUpperCase();
    return {
      ticketName: ticketName,
    ticketData: [
      { name: "First Name", data: ticket.form_firstName },
      { name: "Last Name", data: ticket.form_lastName },
      { name: "Email", data: ticket.form_email },
      { name: "Ticket Cost", data: `${currency} ${formatCurrency(getTicketValue(ticketName))}` }
    ]
    }
  });
  console.log("mappedDataArray", otherTicketForms);
  return (
    <Box className={"w-full"}>
      <Box className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"}>
        <Box>Ticket</Box>
        <Box>{mainBuyerTicket}</Box>
      </Box>
      {mainBuyer.map((ticketData, index) => {
        if (ticketData.name === "First Name" || ticketData.name === "Last Name" || ticketData.name === "Phone Number" || ticketData.name === "Email")
          return <Box key={index} className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey"}>
            <Box>{ticketData.name}</Box>
            <Box>{ticketData.name === "Phone Number" && <span className={"mr-1"}>+</span>}{ticketData.value}</Box>
          </Box>;
      })}
      {otherTicketForms.length > 2 &&
        <Box className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"}>
        <Box>Additional Tickets</Box>
        </Box>}
      {mappedDataArray.map((ticket, index) => {
        return <Box key={index}>
          {ticket?.ticketName &&
            <Box className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"}>
            <Box>Ticket</Box>
              <Box>{ticket?.ticketName}</Box>
            </Box>}
          {ticket?.ticketData.map((ticket, index) => {
            if (ticket.data === "" || ticket.data === undefined) return;
            return <Box key={index} className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey"}>
              <Box>{ticket.name}</Box>
              <Box>{ticket.data}</Box>
            </Box>;
          })}
        </Box>;
      })}
      <Box className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"}>
        <Box>Total</Box>
        <Box>{currency}&nbsp;{formatCurrency(total / 100)}</Box>
      </Box>
    </Box>
  );
};