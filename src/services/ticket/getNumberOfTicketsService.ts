import prisma from "../../prisma/client";

const getNumberOfTicketsService = async () => {
  const ticketNumber = await prisma.ticket.count();

  console.log("NUMBER OF TICKETS IS " + ticketNumber);

  return ticketNumber;
};

export default getNumberOfTicketsService;
