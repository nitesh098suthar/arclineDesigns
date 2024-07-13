import React from "react"
import Slider from "react-slick"
const testimonials = [
  {
    userName: "Sumer Singh",
    userAvatar: "images/avatar.png",
    description:
      "Lorem, ipsum dolor sit amet cres iste, optio ipsam doloremque eum ad quas ab mollitia in dolore. Maiores voluptates pariatur sequi.",
    location : "location"
  },
  {
    userName: "Sumer Singh",
    userAvatar: "images/avatar.png",
    description:
      "Lorem, ipsum dolor es iste, optio ipsam doloremque eum ad quas ab mollitia in dolore. Maiores voluptates pariatur sequi.",
    location : "location"
  },
  {
    userName: "Sumer Singh",
    userAvatar: "images/avatar.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, velit praesentium quo voluptate necessitatibus maiores iste, optio ipsam doloremque eum ad quas ab mollitia in dolore. Maiores voluptates pariatur sequi.",
    location : "location"
  },
  {
    userName: "Sumer Singh",
    userAvatar: "images/avatar.png",
    description:
      "Lorem, ipsum dolor sit amet ctur sequi.",
    location : "location"
  },
  {
    userName: "Sumer Singh",
    userAvatar: "images/avatar.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vs maiores iste, optio ipsam doloremque eum ad quas ab mollitia in dolore. Maiores voluptates pariatur sequi.",
    location : "location"
  },
  {
    userName: "Sumer Singh",
    userAvatar: "images/avatar.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisiciibus maiores iste, optio ipsam doloremque eum ad quas ab mollitia in dolore. Maiores voluptates pariatur sequi.",
    location : "location"
  },
]

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // when the screen size is 430px or less
        settings: {
          slidesToShow: 1, // show only 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="grid place-items-center h-[550px] overflow-hidden mb-16">

      <div className="w-[1200px]">
        
      <div className="flex justify-center items-center ">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Testimonial</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="testimonialSlick">
        <Slider {...settings} className="">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 h-[360px]  rounded-lg border-gray-300 border-[1px] w-[200px] "
            >
              <div className="grid place-items-center">
                <div className="w-[100px] rounded-full overflow-hidden h-[100px] border-gray-400 border-[1px]">
                  <img src={item.userAvatar} alt="" className=" h-[100%]" />
                </div>
              </div>
              <div className="">
                <h1 className="text-black text-center text-2xl font-bold mt-4 mobile:text-sm">
                  {item.userName}
                </h1>
                <div className="flex justify-center py-3">
                  <p className="text-primary text-center mobile:text-xs">
                    {item.location}
                  </p>
                  <p className="text-primary text-center px-2 mobile:text-xs">
                    at
                  </p>
                  <p className="text-primary text-center mobile:text-xs">
                    {item.location}
                  </p>
                </div>
                <p className="text-black text-center text-sm mobile:text-xs line-clamp-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    
      </div>
    </div>
  )
}

export default Testimonials
