import React, { Component } from "react";
import Logo from "./logo";
import "./activate.css";
import DataDashTable from "../dashboard/dash-table";
import TotalResults from "../dashboard/total-results";
import LicenseKey from "../dashboard/license-key";
import Footer from "../footer/footer";
import MobileTable from "../mobile-table/mobile-table";
class Activate extends Component {
  state = {
    bgNone: "",
    goTop: "",
    animBtn: "",
    animProg: "  ",
    cardAnim: " ",
    mvLogo: "",
    brandAni: "  ",
    logoAni: "  ",
    backItem: "  ",
    txtNow: "Buy Now",
    transAnim: " transAnim ",
    transAnim2: "   "
  };

  // this function when click on register key 
  handelClick = e => {
    this.setState({
      bgNone: " bg-transparent ",
      goTop: " go-top ",
      animBtn: " btn-anim",
      animProg: " progress-bar-anim  ",
      cardAnim: " card-an ",
      mvLogo: " logo2-turbo ",
      brandAni: " navbar-brand-ani ",
      logoAni: " logo-ani ",
      backItem: "  ",
      logoHo: " ",
      showFooter: " d-none ",
      transAnim2: " transAnim2 "
    });
    e.preventDefault();
  };

  // create animation for btn 
  aniBtnBuy = () => {
    this.setState({
      carAnim: " car-animations ",
      boxAnim: " box-animations",
      btnColor: " btn-buy-scale btn-buy-plus ",
      bgSky: " bg-sky ",
      txtNow: " "
    });
    setTimeout(() => {
      this.setState({
        bgSky: " ",
        carAnim: "  ",
        boxAnim: " ",
        btnColor: "   ",
        txtNow: " Buy Now "
      });
    }, 5000);
  };
  // unbind btn 
  unBindClasses = () => {
    setTimeout(() => {
      this.setState({
        bgNone: " ",
        animProg: "   ",
        cardAnim: "  ",
        mvLogo: " ",
        backItem: " back-main-div ",
        logoHo: " logo-huh ",
        carAnim: "   ",
        boxAnim: "  ",
        btnColor: "  ",
        goTop: "  "
      });
    }, 4300);
  };
  render() {
    const {
      logoHo,
      bgNone,
      goTop,
      animBtn,
      animProg,
      cardAnim,
      mvLogo,
      brandAni,
      logoAni,
      backItem,
      carAnim,
      boxAnim,
      btnColor,
      bgSky,
      txtNow,
      transAnim,
      transAnim2
    } = this.state;
    return (
      <React.Fragment>
        <div className='note-tick'>
          <div className='position-fixed btn-info s-act act-ac'>
            <span className='btn  '>Successfully Checked Out</span>
          </div>
        </div>
        <div className='note-tick'>
          <div className='position-fixed btn-info e-act act-ac'>
            <span className='btn  '>Edit Successfully</span>
          </div>
        </div>
        <div className='note-tick'>
          <div className='position-fixed btn-info d-act act-ac'>
            <span className='btn  '>Download Started</span>
          </div>
        </div>
        <div className='page min-height '>
          <div className='container-fluid min-height ref '>
            <div>
              <Logo
                handelClick={this.handelClick}
                bgNone={bgNone}
                goTop={goTop}
                animBtn={animBtn}
                animProg={animProg}
                cardAnim={cardAnim}
                mvLogo={mvLogo}
                brandAni={brandAni}
                logoAni={logoAni}
                backItem={backItem}
                logoHo={logoHo}
                transAnim={transAnim}
                transAnim2={transAnim2}
              />
            </div>
            <div className='row px-3 w-100 second-page rem-mg'>
              <div className='col-lg-8'>
                <TotalResults />
                <DataDashTable />
              </div>
              <div className='col-lg-4 whole-key'>
                <div className='screen'>
                  <MobileTable />
                </div>

                <LicenseKey
                  onUnBind={this.unBindClasses}
                  mvCar={this.aniBtnBuy}
                  carAnim={carAnim}
                  boxAnim={boxAnim}
                  btnColor={btnColor}
                  bgSky={bgSky}
                  txtNow={txtNow}
                />
              </div>
            </div>
            <div className={" footer "}>
              <Footer />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Activate;
