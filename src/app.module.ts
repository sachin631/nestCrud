import { Module } from '@nestjs/common';

import {MongooseModule} from "@nestjs/mongoose"
import { studentsSchema } from './schema/student.schema';
import { studentService } from './service/students/students.service';
import { studentController } from './controllers/student.controller';
import { studentModule } from './modules/student.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017",{
      dbName:"nestjsStudents"
    }),
    studentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
