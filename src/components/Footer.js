import React from "react";
import {
  AddIcCall,
  Facebook,
  Instagram,
  LocationOn,
  Mail,
  Pinterest,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftfooter foot">
        <div className="leftlogo">
          <h2>ADI.</h2>
        </div>
        <div className="leftdis">
          <p>
            Indulge in the ultimate online shopping experience for fashion
            enthusiasts, with our diverse range of high-quality clothing.
          </p>
        </div>
        <div className="socialicon">
          <div className="socio" style={{ background: " #3b5998" }}>
            <Facebook />
          </div>
          <div className="socio" style={{ background: " #e75480 " }}>
            <Instagram />
          </div>
          <div className="socio" style={{ background: " #00acee " }}>
            <Twitter />
          </div>
          <div className="socio" style={{ background: " #c8232c " }}>
            {" "}
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="centerfooter foot">
        <div className="centerhead">
          <h3>Useful links</h3>
        </div>
        <ul className="centerlist">
          <li className="centerlistitem">home</li>
          <li className="centerlistitem">man fashion</li>
          <li className="centerlistitem">accesories</li>
          <li className="centerlistitem">order detail</li>
          <li className="centerlistitem">wishlist</li>
          <li className="centerlistitem">cart</li>
          <li className="centerlistitem">woman fashion</li>
          <li className="centerlistitem">my account</li>
          <li className="centerlistitem">terms</li>
          <li className="centerlistitem">favorite</li>
        </ul>
      </div>
      <div className="rightfooter foot">
        <div className="contact">
          <h3>Contact</h3>
        </div>
        <div className="contactItem">
          <LocationOn />
          <p>11A,Nawabganz,Kanpur</p>
        </div>
        <div className="contactItem">
          <AddIcCall />
          <p>+91 9555219630</p>
        </div>
        <div className="contactItem">
          <Mail />
          <p>aditya@gmail.com</p>
        </div>
        <div className="contactItem"></div>
      </div>
    </div>
  );
};

export default Footer;
