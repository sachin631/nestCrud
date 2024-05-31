import { Body, Controller, Post, Res } from "@nestjs/common";
import { createStudentDto } from "src/dto/createStudent.dto";
import { studentService } from "src/service/students/students.service";

@Controller("students")
export class studentController{
     constructor(private readonly studentService:studentService){}
    @Post("/create")
    async createStudent(@Res() response ,@Body() createStudentDto:createStudentDto){
        try{

            const newStudent=await this.studentService.createStudents(createStudentDto);
            if(newStudent){
                response.status(200).json({message:"new student created successfully",student:newStudent});
            }
            
        }catch(err:any){
           return response.status(400).json({err:err})
        }

    }

}