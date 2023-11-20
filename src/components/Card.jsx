function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} alt="image-site" />
            <div className="card--location">
                <img src="/images/location-image.png" alt="" className="location--image"/>
                <span>{props.location}</span>
                <span className="gray">{props.googleMapsUrl}</span>
            </div>
            <h3 className="card--title">{props.title}</h3>
            <div className="card--dates">
                <p>{props.startDate} - <span>{props.endDate}</span></p>
            </div>
            <p className="card--description">{props.description}</p>
        </div>
    )
}

export default Card;