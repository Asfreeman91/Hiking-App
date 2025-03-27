{/* added "favorite"; controlled by clicking on heart icons */}
export type Hike = {  
id: number
name: string
location: string
miles: string
imageUrl: string
favorite: boolean
}

export type HikeWithoutId = Omit<Hike, "id">;