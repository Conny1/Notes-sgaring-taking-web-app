export interface Tags{
    value:string,
    label:string
  }

  export interface Note{
    userId:string,
    title:string | HTMLInputElement
    body: string | HTMLTextAreaElement
    tags:Array<Tags>
  }
  

  export interface Notes {
    userId:string,
    title:string 
    body: string 
    tags:Array<Tags>,
    createdAt:string,
    updatedAt:string
    _v:number,
    _id:string
  }