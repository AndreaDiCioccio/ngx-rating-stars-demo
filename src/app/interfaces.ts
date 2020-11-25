export interface Item {
    name:string
    description:string
    price:number
    rating:{
        value:number
        count:number
    }
}