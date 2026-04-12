import React, { useState } from 'react'
import '../styles/CatalogPage.css'

import img1 from '../assets/clothes/simple_dress/simple-dress-1.jpg'
import img2 from '../assets/clothes/simple_dress/simple-dress-2.jpg'
import img3 from '../assets/clothes/simple_dress/simple-dress-3.jpg'
import img4 from '../assets/clothes/simple_dress/simple-dress-4.jpg'
import img5 from '../assets/clothes/simple_dress/simple-dress-5.jpg'
import img6 from '../assets/clothes/simple_dress/simple-dress-6.jpg'
import img7 from '../assets/clothes/simple_dress/simple-dress-7.jpg'
import img8 from '../assets/clothes/simple_dress/simple-dress-8.jpg'
import img9 from '../assets/clothes/simple_dress/simple-dress-9.jpg'
import img10 from '../assets/clothes/simple_dress/simple-dress-10.jpg'
import img11 from '../assets/clothes/simple_dress/simple-dress-11.jpg'
import img12 from '../assets/clothes/simple_dress/simple-dress-12.jpg'
import img13 from '../assets/clothes/simple_dress/simple-dress-13.jpg'


function SimpleDress() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    const dataSimpleDress = [
        {
            id:1,
            img:img1
        },
        {
            id:2,
            img:img2
        },
        {
            id:3,
            img:img3
        },
        {
            id:4,
            img:img4
        },
        {
            id:5,
            img:img5
        },
        {
            id:6,
            img:img6
        },
        {
            id:7,
            img:img7
        },
        {
            id:8,
            img:img8
        },
        {
            id:9,
            img:img9
        },
        {
            id:10,
            img:img10
        },
        {
            id:11,
            img:img11
        },
        {
            id:12,
            img:img12
        },
        {
            id:13,
            img:img13
        },
    ]


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

export default SimpleDress