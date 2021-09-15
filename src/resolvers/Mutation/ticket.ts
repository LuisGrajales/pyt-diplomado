import { Context } from "../../utils";
import { TicketCreateInput } from "../../generated/prisma-client";
export default {
    createTicket: (parent, { data }: { data: TicketCreateInput }, ctx: Context) => ctx.prisma.createTicket(data)
}