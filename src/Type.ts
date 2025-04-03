{/* added "favorite"; controlled by clicking on heart icons */}
export type Hike = {  
id: string
name: string
location: string
miles: string
imageUrl: string
favorite: boolean
}

export type NewHike = Omit<Hike, "id">;