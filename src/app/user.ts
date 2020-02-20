import { UserQuestionnaireListe } from './userQuestionnaireListe';

export class User{
    constructor(public id:number,public userName:string,public useremail:string,public userPassword:string,public questionnaireListe:Array<UserQuestionnaireListe>){}
}