import $ from 'jquery';
import jQuery from 'jquery';
$(function () {


  // this is deactivated btn 
  $('#deActivateBtn').click(function () {
    setTimeout(function () {

      $('.modal-backdrop').css('display', 'block');
      $('#exampleModalCenter').css('display', 'block !important');

      $('#exampleModalCenter').modal().show();
    }, 300);
  })
  // this is unbind btn 

  $('#deActivateBtn2').click(function () {
    setTimeout(function () {

      $('.modal-backdrop').css('display', 'block');
      $('#exampleModalCenter2').css('display', 'block !important');

      $('#exampleModalCenter2').modal().show();
    }, 300);

  })

  //  this btn of yes after click deactivated and after click on in it it will show there is no computer 
  $('.btn-yes').click(function () {
    setTimeout(() => {

      $('.modal-backdrop').css('display', 'none');

      $('#deActivateBtn').hide()


    }, 4000);
  })
  //  this btn unbind and after click on in it it will logout 

  $('.btn-unbind-yes').click(function () {
    setTimeout(() => {
      $("#exampleModalCenter2").hide()
      $('.second-page').hide()
      $('.account-inf').hide()
      $('.logo-turbo').fadeIn(2000);
      $('.modal-backdrop').css('display', 'none');
      $('#exampleModalCenter2').modal().hide();

      $('#deActivateBtn').show()

    }, 4000);
  })
  //  this is btn of no of bootstrap modal 
  $('.btn-no').click(function () {
    $('.modal-backdrop').css('display', 'none');

  })
  // this is home btn  when you type your licence key
  $('#activateBtnHome').click(() => {
    setTimeout(() => {
      $('.second-page').fadeIn(1000)
      $('.account-inf').fadeIn(1000)

      $('body').css('overflow', 'auto');
    }, 4500)
  })
  $('.s-act').hide();
  $('.e-act').hide();

  $('.e-act').click(function () {
    $(this).slideUp()
  })
  $('.btn-buy').click(function () {
    setTimeout(() => {
      $('.s-act').slideDown()
    }, 5000)
    setTimeout(() => {
      $('.s-act').slideUp()
    }, 6500)
  })
  $('#editBTN').click(function () {
    if ($(this).hasClass('btn-gree')) {
      $('.e-act').slideToggle()
    }
    setTimeout(() => {
      $('.e-act').slideUp()
    }, 2000)
  })
  $('.second-page').hide()
  $('.account-inf').hide()
  $("input[name='cardNumber']").keydown(function () {

    var curChr = this.value.length;
    var curVal = $(this).val();
    if (curChr === 4) {
      $("input[name='cardNumber']").val("" + curVal + "  ");
    } else if (curChr === 10) {
      $("input[name='cardNumber']").val(curVal + "  ");
    } else if (curChr === 16) {
      $("input[name='cardNumber']").val(curVal + "  ");
    }
    $('.modal-backdrop').css('display', 'none');
  })

  $('#firstInp').blur(function () {
    if ($(this).val().length > 0) {
      $('#labelHomeAc').addClass('back-label');
      $('#labelHomeAc').removeClass('reback-l');
    }
  })

  $('.d-act').hide();
  /* Download */
  $('.download-d button').click(function () {
    $('.d-act').slideDown()
    setTimeout(() => {
      $('.d-act').slideUp()
    }, 2000)
  })

  /* make logo center */
  jQuery.fn.center = function () {
    return this.css('position', 'absolute').css({ 'left': '50%' });
  }
  $('.logo-turbo').center();


  // change sort buttons 

  $('.filter-num button').click(function () {
    $(this).addClass('bg-active').parent().siblings().find('button').removeClass('bg-active')
  })





  $('select').hover(function () {

  });
})
