import { Skill } from './skill.model';


export class Developer {
   constructor (
    public firstname: string,
    public lastname: string,
    public age: number,
    public sexe: string,
    public bio: string,
    public skills: Skill[],


    ) 
    {}
   
}