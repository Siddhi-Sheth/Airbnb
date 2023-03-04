import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card";
import data from "./components/data";

function App() {

    const cards = data.map(item => {
        return (
            <Card
                key = {item.id}
                // img = {item.coverimg}
                // rating = {item.stats.rating}
                // reviewCount = {item.stats.reviewCount}
                // location = {item.location}
                // title = {item.title}
                // price = {item.price}
                // openSpots = {item.openSpots}
                item = {item}
            />
        )
    })



    return (
        
        <div>
            <Navbar/>
            <Hero/>
            <section className="card-list">
                {cards}
            </section>
            
        </div>
    )
}

export default App