import { Context } from "../../utils";
import { ScreeningCreateInput } from "../../generated/prisma-client";

export default {
    createScreening: (parent, { data }: { data: ScreeningCreateInput }, ctx: Context) => ctx.prisma.createScreening(data),
    updateScreening: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateScreening(args),
    deleteScreening: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteScreening(args.where)
}