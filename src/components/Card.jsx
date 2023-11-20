function Card(props){
    return (
        <div className="card">
            <div className="image-container">
                <img src={props.imageUrl} alt="image-site" className="site--image" />
            </div>
            <div className="details-container">
                <div className="card--location">
                    <img src="/images/location-image.png" alt="" className="location--image"/>
                    <span>{props.location}</span>
                    <span><a href={props.googleMapsUrl} className="gray">Google maps link</a></span>
                </div>
                <h3 className="card--title">{props.title}</h3>
                <p className="card--dates">{props.startDate} - <span>{props.endDate}</span></p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;