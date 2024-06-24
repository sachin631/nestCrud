import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class createStudentDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @MinLength(2)
    name: string
    @IsNumber()
    @ApiProperty()
    class: number
    @ApiProperty()
    @IsNumber()
    rollNumber: number
    @ApiProperty()
    @IsString()
    gender: string
    @IsString()
    @ApiProperty()
    role: string
    @ApiProperty()
    @IsNumber()
    score: number

    @ApiProperty({ 
        description: 'The image of the student', 
        type: 'string', 
        format: 'binary',
        example: 'data:image/png;base64,...' // Example image data
      })
      @IsNotEmpty()
      image: string;
}