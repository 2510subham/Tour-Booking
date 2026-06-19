import React from 'react'
import ServicesCrad from './ServicesCrad'
import {Col} from 'reactstrap';
import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"

const servicesData = [
    {
        imgurl: weatherImg,
        title: ' Calculate weather',
        desc: 'Check destination weather before you travel so you can pack smart, plan activities, and avoid last-minute surprises.'
    },
    {
        imgurl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Travel with experienced local guides who know the best attractions, hidden spots, and practical tips for every destination.'
    },
    {
        imgurl: customizationImg,
        title: 'customization',
        desc: 'Customize your tour dates, group size, and activities to create a trip that fits your schedule and travel style.'
    },
]

const Servicelist = () => {
  return (
    
    <>
    {
        servicesData.map((items,index)=>
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServicesCrad items={items}/>
        </Col>
        )

    }
    </>
  )
}

export default Servicelist
