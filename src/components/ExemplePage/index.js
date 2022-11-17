import React from "react";
import { ExempleDiv } from "./Exemple";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import CarouselComponent from "../Carousel";
const ExemplePage = () => {
  return (
    <>
      <ExempleDiv>
        <section className="veg_section layout_padding">
          <div className="container">
            <div className="heading_container">
            <CarouselComponent/>
              <h2>Our Products</h2>
              <p>
                which don't look even slightly believable. If you are going to
                use a passage of Lorem Ipsum, you need to be sure there isn't an
              </p>
            </div>     
            <div className="row">
              <div  className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={p3} alt="" />
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={p1} alt="" />
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={p4} alt="" />
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="item">
                <div className="box">
                  <div className="img-box">
                  <img src={p5} alt=''/>
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="item">
                <div className="box">
                  <div className="img-box">
                  <img src={p4} alt=''/>
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                  <img src={p2} alt=''/>
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="item">
                <div className="box">
                  <div className="img-box">
                  <img src={p1} alt=''/>
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="item">
                <div className="box">
                  <div className="img-box">
                  <img src={p2} alt=''/>
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="item">
                <div className="box">
                  <div className="img-box">
                  <img src={p5} alt=''/>
                  </div>
                  <div className="detail-box">
                    <a href="https://www.google.com">Product</a>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 10.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="https://www.google.com">View More</a>
            </div>
          </div>
        </section>
      </ExempleDiv>
    </>
  );
};
export default ExemplePage;
