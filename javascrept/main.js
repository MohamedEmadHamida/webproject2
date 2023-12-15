function CopyCoupon() {
    //copy coipon 
    navigator.clipboard.writeText("Coupon50%OFF");
    // Alert the copied text
    alert("Copied : " + "Coupon50%OFF");
    var couponcolor = document.getElementById("copy-coupon");
    couponcolor.style.color="rgb(167,243,208)";
    
  }
  