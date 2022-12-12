import {IsNotEmpty} from 'class-validator'

export class CreateTeamMemberBody{
    @IsNotEmpty({
        message:'The member function should not be empty'
    })
    name:string;
    @IsNotEmpty({
        message:'The member function should not be empty'
    })
    function:string; 
}