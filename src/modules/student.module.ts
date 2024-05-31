import { Module } from "@nestjs/common";
import { studentController } from "src/controllers/student.controller";
import { studentService } from "src/service/students/students.service";

@Module({
    imports: [],
    exports: [],
    controllers: [studentController],
    providers: [studentService]
})
export class studentModule {

}