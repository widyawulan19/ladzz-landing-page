import React, { useState } from 'react'
import '../styles/CatalogPage.css'

import img from '../assets/clothes/evening_gown/evening-gown-1.jpg'
import img2 from '../assets/clothes/evening_gown/evening-gown-2.jpg'
import img3 from '../assets/clothes/evening_gown/evening-gown-3.jpg'
import img4 from '../assets/clothes/evening_gown/evening-gown-4.jpg'
import img5 from '../assets/clothes/evening_gown/evening-gown-5.jpg'
import img6 from '../assets/clothes/evening_gown/evening-gown-6.jpg'
import img7 from '../assets/clothes/evening_gown/evening-gown-7.jpg'
import img8 from '../assets/clothes/evening_gown/evening-gown-8.jpg'
import img9 from '../assets/clothes/evening_gown/evening-gown-9.jpg'
import img10 from '../assets/clothes/evening_gown/evening-gown-10.jpg'
import img11 from '../assets/clothes/evening_gown/evening-gown-11.jpg'
import img12 from '../assets/clothes/evening_gown/evening-gown-12.jpg'


function EveningGown() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    const dataEveningGown = [
        {id:1, img:img},
        {id:2, img:img2},
        {id:3, img:img3},
        {id:4, img:img4},
        {id:5, img:img5},
        {id:6, img:img6},        
        {id:7, img:img7},
        {id:8, img:img8},
        {id:9, img:img9},
        {id:10, img:img10},
        {id:11, img:img11},
        {id:12, img:img12},
    ]

  return (
    <div className='dress-container'>
        <div className="dress-title">
            <h3>Evening Couture</h3>
            <p>Sophisticated silhouettes made to captivate the night.</p>
        </div>

        <div className="dress-content">
            {dataEveningGown.map((item)=>(
                <div 
                    className="img-wrapper" 
                    key={item.id}
                    onClick={()=> setSelectedImg(item.img)}
                >
                    <img 
                        src={item.img} 
                        alt="Simple Dress Photo" 
                        className={`dress-img ${loadedImages[item.id] ? 'loaded' : ''}`}
                        onLoad={() => 
                            setLoadedImages(prev => ({ ...prev, [item.id]: true }))
                        }
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

export default EveningGown