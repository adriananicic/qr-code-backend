import prisma from "../../prisma/client";

const createTicketService = async (
  vatin: string,
  firstName: string,
  lastName: string
) => {
  const numberOfTicketsWithVatin = await prisma.ticket.count({
    where: { vatin },
  });

  if (numberOfTicketsWithVatin >= 3) return false;

  const ticket = await prisma.ticket.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      vatin: vatin,
      createdAt: new Date(),
    },
  });

  return ticket;
};

export default createTicketService;
