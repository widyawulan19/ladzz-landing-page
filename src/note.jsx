import React, { useState } from 'react'
import '../styles/CatalogPage.css'

import img1 from '../assets/clothes/simple_dress/simple-dress-1.jpg'
import img2 from '../assets/clothes/simple_dress/simple-dress-2.jpg'
import img3 from '../assets/clothes/simple_dress/simple-dress-3.jpg'
import img4 from '../assets/clothes/simple_dress/simple-dress-4.jpg'
import img5 from '../assets/clothes/simple_dress/simple-dress-5.jpg'
import img6 from '../assets/clothes/simple_dress/simple-dress-6.jpg'

function SimpleDress() {

  const [selectedImg, setSelectedImg] = useState(null);

  const dataSimpleDress = [
    { id:1, img:img1 },
    { id:2, img:img2 },
    { id:3, img:img3 },
    { id:4, img:img4 },
    { id:5, img:img5 },
    { id:6, img:img6 },
  ];

  return (
    <div className='dress-container'>
      <div className="dress-title">
        <h3>Effortless Elegance</h3>
        <p>Understated designs that speak through simplicity.</p>
      </div>

      <div className="dress-content">
        {dataSimpleDress.map((item)=>(
          <div 
            className="img-wrapper" 
            key={item.id}
            onClick={() => setSelectedImg(item.img)}
          >
            <img 
              src={item.img} 
              alt="Simple Dress Photo" 
              className='dress-img'
            />
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img 
            src={selectedImg} 
            className="modal-img"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  )
}

export default SimpleDress