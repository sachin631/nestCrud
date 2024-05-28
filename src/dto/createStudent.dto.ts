import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class createStudentDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @MinLength(2)
    name: string
    @IsNumber()
    class: number
    @IsNumber()
    rollNumber: number
    @IsString()
    gender: string
    @IsString()
    role: string
    @IsNumber()
    score: number
}