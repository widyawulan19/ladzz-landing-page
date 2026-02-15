import React from 'react'
import '../styles/components/Investment.css'
import wg from '../assets/wg.png'
import ng from '../assets/ng.png'
import sd from '../assets/sd.png'
import kebaya from '../assets/kebaya.png'
import suite from '../assets/suite.png'
import parfume from '../assets/parfume2.jpeg'
import bouqet from '../assets/bouqet.jpeg'
import lb from '../assets/lb5.png'


const categories = [
  {
    id: 1,
    name: "Wedding Gown",
    rent: "Rp 8.000.000",
    buy: "Rp 15.000.000",
    img : wg
  },
  {
    id: 2,
    name: "Evening Gown",
    rent: "Rp 2.500.000",
    buy: "Rp 6.000.000",
    img : ng
  },
  {
    id: 3,
    name: "Simple Dress",
    rent: "Rp 500.000",
    buy: "Rp 3.500.000",
    img: sd
  },
  {
    id: 4,
    name: "Kebaya",
    rent: "",
    buy: "Rp 3.500.000",
    img: kebaya
  },
  {
    id: 5,
    name: "One Set Jas",
    rent: "",
    buy: "Rp 5.000.000",
    img: suite
  },
  {
    id: 6,
    name: "Ready to Ware",
    rent: "",
    buy: "",
    img: lb
  },
  {
    id: 7,
    name: "Parfume",
    rent: "",
    buy: "",
    img: parfume
  },
{
    id: 8,
    name: "Bouquets",
    rent: "",
    buy: "",
    img: bouqet
  }
];

const Investment = () => {
  return (
    <section className="investment" id='investment'>
      <div className="investment-container">

        <h2 className="investment-title">Lookbook</h2>
        <div className="divider"></div>

        <p className="investment-desc">
          Each piece is thoughtfully crafted and tailored exclusively for you.
          Below is the starting investment for each category.
        </p>

        <div className="investment-grid">

          {categories.map((category) => (
            <div className="investment-card" key={category.id}>
                <img src={category.img} alt="" />
                <div className="category-caption">
                    <h3>{category.name}</h3>
                    <span className="start">Start From</span>
                    <p>Custom Rent : {category.rent}</p>
                    <p>Custom Buy : {category.buy}</p>
                </div>
                
            </div>
          ))}

        </div>

        <p className="note">
          Final pricing may vary depending on fabric selection and detailing.
        </p>

      </div>
    </section>
  )
}

export default Investment
