import { Controller, Post } from "@nestjs/common";
import { studentService } from "src/service/students/students.service";

@Controller("students")
export class studentController{
     constructor(private readonly studentService:studentService)
    @Post("/create")
    async createStudent()

}