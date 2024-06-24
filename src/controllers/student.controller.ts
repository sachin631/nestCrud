import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from "@nestjs/swagger";
import { createStudentDto } from "src/dto/createStudent.dto";
import { studentService } from "src/service/students/students.service";

@Controller("students")
@ApiTags("students")
export class studentController{
     constructor(private readonly studentService:studentService){}

    @Post("/create")
    @ApiResponse({ status: HttpStatus.CREATED, description: 'The student has been successfully created.' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input, object invalid.' })
    @ApiConsumes('multipart/form-data') // Set content type to accept file uploads
    @ApiBody({
        schema: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            age: { type: 'number' },
            email: { type: 'string' },
            course: { type: 'string' },
            image: {
              type: 'string',
              format: 'binary', // Specify binary format for file upload
            },
          },
        },
      })
    async createStudent(@Res() response ,@Body() createStudentDto:createStudentDto){
        try{
            const newStudent=await this.studentService.createStudents(createStudentDto);
            if(newStudent){
                response.status(200).json({message:"new student created successfully",student:newStudent});
            }else{
                response.status(400).json({message:"student creation failed"});
            }
            
        }catch(err:any){
           return response.status(400).json({err:err})
        }

    }

}