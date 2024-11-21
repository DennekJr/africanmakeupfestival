import { TicketBilingInfo } from "@/app/lib/features/checkout/checkoutSlice";
import Box from "@mui/material/Box";

export const PurchaseDetailTable = ({ metaData }: {
  metaData: {
    buyerForm: { [ticket: string]: { name: string; value: string }[] }[],
    otherTicketForms: { id: string; data: TicketBilingInfo },
  }
}) => {
  const mainBuyer = Object.values(metaData.buyerForm)[0][0];
  const mainBuyerTicket = Object.keys(metaData.buyerForm)[0].toUpperCase();
  const otherTicketForms = Object.values(metaData.otherTicketForms as { id: string; data: TicketBilingInfo }[]);
  const mappedDataArray = (otherTicketForms).map(ticket => ({
    ticketName: ticket.data.Ticket,
    ticketData: [
      { name: "First Name", data: ticket.data.form_firstName },
      { name: "Last Name", data: ticket.data.form_lastName },
      { name: "Email", data: ticket.data.form_email }
    ]
  }));
  console.log("mainBuyer", otherTicketForms, metaData.buyerForm, mainBuyerTicket);
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
      <Box className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"}>
        <Box>Additional Tickets</Box>
      </Box>
      {mappedDataArray.map((ticket, index) => {
        if (ticket.ticketName === "" || ticket.ticketName === undefined || ticket.ticketName.split("-")[1] === undefined) return;
        const ticketName = ticket.ticketName.split("-")[0].toUpperCase();
        return <Box key={index}>
          <Box className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"}>
            <Box>Ticket</Box>
            <Box>{ticketName}</Box>
          </Box>
          {ticket.ticketData.map((ticket, index) => {
            if (ticket.data === "" || ticket.data === undefined) return;
            return <Box key={index} className={"flex text-lightSecondary justify-between p-4 border-b border-midGrey"}>
              <Box>{ticket.name}</Box>
              <Box>{ticket.data}</Box>
            </Box>;
          })}
        </Box>;
      })}
    </Box>
  );
};