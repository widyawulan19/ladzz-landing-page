import React from "react";
import "../styles/components/Footer.css";
import logo from '../assets/logo2.png'
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";
import { SiShopee } from "react-icons/si";

const Footer = () => {

const handleWhatsAppClick = () => {
  window.open(
    "https://wa.me/message/6663KZLPCMINH1",
    "_blank",
    "noopener,noreferrer"
  );
};

const handleShopeeClick = () =>{
    window.open(
        "https://shopee.co.id/ladzzboutique123?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnoL7Sa0b5HjFEpsOfmdgCbXDmPAalvK3jdv-0_wAZqD5Z_kFud6Lk_L5kelU_aem_cmD6w0Yb0lQylcKcpjvVQw",
        "_blank",
        "noopener,noreferrer"
    );
}

const handleTiktokClick = () =>{
     window.open(
        "https://www.tiktok.com/@ladzz.boutique?_t=ZS-8z0CXYM56e8&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnmO6Rx8dq33Zrbtrx7kFCG1pmBB52K47Wvu-ebKK-AAF51r7wVQb5eZVDVXI_aem_aKOY1I9tRpkQjemg-lI1zw",
        "_blank",
        "noopener,noreferrer"
    );
}

const handleInstagramClick = () =>{
     window.open(
        "https://www.instagram.com/ladzzboutique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        "_blank",
        "noopener,noreferrer"
    );
}



  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-contact">
            <span className="footer-label">Contact</span>

            <p className="footer-phone">
                0811-8810-906
            </p>

            <p className="footer-address">
                📍 Offline Store: Ruko Downtown Madison The Avenue Kota Wisata 
                Cibubur SHC 5/2 Jl Raya Ciangsana, Kec Gunung Putri, 
                Kab Bogor, Jawa Barat 16968.
            </p>
        </div>

        <div className="footer-brand">
          <img src={logo} alt="" />
          <div className="media-icon">
            <RiInstagramFill onClick={handleInstagramClick} className="icon"/>
            <IoLogoTiktok onClick={handleTiktokClick} className="icon"/>
            <SiShopee onClick={handleShopeeClick} className="icon"/>
            <IoLogoWhatsapp onClick={handleWhatsAppClick} className="icon"/>
          </div>
        </div>

        <div className="footer-social">
            <span className="footer-label">Store Hours</span>

            <div className="footer-hours">
                <p>Sun - Fri : 10.00 - 19.00</p>
                <p>Saturday : Closed</p>
            </div>

            <button 
                className="footer-cta"
                onClick={handleWhatsAppClick}
            >
                Chat via WhatsApp
            </button>
        </div>


      </div>

      <div className="footer-bottom">
        {/* © {new Date().getFullYear()} Atelier Name. All Rights Reserved. */}
        © {new Date().getFullYear()} Ladzz Boutique. All Rights Reserved.
Built by Luminos Studio.

      </div>

    </footer>
  );
};

export default Footer;


