import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className='text-muted position-relative'>
         {/* footer */}
        <p className='text-center py-3'>
          <span>Copyright &copy; 2019 Turbo</span>
        </p>
      </div>
    );
  }
}

export default Footer;
