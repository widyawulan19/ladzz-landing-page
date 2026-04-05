import React, { useState } from 'react'
import '../styles/CatalogPage.css'

import img from '../assets/clothes/cloths/ready-to-wear-4.jpg';
import img2 from '../assets/clothes/cloths/ready-to-wear-11.jpg';
import img3 from '../assets/clothes/cloths/ready-to-wear-13.jpg';
import img4 from '../assets/clothes/cloths/ready-to-wear-15.jpg';
import img5 from '../assets/clothes/cloths/ready-to-wear-16.jpg';
import img6 from '../assets/clothes/cloths/ready-to-wear-18.jpg';

import img7 from '../assets/clothes/cloths/ready-to-wear-20.jpg';
import img8 from '../assets/clothes/cloths/ready-to-wear-21.jpg';
import img9 from '../assets/clothes/cloths/ready-to-wear-22.jpg';
import img10 from '../assets/clothes/cloths/ready-to-wear-23.jpg';
import img11 from '../assets/clothes/cloths/ready-to-wear-25.jpg';
import img12 from '../assets/clothes/cloths/ready-to-wear-28.jpg';

import img13 from '../assets/clothes/cloths/ready-to-wear-29.jpg';
import img14 from '../assets/clothes/cloths/ready-to-wear-31.jpg';
import img15 from '../assets/clothes/cloths/ready-to-wear-32.jpg';
import img16 from '../assets/clothes/cloths/ready-to-wear-6.jpg';
import img17 from '../assets/clothes/cloths/ready-to-wear-8.jpg';
import img18 from '../assets/clothes/cloths/ready-to-wear-9.jpg';


function ClothesCatalog() {
    const [selectedImg, setSelectedImg] = useState(null);

    const dataClothes = [
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
        {id:13, img:img13},
        {id:14, img:img14},
        {id:15, img:img15},
        {id:16, img:img16},
        {id:17, img:img17},
        {id:18, img:img18},
    ]

  return (
    <div className='dress-container'>
        <div className="dress-title">
            <h3>Effortless Elegance</h3>
            <p>Understated designs that speak through simplicity.</p>
        </div>

        <div className="dress-content">
            {dataClothes.map((item)=>(
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

export default ClothesCatalog