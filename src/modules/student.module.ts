import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { studentController } from "src/controllers/student.controller";
import { studentsSchema } from "src/schema/student.schema";
import { studentService } from "src/service/students/students.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name:"student",schema:studentsSchema}])
    ],
    exports:[],
    controllers:[studentController],
    providers:[studentService]
})

export class studentModule{}