import React, { useState } from 'react'
import '../styles/CatalogPage.css'
import img from '../assets/clothes/ready_to_wear/ready-to-wear-1.jpg'
import img2 from '../assets/clothes/ready_to_wear/ready-to-wear-10.jpg'
import img3 from '../assets/clothes/ready_to_wear/ready-to-wear-12.jpg'
import img4 from '../assets/clothes/ready_to_wear/ready-to-wear-3.jpg'
import img5 from '../assets/clothes/ready_to_wear/ready-to-wear-5.jpg'


function ReadyCatalog() {
    const [selectedImg, setSelectedImg] = useState(null);

    const dataProductReady = [
        {id:1, img:img},
        {id:2, img:img2},
        {id:3, img:img3},
        {id:4, img:img4},
        {id:5, img:img5}
    ]

  return (
     <div className='dress-container'>
        <div className="dress-title">
            <h3>Modern Essentials</h3>
            <p>Curated pieces designed for refined everyday wear.</p>
        </div>

        <div className="dress-content">
            {dataProductReady.map((item)=>(
                <div 
                    className="img-wrapper" 
                    key={item.id}
                    onClick={()=> setSelectedImg(item.img)}
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

export default ReadyCatalog