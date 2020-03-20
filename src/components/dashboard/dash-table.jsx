import React, { Component } from "react";
import "./dash-table.css";
class DataDashTable extends Component {
  state = {};

  render() {
    return (
      <div className=' me-end'>
        {/* this table will show only in desktop screen  */}
        <table className=' table table-borderless bg-card table-dark text-left py-2'>
          <thead>
            <tr className=' col text-uppercase  row head-tb'>
              <th className='col'>Date</th>
              <th className='col'>Product</th>
              <th className='col'>Website</th>
              <th className='col'>Price</th>
              <th className='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='row'>
              <td className='col'>Nov 8, 2019</td>
              <td className='col'>
              Nike Blazer Mid Off-White<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Nike Blazer</td>
              <td className='col'>$68.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 12, 2019</td>
              <td className='col'>
                Adidas Yeezy Boost3...<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Adidas</td>
              <td className='col'>$70.49 </td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 20, 2019</td>
              <td className='col'>
              Super Pyrex 2 Cup...<span className='d-block sm-span'>White/Large</span>
              </td>
              <td className='col'>Supreme US</td>
              <td className='col'>$86.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 21, 2019</td>
              <td className='col'>
              Air Presto Off-White <span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Air Presto</td>
              <td className='col'>$102.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row nike-react'>
              <td className='col'>Nov 22, 2019</td>
              <td className='col'>
              Nike React Element
                <span className='d-block sm-span'>Fair Aqua-Lrish Green/Large</span>
              </td>
              <td className='col'>Nike React</td>
              <td className='col'>$84.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 24, 2019</td>
              <td className='col'>
              Air Force 1 Low Travis Scott<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Air Force</td>
              <td className='col'>$90.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 24, 2019</td>
              <td className='col'>
                Super Pyrex 2 Cup...<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Supreme US</td>
              <td className='col'>$90.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 24, 2019</td>
              <td className='col'>
                Super Pyrex 2 Cup...<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Supreme US</td>
              <td className='col'>$90.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 24, 2019</td>
              <td className='col'>
                Super Pyrex 2 Cup...<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Supreme US</td>
              <td className='col'>$90.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 24, 2019</td>
              <td className='col'>
                Super Pyrex 2 Cup...<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Supreme US</td>
              <td className='col'>$90.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 24, 2019</td>
              <td className='col'>
                Super Pyrex 2 Cup...<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Supreme US</td>
              <td className='col'>$90.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 24, 2019</td>
              <td className='col'>
                Super Pyrex 2 Cup...<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Supreme US</td>
              <td className='col'>$90.49</td>
              <td className='success-td col'>Success</td>
            </tr>
            <tr className='row'>
              <td className='col'>Nov 24, 2019</td>
              <td className='col'>
                Super Pyrex 2 Cup...<span className='d-block sm-span'>Black/Large</span>
              </td>
              <td className='col'>Supreme US</td>
              <td className='col'>$90.49</td>
              <td className='success-td col'>Success</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataDashTable;
