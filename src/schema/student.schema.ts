import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class students{
    @Prop()
    name:string
    @Prop()
    rollNumber:number
    @Prop()
    class:number
    @Prop()
    gender:string
    @Prop()
    marks:number
    @Prop({default:"user"})
    role:string
    @Prop()
    image:string

}

export const studentsSchema=SchemaFactory.createForClass(students);
