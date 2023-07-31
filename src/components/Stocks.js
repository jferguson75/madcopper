
import React, { Component } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../data/data';


/* LEAVING THIS OUT TO STATICALLY ASSIGN DATA
export default function Stocks(props) {
  
  const {key, image, ticker, currentprice, previousprice, stockname, open, high, low, marketcap, peratio, 
    divyield, fiftytwoweekhigh, fiftytwoweeklow} = props.data

*/  

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 1000,
      
      pauseOnHover: true
    };
    return (
      <div className='carousel-text'>
       
        <Slider {...settings}>
          <div>
            <span>SFR.AU: 5.93 </span>
            <FontAwesomeIcon icon={faArrowDown} style={{color: 'red'}} />
          </div>
          <div>
            <span>AR1.AU: 0.20 </span>
              <FontAwesomeIcon icon={faArrowDown} style={{color: 'red'}} />
          </div>
          <div>
            <span>CCZ.AU: 0.009 </span>
              <FontAwesomeIcon icon={faMinus} style={{color: 'blue'}} />
          </div>
          <div>
            <span>CPO.AU: 0.05 </span>
            <FontAwesomeIcon icon={faArrowDown} style={{color: 'red'}} />
          </div>
          <div>
            <span>CYM.AU: 0.11 </span>
              <FontAwesomeIcon icon={faMinus} style={{color: 'blue'}} />
          </div>
          <div>
            <span>HCH.AU: 1.45 </span>
              <FontAwesomeIcon icon={faArrowDown} style={{color: 'red'}} />
          </div>
          <div>
            <span>HRR.AU: 0.045 </span>
              <FontAwesomeIcon icon={faMinus} style={{color: 'blue'}} />
          </div>
          <div>
            <span>KCC.AU: 0.067 </span>
              <FontAwesomeIcon icon={faArrowUp} style={{color: 'green'}} />
          </div>
          <div>
            <span>NRX.AU: 0.02 </span>
            <FontAwesomeIcon icon={faArrowUp} style={{color: 'green'}} />
          </div>
          <div>
            <span>NTM.AU: 0.01 </span>
            <FontAwesomeIcon icon={faMinus} style={{color: 'blue'}} />
          </div>
          <div>
            <span>PEX.AU: 0.14 </span>
            <FontAwesomeIcon icon={faArrowUp} style={{color: 'green'}} />
          </div>
          <div>
            <span>RRR.AU: 0.165 </span>
              <FontAwesomeIcon icon={faArrowDown} style={{color: 'red'}} />
          </div>
          <div>
            <span>SFR.AU: 6.59 </span>
            <FontAwesomeIcon icon={faArrowUp} style={{color: 'green'}}  />
          </div>
          <div>
            <span>TGS.AU: 0.49 </span>
            <FontAwesomeIcon icon={faMinus} style={{color: 'blue'}} />
          </div>
        </Slider>
      </div>
    );
  }
}
