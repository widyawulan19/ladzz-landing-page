import React, { useState } from 'react'
import '../styles/CatalogPage.css'
import img from '../assets/clothes/skirt_pants/ready-to-wear-14.jpg'
import img2 from '../assets/clothes/skirt_pants/ready-to-wear-17.jpg'
import img3 from '../assets/clothes/skirt_pants/ready-to-wear-2.jpg'
import img4 from '../assets/clothes/skirt_pants/ready-to-wear-24.jpg'
import img5 from '../assets/clothes/skirt_pants/ready-to-wear-26.jpg'
import img6 from '../assets/clothes/skirt_pants/ready-to-wear-33.jpg'
import img7 from '../assets/clothes/skirt_pants/ready-to-wear-7.jpg'



function SkirtCatalog() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    const dataSkirt = [
        {id:1, img:img},
        {id:2, img:img2},
        {id:3, img:img3},
        {id:4, img:img4},
        {id:5, img:img5},
        {id:6, img:img6},
        {id:7, img:img7},
    ]
  return (
    <div className='dress-container'>
        <div className="dress-title">
            <h3>Effortless Elegance</h3>
            <p>Understated designs that speak through simplicity.</p>
        </div>

        <div className="dress-content">
            {dataSkirt.map((item)=>(
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

export default SkirtCatalog