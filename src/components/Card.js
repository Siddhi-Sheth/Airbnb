import React from "react"

function Card(props) {

    console.log(props.item.openSpots)

    let badgeText 
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.item.coverimg}/>
            <br />
            <div className="card--stats">
                <img src="./images/Star.png" className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray"> ({props.item.stats.reviewCount}) . </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card