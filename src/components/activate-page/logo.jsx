import React, { Component } from "react";

class Logo extends Component {
  state = {};
  upLabel = () => {
    this.setState({ backLabel: " back-label ", reBackLabel: " " });
  };
  downLabel = () => {
    this.setState({ reBackLabel: " reback-l ", backLabel: " " });
  };
  render() {
    // import props from ActiveComponent 
    const {
      bgNone,
      goTop,
      animBtn,
      animProg,
      cardAnim,
      mvLogo,
      handelClick,
      backItem,
      logoHo,
      transAnim2,
      transAnim
    } = this.props;
    return (
      <div>
        {/* register key  */}
        <div className='my-nav'>
          {/* it will appear on small screen  */}
          <div className={transAnim + " logo-turbo d-inline-block " +  transAnim2 + mvLogo + logoHo}>
            <img className='logo w-100' src={require("../../assets/images/logo-img.png")} alt='' />
          </div>
          <div className='d-inline-block float-right bg-transparent tog-btn'>
            <div className='dropdown account-inf'>
              
              <button
                className=' btn dropdown-toggle text-white tog-btn full-person'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-expanded='false'
                >
                  <div className='d-inline-block '
                 >
                   {/* user pic  */}
                <img
                  className='person'
                  src={require("../../assets/images/person.png")}
                  alt='person'
                />
                <span>
                  <img
                    className='p-badge'
                    src={require("../../assets/images/person-badg.png")}
                    alt=''
                  />
                </span>
              </div>
                <div className='d-inline-block text-left  more-details'>
                  <span className='samantha'>
                    Samantha
                    <span className='d-block text-muted gmail'>
                      <small>samantha@gmail.com</small>
                    </span>
                  </span>
                </div>
              </button>
              <div className='dropdown-menu bg-drop ' aria-labelledby='dropdownMenuButton'>
                <div className='pt-1 logout mx-2 pt-4 pb-3'>
                  <a className='dropdown-item text-white ' href='link2'>
                    Logout
                  </a>
                  <a className='dropdown-item text-white mt-2 pb-1' href='link3'>
                    Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className={"container  dodo" + cardAnim}>
          <div className='row px-0 w-100 mx-0'>
            {/* username information  */}
            <div className='offset-lg-4'></div>
            <div className='col-lg-4 p-0'>
              <div className={"card card-active text-white  " + cardAnim + backItem}>
                <div className='d-inline-block logo-card'>
                  <img
                    className='person  person-bg'
                    src={require("../../assets/images/person.png")}
                    alt='person'
                  />
                  <span>
                    <img
                      className='p-badge p-badge-bg'
                      src={require("../../assets/images/person-badg.png")}
                      alt=''
                    />
                  </span>
                </div>
                <small className='text-muted text-center small-title'>Bfffg#7724</small>
                <div className='card-body text-center'>
                  <h5 className={"card-title title-li "}>Activate your lincense</h5>
                  <form action=''>
                    <div className='form-group text-left'>
                      <div className={"key-label "}>
                        <label
                          htmlFor='license'
                          id='labelHomeAc'
                          className={
                            "text-muted home-lab  " + this.state.backLabel + this.state.reBackLabel
                          }>
                          Key License
                        </label>
                      </div>
                      <input
                        id='firstInp'
                        type='text'
                        className=' text-white form-control input-activate bg-transparent'
                        onFocus={this.upLabel}
                        onBlur={this.downLabel}
                      />
                      <div className={"progress " + bgNone}>
                        <div
                          className={"progress-bar" + animProg}
                          role='progressbar'
                          aria-valuenow='25'
                          aria-valuemin='0'
                          aria-valuemax='100'></div>
                      </div>
                    </div>
                    <button
                      onClick={handelClick}
                      id='activateBtnHome'
                      type='submit'
                      data-dismiss='modal'
                      className={
                        "btn btn-block btn-activate font-weight-bold position-relative " + animBtn
                      }>
                      <span className={" d-block  btn-sp " + goTop}>Activate</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;
