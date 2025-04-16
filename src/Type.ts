export type Hike = {  
name: string
location: string
miles: string
imageUrl: string
favorite: boolean
id: string
}

export type NewHike = Omit<Hike, "id">;


export type SideBarProps = {
    cards: Hike[]
    setCards: (newHike: Hike[]) => void
}

export type ListProps = {
    cards: Hike[]
    setCards: (newValue: Hike[]) => void
    }

export type HikeCardProps = {
    card: Hike
    setCards: (newValue: Hike[]) => void
    deleteCard: (id: string) => void;
    updateCard: (id: string, updatedCard: Partial<Hike>) => void;
    }