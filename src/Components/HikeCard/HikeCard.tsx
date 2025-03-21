import "./HikeCard.css"

export default function HikeCard({ hike }: { hike: { name: string, location: string, miles: string, imageUrl: string }}) { {/* hike prop destructured */}
    return (
    <div id="hike-card">
    <div id="hike-card-2" className="card width: 18rem"> {/* hike props are passed into bootstrap card and rendered on HikeCard */}
        <img id="card-image" src={hike.imageUrl}  
        className="card-img-top" 
        alt={`${hike.name} ${location} ${hike.miles}`}/>
        <div className="card-body">
        <h5 className="card-title">{hike.name}</h5>
        <h6 id="card-location">{hike.location}</h6>
        <h6 id="card-miles">{hike.miles} miles</h6>
        <button className="button m-2 btn btn-outline-danger" style={{width: "30%"}}>Delete Hike</button>
        <button className="button m-2 btn btn-outline-primary" style={{width: "30%"}}>Edit Hike</button>
        </div>
    </div>
    </div>
    )
}