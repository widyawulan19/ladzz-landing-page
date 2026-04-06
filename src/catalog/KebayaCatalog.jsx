import React, { useState } from 'react'
import '../styles/CatalogPage.css'
import img from '../assets/clothes/kebaya/kebaya-1.jpg'
import img2 from '../assets/clothes/kebaya/kebaya-2.jpg'
import img3 from '../assets/clothes/kebaya/kebaya-3.jpg'


function KebayaCatalog() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    const dataKebaya = [
        {id:1, img:img},
        {id:2, img:img2},
        {id:3, img:img3}
    ]
  return (
    <div className='dress-container'>
        <div className="dress-title">
            <h3>Timeless Kebaya</h3>
            <p>Heritage reimagined with a touch of modern grace.</p>
        </div>

        <div className="dress-content">
            {dataKebaya.map((item)=>(
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

export default KebayaCatalog