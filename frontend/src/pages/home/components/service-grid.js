import React, { Component } from 'react'
import '../asset/css/service-grid.scss';

const data = [
    {title:"RESTAURANT",url:"https://www.svgrepo.com/show/58017/restaurant-symbol-of-cutlery-in-a-circle.svg"},
    {title:"LUXURY ROOM",url:"https://cdn-icons-png.flaticon.com/512/5498/5498342.png"},
    {title:"CALL",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVCTVQat2XGAVTqqNAPThr4t0l_9wDlaM_A&usqp=CAU"},
    {title:"CREDIT CARD",url:"http://cdn.onlinewebfonts.com/svg/img_473975.png"},
    {title:"FREE WIFI",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/1280px-WiFi_Logo.svg.png"},
    {title:"TRAVEL",url:"https://svgsilh.com/svg/23789.svg"},
]



export default class ServiceRoom extends Component {
    render() {
        return (
            <div className="explore__container">
                <h1>
                    Explore WanderOn
                </h1>
            <div className="explore__container--inner">
             {data.map((item,index) =>{return(
                    <div key={index} className="explore__container--inner-card">
                        <img src={item.url} alt="item"/>
                        <h2>{item.title}</h2>
                    </div>
                )})}
                </div>
               
            </div>
        )
    }
}

