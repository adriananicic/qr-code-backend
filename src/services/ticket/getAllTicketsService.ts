import prisma from "../../prisma/client";

const getAllTicketsService = async () => {
  const tickets = await prisma.ticket.findMany();

  return tickets;
};

export default getAllTicketsService;
