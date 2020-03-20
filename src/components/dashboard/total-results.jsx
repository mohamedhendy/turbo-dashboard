import React, { Component } from "react";
import './dash-table.css';
class TotalResults extends Component {
  state = {};
  render() {
    return (
      <div className='row pt-3 to-dash'>
        {/* this is total section  */}
        <div className='   col-md-3 total-filter  mobile-out'>
          {/* first box  */}
          <div className='monitor d-inline-block text-center bg-card w-100'>
            <span className="text-white total-head mb-2 d-block">Filter By</span>
            <ul className='list-unstyled d-inline-block text-center '>
              <li className='d-inline-block mx-1 filter-num'><button className="bg-filter-btn border-0 ">1D</button></li>
              <li className='d-inline-block mx-2 filter-num  text-dark'><button className=" border-0 bg-active  ">1M</button></li>
              <li className='d-inline-block mx-1 filter-num'><button className="bg-filter-btn border-0 ">1Y</button></li>
            </ul>
          </div>
        </div>
        {/* second box  */}
        <div className='  col total-box  t-box-left'>
          <div className=' card  bg-card radius-left'>
            <div className='row no-gutters box-pad   '>
              <div className='col-8 '>
                <div className='card-body no-p '>
                  <h5 className='card-title text-white  mb-2 total-head total-ch '>Total Checkout</h5>
                  <p className='card-text total-p first-num  text-white total-number font-weight-bold'>100</p>
                </div>
              </div>
              <div className='col-4'>
                <span className='d-inline-block shopping'>
                  <img className="img-check" src={require('../../assets/images/ok.png')} alt="okay"/>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* third  box  */}
        <div className='  col total-box t-box-right '>
          <div className=' box-pad card mb-3 bg-card radius-right'>
            <div className='row no-gutters'>
              <div className='col-8'>
                <div className='card-body no-p'>
                  <h5 className='card-title text-white  mb-2 total-head total-ch '>Total Failure</h5>
                  <p className='card-text total-p text-white second-num  total-number font-weight-bold'>1</p>
                </div>
              </div>
              <div className='col-4'>
                <span className='d-inline-block shopping'>
                <img className="img-check" src={require('../../assets/images/no.png')} alt="okay"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalResults;
