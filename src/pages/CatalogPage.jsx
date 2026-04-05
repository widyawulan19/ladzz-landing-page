import React, { useState } from 'react'
import '../styles/CatalogPage.css'
import { MdArrowForwardIos } from "react-icons/md";
import BagCatalog from '../catalog/BagCatalog';
import SimpleDress from '../catalog/SimpleDress';
import ReadyCatalog from '../catalog/ReadyCatalog';
import KebayaCatalog from '../catalog/KebayaCatalog';
import EveningGown from '../catalog/EveningGown';
import SkirtCatalog from '../catalog/SkirtCatalog';
import WeddingCatalog from '../catalog/WeddingCatalog';
import ClothesCatalog from '../catalog/ClothesCatalog';

import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function CatalogPage() {
    const [activeMenu, setActiveMenu] = useState("bag");
    const navigate = useNavigate();

    const goToLanding = () =>{
        navigate('/')
    }

    // Page Mapping 
    const components = {
        'simple dress' : <SimpleDress/>,
        'ready wear' : <ReadyCatalog/>,
        'evening gown' : <EveningGown/>,
        'wedding gown' : <WeddingCatalog/>,
        'clothes' : <ClothesCatalog/>,
        'skirt' : <SkirtCatalog/>,
        'kebaya': <KebayaCatalog/>,
        'bag' : <BagCatalog/>,
    }


    const menu = ["simple dress","ready wear","evening gown","wedding gown","clothes","skirt","kebaya","bag"];


  return (
    <div className='catalog-container' id='catalog'>
        <div className="catalog-nav">
            <div className="logo">LADZZ BOUTIQUE</div>
        </div>
        <div className="navigation">
            <span className='back' onClick={goToLanding}>Landing Page</span>
            <MdArrowForwardIos/>
            <span>Ladzz Catalog Collection</span>
        </div>

        <div className="catalog-sidebar" style={{display:"flex"}}>
            <div className="sidebar">
                <button className='cat-btn'>Category <IoMdArrowDropdown size={20}/></button>
                {menu.map((menu) =>(
                    <button
                        key={menu}
                        className={activeMenu === menu ? "active": ""}
                        onClick={() => setActiveMenu(menu)}
                    >
                        {menu}
                    </button>
                ))}
            </div>

            <div className="catalog-content">
                {components[activeMenu]}
            </div>
        </div>
    </div>
  )
}

export default CatalogPage