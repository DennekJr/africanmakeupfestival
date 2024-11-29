import {
  VIPTicket,
  RegularTicket,
  TicketBilingInfo
} from "@/app/lib/features/checkout/checkoutSlice";
import Box from "@mui/material/Box";
import { formatCurrency } from "@/app/(home)/checkout/components/utils";
import { ExhibitionBoothBillingInfo } from "@/app/lib/features/exhibition/exhibitionSlice";

export const PurchaseDetailTable = ({
                                      metaData,
                                      total,
                                      currency,
                                      paymentType
                                    }: {
  metaData: {
    buyerForm:
      | { [ticket: string]: { name: string; value: string }[] }[]
      | ExhibitionBoothBillingInfo;
    otherTicketForms: { id: string; data: TicketBilingInfo } | undefined;
  };
  total: number;
  currency: string;
  paymentType: string;
}) => {
  const getTicketValue = (ticketName) => {
    return ticketName.toLowerCase() === "regular" ? RegularTicket : VIPTicket;
  };
  const mainBuyer = Object.keys(metaData.buyerForm).includes("form_booth")
    ? (metaData.buyerForm as ExhibitionBoothBillingInfo)
    : Object.values(
      metaData.buyerForm as {
        [ticket: string]: { name: string; value: string }[];
      }[]
    )[0];
  const mainBuyerTicket = Object.keys(metaData.buyerForm)[0].toUpperCase();
  const otherTicketForms =
    metaData.otherTicketForms === undefined
      ? []
      : Object.values(
        metaData.otherTicketForms as {
          id: string;
          data: TicketBilingInfo;
        }
      );
  const mappedDataArray =
    metaData.otherTicketForms === undefined
      ? []
      : (otherTicketForms as TicketBilingInfo[]).map((ticketFromForm) => {
        const ticket =
          paymentType === "stripe"
            ? (Object.values(ticketFromForm)[0] as unknown as TicketBilingInfo)
            : ticketFromForm;
        if (
          ticket.Ticket === "" ||
          ticket.Ticket === undefined ||
          ticket.Ticket.split("-")[1] === undefined
        )
          return;
        const ticketName = ticket.Ticket.split("-")[0].toUpperCase();
        return {
          ticketName: ticketName,
          ticketData: [
            { name: "First Name", data: ticket.form_firstName },
            { name: "Last Name", data: ticket.form_lastName },
            { name: "Email", data: ticket.form_email },
            {
              name: "Ticket Cost",
              data: `${currency} ${formatCurrency(getTicketValue(ticketName))}`
            }
          ]
        };
      });
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
      {/*//  If the data comes from a booth, we need to map the data to the correct format*/}
      {Object.keys(metaData.buyerForm).includes("form_booth") && (
        <Box>
          <Box
            className={
              "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
            }
          >
            <Box>Booth</Box>
            <Box>{mainBuyer.form_booth as string}</Box>
          </Box>
          <Box
            className={
              "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
            }
          >
            <Box>Company Name</Box>
            <Box>{mainBuyer.form_companyName as string}</Box>
          </Box>
          <Box
            className={
              "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
            }
          >
            <Box>Contact Name</Box>
            <Box>{mainBuyer.form_contactName as string}</Box>
          </Box>
          <Box
            className={
              "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
            }
          >
            <Box>Job Title</Box>
            <Box>{mainBuyer.form_jobTitle as string}</Box>
          </Box>
          <Box
            className={
              "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
            }
          >
            <Box>Phone Number</Box>
            <Box>{mainBuyer.form_phoneNumber as string}</Box>
          </Box>
        </Box>
      )}
      {!Object.keys(metaData.buyerForm).includes("form_booth") &&
        mainBuyer[0].map((ticketData, index) => {
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
      {otherTicketForms.length > 2 && (
        <Box
          className={
            "flex text-lightSecondary justify-between p-4 border-b border-midGrey font-semibold"
          }
        >
          <Box>Additional Tickets</Box>
        </Box>
      )}
      {mappedDataArray.map((ticket, index) => {
        return (
          <Box key={index}>
            {ticket?.ticketName && (
              <Box
                className={
                  "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
                }
              >
                <Box className={"font-semibold"}>Ticket</Box>
                <Box className={"font-semibold"}>{ticket?.ticketName}</Box>
              </Box>
            )}
            {ticket?.ticketData.map((ticket, index) => {
              if (ticket.data === "" || ticket.data === undefined) return;
              return (
                <Box
                  key={index}
                  className={
                    "flex text-lightSecondary justify-between p-4 border-b border-midGrey"
                  }
                >
                  <Box>{ticket.name}</Box>
                  <Box>{ticket.data}</Box>
                </Box>
              );
            })}
          </Box>
        );
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
