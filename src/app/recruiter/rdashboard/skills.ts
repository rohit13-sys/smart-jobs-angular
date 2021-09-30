export class Skills {
    skillId:number = 0
    skillName:string = ''

    // toString:()=>{
    //     return "hello";
    // }
}

var skill = new Skills();
skill.toString = function(){
    return this.skillName;
}

