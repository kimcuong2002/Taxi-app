import React from "react";
import Button from "../../Component/Button/Button";
import "./Header.css";
import taxi from "../../assets/img/taxi.png";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="title_container">
          <div className="title1">THE LARGEST TAXI SERVICE</div>
          <div className="title2">CITY TAXI</div>
          <div className="title3">COMPANY</div>
          <div className="button_container">
            <Button name="WHAT WE DO??" className="btn-1" />
            <Button name="JOIN US" className="btn-2" />
          </div>
        </div>
        <div className="image_container">
          <img src={taxi} className="taxi" />
        </div>
      </div>
      <div className="header2_container">
        <div className="a">
          <div className="title11">REPAIRS</div>
          <div className="title12">It long established</div>
          <div className="title13">
            Hello every body! My name is Son. I am learning from the <br /> Dong
            A University.
            <br />I hope to become a full-stack developer!!!
          </div>
          <div className="title14">MORE</div>
        </div>
        <div className="a">
          <div className="title11">REPAIRS</div>
          <div className="title12">It long established</div>
          <div className="title13">
            Hello every body! My name is Cuong. I am learning from the <br /> Dong
            A University.
            <br />I hope to become a full-stack developer!!!
          </div>
          <div className="title14">MORE</div>
        </div>
        <div className="a">
          <div className="title11">REPAIRS</div>
          <div className="title12">It long established</div>
          <div className="title13">
            Hello every body! My name is Son. I am learning from the <br /> Dong
            A University.
            <br />I hope to become a full-stack developer!!!
          </div>
          <div className="title14">MORE</div>
        </div>
      </div>
    </>
  );
};

export default Header;
