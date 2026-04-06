import React, { useState } from 'react'
import '../styles/CatalogPage.css'

import img from '../assets/clothes/bag/ready-to-wear-19.jpg'
import img1 from '../assets/clothes/bag/ready-to-wear-27.jpg'
import img2 from '../assets/clothes/bag/ready-to-wear-30.jpg'


function BagCatalog() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    const dataBag = [
        {id:1, img:img},
        {id:2, img:img1},
        {id:3, img:img2},
    ]

  return (
    <div className='dress-container'>
        <div className="dress-title">
            <h3>Refined Bag Collection</h3>
            <p>Timeless silhouettes crafted to elevate every moment.</p>
        </div>

        <div className="dress-content">
            {dataBag.map((item)=>(
                <div 
                    className="img-wrapper" 
                    key={item.id}
                    onClick={()=> setSelectedImg(item.img)}
                >
                    <img 
                        src={item.img} 
                        alt="Bag Photo" 
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

export default BagCatalog