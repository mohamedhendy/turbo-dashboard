import React, { Component } from "react";
import CustomizedSwitches from "./switch";
class LicenseKey extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      //  this is dynamic data
      checked: false,
      hideDia: " d-block ",
      showDia: " d-none ",
      SuccessDia: " d-none ",
      hideDialog: " block ",
      msg: " ABC-0Z0-AAA-XGD-0Z7-DDD ",
      msgEdit: "Edit",
      editCheck: true,
      btnYel: "btn-edit",
      imgCard: "myCard.png",
      showInput: "invisible",
      defaultValue: "1111  5555  4444  3456",
      date: "Expire Date: 19 Dec 2019 (104 days from now) ",
      colorTrick: " "
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // this function will execute when click but now btn change date
  handelDate = () => {
    setTimeout(() => {
      this.setState({
        date: "Expire Date: 10 jun 2020 (204 days from now)",
        colorTrick: "text-white"
      });
    }, 3000);
  };
  // this function will execute when click on  Edit btn
  editHandelBtn = () => {
    var test = this.state.editCheck;
    this.setState({ editCheck: !this.state.editCheck });

    if (test === true) {
      this.setState({
        msgEdit: "Save",
        btnYel: "btn-gree",
        imgCard: "myCard2.png",
        showInput: "visible"
      });
    } else {
      this.setState({
        msgEdit: "Edit",
        btnYel: "btn-edit",
        imgCard: "myCard.png",
        showInput: "invisible"
      });
    }
  };
  // this checked btn
  handleChange(checked) {
    this.setState({ checked });
  }
  // when click on download btn
  handelDownload = () => {
    this.setState({
      FDBtn: " first-sp-a ",
      SCBtn: " second-sp-a ",
      LSBtn: " last-sp-a ",
      spBG: " bg-span-a ",
      animDown: " btn-download-anim "
    });
    setTimeout(() => {
      this.setState({
        FDBtn: "  ",
        SCBtn: "  ",
        LSBtn: "  ",
        spBG: " ",
        animDown: " "
      });
    }, 8000);
  };
  // when click on  second download btn
  handelDownload2 = () => {
    this.setState({
      FDBtn2: " first-sp-a2 ",
      SCBtn2: " second-sp-a2 ",
      LSBtn2: " last-sp-a2 ",
      spBG2: " bg-span-a2 ",
      animDown2: " btn-download-anim2 "
    });
    setTimeout(() => {
      this.setState({
        FDBtn2: "  ",
        SCBtn2: "  ",
        LSBtn2: "  ",
        spBG2: " ",
        animDown2: " "
      });
    }, 8000);
  };
  // when click active btn
  handelAcBtn = () => {
    this.setState({
      btnSca: " btn-sca ",
      hideDia: " d-block ",
      showDia: " d-none ",
      SuccessDia: " d-none ",
      hideDialog: " block ",
      hideSpin: ""
    });
  };
  // when click on unbind btn
  handelBindBtn = () => {
    this.setState({
      btnScale: " btn-sca ",
      hideDia: " d-block ",
      showDia: " d-none ",
      SuccessDia: " d-none ",
      hideDialog: " block ",
      hideSpin: " "
    });
  };
  // this reset btn animation of de active and unbind
  resetBtn = () => {
    this.setState({ btnSca: " ", btnScale: " " });
  };
  // delay with dialog box and change text of side  de active btn
  handelDialog = () => {
    this.setState({
      hideDia: " d-none ",
      showDia: " dis-blo"
    });
    setTimeout(() => {
      this.setState({ hideSpin: " d-none ", SuccessDia: " d-block" });
    }, 2000);
    setTimeout(() => {
      this.setState({ hideDialog: " d-noneDia ", msg: " No Computer" });
    }, 4000);
  };

  rehandelDialog = () => {
    this.setState({
      hideDia: " d-none ",
      showDia: " dis-blo"
    });
    setTimeout(() => {
      this.setState({ hideSpin: " d-none ", SuccessDia: " d-block" });
    }, 2000);
    setTimeout(() => {
      this.setState({ hideDialog: " d-noneDia ", msg: " ABC-0Z0-AAA-XGD-0Z7-DDD " });
    }, 4000);
  };

  render() {
    // this props  came from Activate component
    const { onUnBind, mvCar, carAnim, boxAnim, btnColor, bgSky, txtNow } = this.props;
    return (
      <div className=''>
        <div className='m25'>
          <div className='bg-card  clear-border'>
            <div className='text-left'>
              <span className='d-inline-block mr-auto  key-title mb-2 float-left'>License Key</span>
              <span className='d-inline-block mx-auto  text-right float-right'></span>
            </div>
            <div className='clearfixx bottom-key'></div>
            <div className='py-2'>
              <span className='code-n  float-left'>
                <span className='font-cu'>
                  <img src={require("../../assets/images/computer.png")} alt='new' />
                </span>
                {this.state.msg}
              </span>
              <span className='float-right'>
                <button
                  id='deActivateBtn'
                  className={"btn btn-danger btn-sm dea-btn " + this.state.btnSca}
                  onClick={this.handelAcBtn}>
                  Deactive
                </button>
              </span>
            </div>
            <div className='clearfix'></div>
            <div className='py-2'>
              <span className='code-n  float-left'>
                <span className='font-cu'>
                  <img src={require("../../assets/images/discoard.png")} alt='new' />
                </span>
                Bfffg#7724
              </span>
              <span className='float-right'>
                <button
                  id='deActivateBtn2'
                  onClick={() => {
                    this.handelBindBtn();
                  }}
                  className={"btn btn-danger btn-sm dea-btn " + this.state.btnScale}>
                  Unbind
                </button>
              </span>
            </div>
            <div className='clearfix'></div>
            <div className='py-2'>
              <span className='code-n  float-left'>
                <p className={"expire-l " + this.state.colorTrick}>
                  <span className='font-cu'>
                    <img src={require("../../assets/images/calender.png")} alt='new' />
                  </span>
                  {this.state.date}
                </p>
              </span>
            </div>
            <div className='clearfix'></div>
            <div className='py-2'>
              <span className='code-n  float-left expire-l'>
                <span className='font-cu'>
                  <i className='fas fa-undo-alt fa-2x'></i>
                </span>
                Auto Renewal (by monthly)
              </span>
              <span className='float-right'>
                <CustomizedSwitches />
              </span>
            </div>
            <div className='clearfix'></div>
            <div className='py-2'>
              <span className='code-n  hemo float-left expire-l'>
                <span className='font-cu'>
                  <img src={require("../../assets/images/time.png")} alt='new' />
                </span>
                Buy Extra Months
                <select className='btn btn-sm  bg-transparent btn-month' >
                  <option value=' 1 month '> 1 month </option>
                  <option value=' 6 month'> 6 month </option>
                  <option value=' 1 year '> 1 year </option>
                  <option value=' unlimited'> unlimited </option>
                </select>
                <span className='position-relative select-date'>
                  <i className='position-absolute fas fa-chevron-down'></i>
                </span>
              </span>
              <span className='float-right position-relative buy-now'>
                <button
                  className={"btn btn-buy btn-sm " + btnColor + bgSky}
                  onClick={() => {
                    mvCar();
                    this.handelDate();
                  }}>
                  {txtNow}
                </button>
                <div>
                  <img
                    className={"car " + carAnim}
                    src={require("../../assets/images/car.png")}
                    alt='car'
                  />
                  <img
                    className={"box " + boxAnim}
                    src={require("../../assets/images/box.png")}
                    alt=''
                  />
                </div>
              </span>
            </div>
            <div className='clearfix b-imp ms-0'></div>
          </div>
        </div>
        <div className=' pay-dis m25'>
          <div className='bg-card mb-3 h-card '>
            <h5 className='text-white text-left  edit-top pay-edit'>
              Payment
              <span className='float-right'>
                <button
                  id='editBTN'
                  onClick={this.editHandelBtn}
                  className={"btn btn-sm   " + this.state.btnYel}>
                  {this.state.msgEdit}
                </button>
              </span>
            </h5>
            <div className='bottom-key'></div>
            <div className='position-relative total-card'>
              <div className={this.state.showInput}>
                <input
                  type='text'
                  name='cardNumber'
                  defaultValue={this.state.defaultValue}
                  className='font-control card-number'
                  pattern='[\d| ]{16,22}'
                />
                <div className=''>
                  <label htmlFor='' className='text-white position-absolute cvc-la'>
                    <small>CVC</small>
                  </label>
                  <input
                    type='number'
                    defaultValue='186'
                    className='font-control card-number cvc'
                  />
                </div>
                <div className=''>
                  <label
                    htmlFor='datepicker'
                    className='text-white position-absolute cvc-la exp-lb'>
                    <small>EXPIRED</small>
                  </label>
                  <input
                    type='text'
                    id='datepicker'
                    defaultValue='05/22'
                    className=' datepicker font-control card-number cvc exp-f'
                  />
                </div>
              </div>
              <img
                className='w-100 h-100'
                src={require("../../assets/images/" + this.state.imgCard)}
                alt='card'
              />
            </div>
          </div>
          <div className='download-d'>
            {/* download section  */}
            <div className='text-left'>
              <h5 className='text-white down-head  py-2 mb-2'>Download Desktop App</h5>
              <div className='row'>
                <div className='col pr-0'>
                  <button
                    onClick={this.handelDownload}
                    className={" btn-block py-2 border-0 btn bg-white " + this.state.animDown}>
                    <span className={this.state.FDBtn}>
                      <img src={require("../../assets/images/window.png")} alt='windows' /> Download
                      Windows
                    </span>
                    <span className={this.state.SCBtn}>
                      <i className='fas text-white fa-download mr-4'></i> Downloading...
                    </span>
                    <span className={this.state.spBG}></span>
                    <span className={this.state.LSBtn}>
                      <i className='fas text-white fa-check mr-4'></i> Open File
                    </span>
                  </button>
                </div>
                <div className='col'>
                  <button
                    onClick={this.handelDownload2}
                    className={" btn-block py-2 border-0 btn bg-white " + this.state.animDown2}>
                    <span className={this.state.FDBtn2}>
                      <img src={require("../../assets/images/mac.png")} alt='mac' /> Download MacOS
                    </span>
                    <span className={this.state.SCBtn2}>
                      <i className='fas text-white fa-download mr-4'></i> Downloading...
                    </span>
                    <span className={this.state.spBG2}></span>
                    <span className={this.state.LSBtn2}>
                      <i className='fas text-white fa-check mr-4'></i> Open File
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Dialog  first dialog  */}
        <div
          className={" modal first-dialog fade " + this.state.hideDialog}
          id='exampleModalCenter'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content py-4'>
              <div className={"options p-4 " + this.state.hideDia}>
                <div className=''>
                  <h5 className=' mb-5 text-center font-weight-bold text-white'>
                    Are you sure to deactivate your <br />
                    license?
                  </h5>
                </div>
                <div className='mb-2'>
                  <button
                    type='button'
                    className='btn-no bg-transparent btn btn-secondary btn-block font-weight-bold py-2 btn-no '
                    data-dismiss='modal'
                    onClick={this.resetBtn}>
                    No
                  </button>
                </div>
                <div>
                  <button
                    onClick={this.handelDialog}
                    type='button'
                    className=' btn-yes btn  btn-block font-weight-bold py-2 '>
                    Yes
                  </button>
                </div>
              </div>
              <div className={"py-5 text-center " + this.state.showDia + this.state.hideSpin}>
                <div>
                  <h5 className='text-center text-white mb-5'>Please wait</h5>
                  <img
                    className='spinner'
                    src={require("../../assets/images/spinner.png")}
                    alt='new'
                  />
                </div>
              </div>
              <div className={" text-center  " + this.state.SuccessDia}>
                <div className='mb-3'>
                  <span className='okay-h'>
                    <i className='fas fa-check fa-2x text-white'></i>
                  </span>
                </div>
                <h3 className='text-white font-weight-bold'>Deactivate Successfully</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Dialog 2  */}

        <div
          className={" modal second-dialog  fade "}
          id='exampleModalCenter2'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'>
          <div className='modal-dialog  modal-dialog-centered' role='document'>
            <div className='modal-content py-4'>
              <div className={"options p-4 " + this.state.hideDia}>
                <div className=''>
                  <h5 className=' mb-5 text-center font-weight-bold text-white'>
                    Are you sure to unbind your <br />
                    discoard account
                  </h5>
                </div>
                <div className='mb-2'>
                  <button
                    type='button'
                    className='btn-no bg-transparent btn btn-secondary btn-block font-weight-bold py-2 btn-no '
                    data-dismiss='modal'
                    onClick={this.resetBtn}>
                    No
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      onUnBind();
                      this.rehandelDialog();
                    }}
                    type='button'
                    className=' btn-yes btn  btn-block font-weight-bold py-2 '>
                    Yes
                  </button>
                </div>
              </div>
              <div className={"py-5 text-center " + this.state.showDia + this.state.hideSpin}>
                <div>
                  <h5 className='text-center text-white mb-5'>Please wait</h5>
                  <img
                    className='spinner'
                    src={require("../../assets/images/spinner.png")}
                    alt='new'
                  />
                </div>
              </div>
              <div className={" text-center  " + this.state.SuccessDia}>
                <div className='mb-3'>
                  <span className='okay-h'>
                    <i className='fas fa-check fa-2x text-white'></i>
                  </span>
                </div>
                <h3 className='text-white font-weight-bold'>Unbinded Successfully</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LicenseKey;
