import React from "react";
import "./Content.css";
import Product from "../../Component/Product/Product";
import Button from "../../Component/Button/Button";
import list4 from "../../assets/img/list4.jpg";
import city from "../../assets/img/city.jpg";

const Content = () => {
  return (
    <div className="content_container">
      <div className="header">
        <div className="aa"></div>
        <div className="bb"></div>
        <div className="aa"></div>
      </div>
      <div className="title_content">
        <div className="t1">POPULAR SERVICE</div>
        <div className="t2">
          Service Is Our Attitude, And Attitude Is every thing
        </div>
      </div>
      <div className="content">
        <div className="product_content">
          <Product
            image={list4}
            name="CALL ALL TAXI"
            className="Product"
            title="Hello every body! My name is Son. I am learning from the Dong A University.
            I hope to become a full-stack developer!!!"
          />
          <Button name="BOOK NOW" className="btn-book-now" />
        </div>
        <div className="product_content">
          <Product
            image={list4}
            name="CALL ALL TAXI"
            className="Product"
            title="Hello every body! My name is Son. I am learning from the Dong A University.
            I hope to become a full-stack developer!!!"
          />
          <Button name="BOOK NOW" className="btn-book-now" />
        </div>
        <div className="product_content">
          <Product
            image={list4}
            name="CALL ALL TAXI"
            className="Product"
            title="Hello every body! My name is Son. I am learning from the Dong A University.
            I hope to become a full-stack developer!!!"
          />
          <Button name="BOOK NOW" className="btn-book-now" />
        </div>
        <div className="product_content">
          <Product
            image={list4}
            name="CALL ALL TAXI"
            className="Product"
            title="Hello every body! My name is Son. I am learning from the Dong A University.
            I hope to become a full-stack developer!!!"
          />
          <Button name="BOOK NOW" className="btn-book-now" />
        </div>
      </div>
      <div className="header">
        <div className="aa"></div>
        <div className="bb"></div>
        <div className="aa"></div>
      </div>
      <div className="title_content">
        <div className="t1">CITY PRICING</div>
        <div className="t2">Our Price Range Is With In Your Reach</div>
      </div>
      <div className="content_2">
        <div className="product_container">
          <Product image={city} name="NEW YORK CITY" className="product_2" />
          <div className="mid">
            <div className="price">
              <p>HOURLY</p>
              <p>30</p>
            </div>
            <div className="day">
              <p>WHOLE DAY</p>
              <p>400</p>
            </div>
          </div>
          <Button name="BOOK NOW" className="btn_2" />
        </div>
        <div className="product_container">
          <Product image={city} name="NEW YORK CITY" className="product_2" />
          <div className="mid">
            <div className="price">
              <p>HOURLY</p>
              <p>30</p>
            </div>
            <div className="day">
              <p>WHOLE DAY</p>
              <p>400</p>
            </div>
          </div>
          <Button name="BOOK NOW" className="btn_2" />
        </div>
        <div className="product_container">
          <Product image={city} name="NEW YORK CITY" className="product_2" />
          <div className="mid">
            <div className="price">
              <p>HOURLY</p>
              <p>30</p>
            </div>
            <div className="day">
              <p>WHOLE DAY</p>
              <p>400</p>
            </div>
          </div>
          <Button name="BOOK NOW" className="btn_2" />
        </div>
        <div className="product_container">
          <Product image={city} name="NEW YORK CITY" className="product_2" />
          <div className="mid">
            <div className="price">
              <p>HOURLY</p>
              <p>30</p>
            </div>
            <div className="day">
              <p>WHOLE DAY</p>
              <p>400</p>
            </div>
          </div>
          <Button name="BOOK NOW" className="btn_2" />
        </div>
      </div>
      <div className="footer">Nguyễn Hoàng Kim Cương</div>
    </div>
  );
};

export default Content;
