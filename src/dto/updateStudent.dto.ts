import { createStudentDto } from "./createStudent.dto";
import {PartialType} from "@nestjs/mapped-types" ;

export class updateStudentDto extends PartialType(createStudentDto) {
    
}