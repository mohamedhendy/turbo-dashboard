```jsx
/*****************************************************************
* Active-page Folder ==============================
* active.jsx
* Global Description for Global page include components
 [ Logo, TotalResults, DataDashTable, MobileTable, LicenseKey, Footer]
*/
class Activate extends Component {
    state = {
    bgNone:,    //unBindClasses = () => {}
    goTop:,     //unBindClasses = () => {}, handelClick = e => {}
    animBtn:,   //handelClick = e => {}
    animProg:,  //unBindClasses = () => {}, handelClick = e => {}
    cardAnim:,  //unBindClasses = () => {}, handelClick = e => {}
    mvLogo:,    //unBindClasses = () => {}, handelClick = e => {}
    brandAni:,  //handelClick = e => {}
    logoAni:,   //handelClick = e => {}
    backItem:,  //unBindClasses = () => {}, handelClick = e => {}
    txtNow:,    //aniBtnBuy = () => {}
    transAnim:, //handelClick = e => {}
    transAnim2: //handelClick = e => {}
  };
 // when click on register key  add css class to state value
  handelClick = e => {
    this.setState({
      bgNone:,  // make color transparent
      goTop:,  // logo move to original position
      animBtn:, // animation for register btn
      animProg:, // progressbar animation
      cardAnim:, // this is for car on buy now btn
      mvLogo:,  // this is for logo img
      brandAni:,  //  brand user logo
      logoAni:,   // animation for user logo
      backItem:,   // animation for home user logo
      logoHo:, // logo
      showFooter:, // show footer
      transAnim2:,   // animation for logo
    })
  }

  // add animation for [Buy Now Btn]
  aniBtnBuy = () => {
    this.setState({
      carAnim:, // animation  for car
      boxAnim:, // animation for box
      btnColor:, // change color of btn [buy now]
      bgSky:,   // add new color for buy now btn
      txtNow:, // change text on [ buy now btn ]
    });
  }
  unBindClasses = () => {
    this.setState({
        bgNone: ,  // make this class undefined
        animProg:,  // make this class undefined
        cardAnim:,  // make this class undefined
        mvLogo:,  // make this class undefined
        backItem: " back-main-div ", // add class to logo
        logoHo: " logo-huh ", // add class to logo
        carAnim:, // make this class undefined
        boxAnim:, // make this class undefined
        btnColor:, // make this class undefined
        goTop: // make this class undefined
      });
  }
}
/*****************************************************************
* Active-page Folder ==============================
* Logo.jsx
* Global Description for Logo components
*/

class Logo extends Component {


  // make label up from it's place
  upLabel = () => {}
  // restore label
  downLabel = () => {}
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
  }
}

/*****************************************************************
* dashboard Folder ==============================
* license-key.jsx
* Global Description for license-key components
*/
// include  [ CustomizedSwitches ]
import CustomizedSwitches from "./switch";

class LicenseKey extends Component {

// executed when click buy now btn change date
  handelDate = () => {}

// executed when click on  Edit btn and edit felids on card
  editHandelBtn = () => {}


// executed when click on on/off btn
  handleChange(checked) {}

// when click on download btn create animation of clicked btn and pop up notification appear on top window
handelDownload = () => {}


// when click active btn display dialog
  handelAcBtn = () => {}

// when click on unbind btn display unbind dialog
handelBindBtn = () => {}

// this reset btn animation of de active and unbind
resetBtn = () => {}

// delay with dialog box and change text of side  de active btn
handelDialog = () => {}

// reset Dialog after click yes on unbind dialog
rehandelDialog = () => {}


// this props  came from Activate component
 render() {
  const { onUnBind, mvCar, carAnim, boxAnim, btnColor, bgSky, txtNow } = this.props;
 }
}

/*****************************************************************
* dashboard Folder ==============================
* dash-table.jsx
* Global Description for DataDashTable components
*/
class DataDashTable extends Component {}


/*****************************************************************
* Mobile-table Folder ==============================
* mobile-table.jsx
* Global Description for mobile-table components
* it will appear only on mobile screen
*/

class MobileTable extends Component {}

/*****************************************************************
* Footer Folder ==============================
* footer.jsx
* Global Description for footer components
*/

class Footer extends Component {}


/* Look at custom.jsx*/
```
