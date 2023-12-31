import './services.css'
import Img1 from "../../assets/service-1.svg"
import Img2 from "../../assets/service-2.svg"
import Img3 from "../../assets/service-3.svg"

const data = [
  {
    id: 1,
    image: Img1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Img2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Img3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit   aenean commodo ligula eget.",
  },
];


const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section-title">Services</h2>

      <div className="services-container grid">
        {data.map(({ id, image, title, description}) => {
          return (
            <div className="services-card" key={id}>
              <img src={image} alt="" className="services-img" />

              <h3 className="services-title">{title}</h3>
              <p className="services-des">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services