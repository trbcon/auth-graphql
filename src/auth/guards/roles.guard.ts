import { type CanActivate, type ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import type { User, UserRole } from "src/generated/prisma/client";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const rolesContext = this.reflector.getAllAndOverride<UserRole[]>('roles', [context.getHandler(), context.getClass()])

        if(!rolesContext) return true;

        const ctx = GqlExecutionContext.create(context)
        const request = ctx.getContext().req
        
        const user = request.user as User

        if(!rolesContext.includes(user.role)) throw new ForbiddenException('Недостаточно прав')

        return true
    }
}