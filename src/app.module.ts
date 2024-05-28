import { Module } from '@nestjs/common';

import {MongooseModule} from "@nestjs/mongoose"
import { studentsSchema } from './schema/student.schema';
import { studentService } from './service/students/students.service';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017",{
      dbName:"nestjsStudents"
    }),
    MongooseModule.forFeature([{name:"students",schema:studentsSchema}]) 
  ],
  controllers: [],
  providers: [studentService],
})
export class AppModule {}
