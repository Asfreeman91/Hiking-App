export type Hike = {  
id: string
name: string
location: string
miles: string
imageUrl: string
}

export type HikeWithoutId = Omit<Hike, "id">;