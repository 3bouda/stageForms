import { UserQuestion } from './userQuestion';

export class UserSection{
    constructor(public sectionName:string,public question:Array<UserQuestion>){}
}