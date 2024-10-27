import prisma from "../../prisma/client";

const createTicketService = async (
  vatin: string,
  firstName: string,
  lastName: string
) => {
  const numberOfTicketsWithVatin = await prisma.ticket.count({
    where: { vatin },
  });

  if (numberOfTicketsWithVatin >= 3)
    throw new Error("There are already 3 tickets created with this vatin");

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
