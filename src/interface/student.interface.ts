import { Document } from "mongoose";

export interface isStudent extends Document{
   readonly name:string,
   readonly class:number,
   readonly rollNumber:number,
   readonly  role:string
   readonly score:number
   readonly  gender:string
}