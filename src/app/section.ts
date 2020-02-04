import { Question } from './question';
export class Section{
    constructor(public sectionName:string,public question:Array<Question>){}
}