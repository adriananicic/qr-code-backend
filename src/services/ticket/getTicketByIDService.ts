import prisma from "../../prisma/client";

const getTicketByIDService = async (id: string) => {
  const ticket = await prisma.ticket.findUnique({ where: { id: id } });

  return ticket;
};

export default getTicketByIDService;
