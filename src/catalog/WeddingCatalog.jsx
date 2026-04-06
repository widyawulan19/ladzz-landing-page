import React, { useState } from 'react'
import '../styles/CatalogPage.css'
import img from '../assets/clothes/wedding_gorwn/44ddd494-99c5-4285-a2a0-33c98a402562.jpeg';
import img2 from '../assets/clothes/wedding_gorwn/7675ae40-2b0f-4df4-9a6f-6712992650ab.jpeg';
import img3 from '../assets/clothes/wedding_gorwn/8ccaf28f-ed3d-469f-a1aa-364060aca2e3.jpeg';
import img4 from '../assets/clothes/wedding_gorwn/dcb18b07-3019-41f8-bac2-ae8ee80e02af.jpeg';
import img5 from '../assets/clothes/wedding_gorwn/cf7047d7-5893-4a80-a09a-7d4757d214ca.jpeg';


function WeddingCatalog() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});
    
    const dataWeddingGown = [
        {id:1, img:img},
        {id:2, img:img2},
        {id:3, img:img3},
        {id:4, img:img4},
        {id:5, img:img5},
    ]

  return (
    <div className='dress-container'>
        <div className="dress-title">
            <h3>Effortless Elegance</h3>
            <p>Understated designs that speak through simplicity.</p>
        </div>

        <div className="dress-content">
            {dataWeddingGown.map((item)=>(
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

export default WeddingCatalog