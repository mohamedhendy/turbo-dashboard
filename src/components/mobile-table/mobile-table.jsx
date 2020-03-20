import React, { Component } from "react";
import "./mobile.css";
class MobileTable extends Component {
  state = {};
  render() {
    return (
      <div className='m25'>
        {/* this is list table  will show only in mobile screen  */}
        <ul className='list-unstyled main-mobile'>
          <li className='d-block text-white '>
            <div>
              <span className='float-left p-2 font-weight-bold main-task'>Task</span>
              <ul className='list-unstyled filters-data float-right'>
                <li className='d-inline-block'>
                  <button className='f-all'>All</button>
                </li>
                <li className='d-inline-block'>
                  <button>1D</button>
                </li>
                <li className='d-inline-block'>
                  <button>1M</button>
                </li>
                <li className='d-inline-block'>
                  <button>1Y</button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className='row p-2'>
              <div className='col-6'>
                <span className='d-block text-muted'>
                  <small className='dateNov'>Nov 8, 2019</small>
                </span>
                <span className='d-block text-white'>Nike Blazer Mid Off-White</span>
                <span className='d-block text-muted'>
                  <small>
                    Nike Blazer
                    <span>
                      &nbsp; <i className='fas fa-circle text-white'></i>&nbsp;&nbsp;{" "}
                    </span>
                    Black/Large
                  </small>
                </span>
              </div>
              <div className='col'>
                <span className='text-muted d-block'>
                  <small>Price</small>
                </span>
                <span className='text-white'>$68.49</span>
              </div>
              <div className='col'>
                <h5 className='success-mob'>SUCCESS</h5>
              </div>
            </div>
          </li>
          <li>
            <div className='row p-2'>
              <div className='col-6'>
                <span className='d-block text-muted'>
                  <small className='dateNov'>Nov 12, 2019</small>
                </span>
                <span className='d-block text-white'>Adidas Yeezy Boost3...</span>
                <span className='d-block text-muted'>
                  <small>
                    Adidas
                    <span>
                      &nbsp; <i className='fas fa-circle text-white'></i>&nbsp;&nbsp;{" "}
                    </span>
                    Black/Large
                  </small>
                </span>
              </div>
              <div className='col'>
                <span className='text-muted d-block'>
                  <small>Price</small>
                </span>
                <span className='text-white'>$70.49</span>
              </div>
              <div className='col'>
                <h5 className='success-mob'>SUCCESS</h5>
              </div>
            </div>
          </li>
          <li>
            <div className='row p-2'>
              <div className='col-6'>
                <span className='d-block text-muted'>
                  <small className='dateNov'>Nov 8, 2019</small>
                </span>
                <span className='d-block text-white'>Supreme Pyrex 2 Cup...</span>
                <span className='d-block text-muted'>
                  <small>
                    Supreme US
                    <span>
                      &nbsp; <i className='fas fa-circle text-white'></i>&nbsp;&nbsp;{" "}
                    </span>
                    Black/Large
                  </small>
                </span>
              </div>
              <div className='col'>
                <span className='text-muted d-block'>
                  <small>Price</small>
                </span>
                <span className='text-white'>$68.49</span>
              </div>
              <div className='col'>
                <h5 className='success-mob'>SUCCESS</h5>
              </div>
            </div>
          </li>
          <li>
            <div className='row p-2'>
              <div className='col-6'>
                <span className='d-block text-muted'>
                  <small className='dateNov'>Nov 12, 2019</small>
                </span>
                <span className='d-block text-white'>Air Presto Off-White </span>
                <span className='d-block text-muted'>
                  <small>
                    Air Presto
                    <span>
                      &nbsp; <i className='fas fa-circle text-white'></i>&nbsp;&nbsp;{" "}
                    </span>
                    Black/Large
                  </small>
                </span>
              </div>
              <div className='col'>
                <span className='text-muted d-block'>
                  <small>Price</small>
                </span>
                <span className='text-white'>$70.49</span>
              </div>
              <div className='col'>
                <h5 className='success-mob'>SUCCESS</h5>
              </div>
            </div>
          </li>
          <li>
            <div className='row p-2 nide-react'>
              <div className='col-6'>
                <span className='d-block text-muted'>
                  <small className='dateNov'>Nov 8, 2019</small>
                </span>
                <span className='d-block text-white'>Nike React Element</span>
                <span className='d-block text-muted'>
                  <small>
                    Nike React
                    <span>
                      &nbsp; <i className='fas fa-circle text-white'></i>&nbsp;&nbsp;{" "}
                    </span>
                    Black/Large
                  </small>
                </span>
              </div>
              <div className='col'>
                <span className='text-muted d-block'>
                  <small>Price</small>
                </span>
                <span className='text-white'>$68.49</span>
              </div>
              <div className='col'>
                <h5 className='success-mob'>SUCCESS</h5>
              </div>
            </div>
          </li>
          <li>
            <div className='row p-2'>
              <div className='col-6'>
                <span className='d-block text-muted'>
                  <small className='dateNov'>Nov 12, 2019</small>
                </span>
                <span className='d-block text-white'>Air Force 1 Low Travis Scott</span>
                <span className='d-block text-muted'>
                  <small>
                  Air Force 
                    <span>
                      &nbsp; <i className='fas fa-circle text-white'></i>&nbsp;&nbsp;{" "}
                    </span>
                    Black/Large
                  </small>
                </span>
              </div>
              <div className='col'>
                <span className='text-muted d-block'>
                  <small>Price</small>
                </span>
                <span className='text-white'>$70.49</span>
              </div>
              <div className='col'>
                <h5 className='success-mob'>SUCCESS</h5>
              </div>
            </div>
          </li>
          <li className='las-li-m'></li>
        </ul>
      </div>
    );
  }
}

export default MobileTable;
