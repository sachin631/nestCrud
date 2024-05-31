import { Module } from '@nestjs/common';

import {MongooseModule} from "@nestjs/mongoose"
import { studentsSchema } from './schema/student.schema';
import { studentService } from './service/students/students.service';
import { studentModule } from './modules/student.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017",{
      dbName:"nestjsStudents"
    }),
    MongooseModule.forFeature([{name:"students",schema:studentsSchema}]) ,
    studentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
