import React from 'react'
import Slider from 'react-slick';
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"



const Testimonial = () => {
const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    swipeToSlide:true,

    responsive:[
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
    ]
        
}

  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                The booking process was simple, and the tour guide made the whole trip feel easy and well organized.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} alt="img" className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className="mb-0 mt-3">Subham Agarwal</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                We found a great package within our budget, and every detail from pickup to sightseeing was handled on time.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} alt="img" className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className="mb-0 mt-3">Priya Sharma</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                The itinerary was flexible and comfortable. It gave us enough time to explore without feeling rushed.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} alt="img" className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className="mb-0 mt-3">Rahul Mehta</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Customer support responded quickly whenever we had questions, which made planning our family trip much easier.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} alt="img" className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className="mb-0 mt-3">Ananya Verma</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                The recommendations were thoughtful, the guide was friendly, and the overall experience was worth recommending.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} alt="img" className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className="mb-0 mt-3">Karan Malhotra</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonial
