import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

@InputType()
export class LoginInput {
    @Field(() => String)
    @IsString({ message: "Почта должна быть строкой" })
    @IsNotEmpty({ message: "Почта не должна быть пустой" })
    @IsEmail({}, { message: "Некорректный формат почты" })
    email: string;

    @Field(() => String)
    @IsString({ message: "Пароль должен быть строкой" })
    @IsNotEmpty({ message: "Пароль не должен быть пустым" })
    @MinLength(6, { message: "Минимальная длина пароля - 6 символов"})
    @MaxLength(64, { message:"Максимальная длина пароля - 32 символа" })
    password: string;
}