
export type TicketPurchaseTypes = {
  id: string,
  title: string,
  subTitle: string,
  benefits: string[],
  price: string;
  ticketTag?: {tagType: string, tagIcon: string},
}