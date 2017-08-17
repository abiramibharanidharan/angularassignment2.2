class StudentDetail
{
    rno:number
    name:string
    batch:string
    // student detail constructor
    constructor(no:number,na:string,bat:string)
    {
       this.rno=no
       this.name=na
       this.batch=bat 
            
    }
    //function to display the detail of student
     display():void
    {
        console.log(`Student   No= ${this.rno}
         Name= ${this.name}
         Batch = ${this.batch}`)
    }
}
let detail:StudentDetail=new StudentDetail(1234,'abi','Web Development   ')
let result:void=detail.display()




