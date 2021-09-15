import { Context } from "../../utils";
import { OrderCreateInput } from "../../generated/prisma-client";

export default {
    createOrder: (parent, { data }: { data: OrderCreateInput }, ctx: Context) => ctx.prisma.createOrder(data)
     
}