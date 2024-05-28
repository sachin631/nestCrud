import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createStudentDto } from "src/dto/createStudent.dto";
import { updateStudentDto } from "src/dto/updateStudent.dto";
import { isStudent } from "src/interface/student.interface";

@Injectable()
export class studentService{

    constructor(@InjectModel('Student') private studentModel:Model<isStudent>) { }

    //create student api
    async createStudents(createStudentDto:createStudentDto):Promise<isStudent>{
        const newStudent=await new this.studentModel(createStudentDto)
        return newStudent.save()
    }

    //update student api
    async updateStudent(studentId:string,updateStudentDto:updateStudentDto):Promise<isStudent>{
        const existingStudent=await this.studentModel.findByIdAndUpdate(studentId,updateStudentDto);
        if(!existingStudent){
            throw new NotFoundException(`student ${studentId} not found`);
        }
        return existingStudent;

    }

    //get all students
    async getAllStudents():Promise<isStudent[]>{
        const students=await this.studentModel.find({});
        if(!students ||students.length==0){
            throw new NotFoundException("student list is empty ")
        }
        return students
    }

    //getStudent
    async getStudent(studentId:string):Promise<isStudent>{
        const student=await this.studentModel.findById(studentId).exec();
        if(student){
            throw new NotFoundException("student not found");
        }
        return student ;
    }

    //deleteStudent
    async deleteStudent(studentId:string):Promise<isStudent>{
        const deletedStudent=await this.studentModel.findByIdAndDelete(studentId);
        if(!deletedStudent){
            throw new NotFoundException("student not delete");
        }
        return deletedStudent;
    }
}