import { Answer } from './answer';

export class UserQuestion{
    constructor(public questionName:string,public answer:Array<Answer>){}
}