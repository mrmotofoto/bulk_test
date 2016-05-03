//------------------------------------------------------------------------------
//===================HELPER FUNCTIONS===========================================
//------------------------------------------------------------------------------
console.log('main.js');

function _(inputField) {
  return document.getElementById(inputField);
}


//------------------------------------------------------------------------------
//===================INPUT FIELDS FUNCTIONS=====================================
//------------------------------------------------------------------------------

function toggleDiv(checkbox, divID) {
    // Grabbing ID OF DIV TO HIDE OR SHOW
    var divID = document.getElementById(divID);
    if (checkbox.checked) {
        divID.style.opacity = '1';
    } else {
        divID.style.opacity = '0';
    }
}

function fillDiv(inputbox, divID) {
    // Grabbing ID OF DIV TO Fill WITH TEXT
    var divID = document.getElementById(divID);
    divID.style.display = "block";
    divID.innerHTML = inputbox.value;
}

function fillLogoDiv(selectBox, divID) {
    // GRABBING ID OF DIV TO FILL WITH IMAGE
    var divID = document.getElementById(divID);
    divID.style.display = "block";
    divID.innerHTML = "<img src="+"\""+selectBox.value + "\">" ;
}

function fillBgColor(colorpick, divID) {
    // GRABBING ID OF DIV TO FILL WITH BG COLOR
  var divID = document.getElementById(divID);
  divID.style.background = colorpick.value;
  console.log(colorpick.value);
}


// function fillAddDealerDiv(selectBox, divID) {
//     // SHOWING ADDIOTNAL DEALER FOR
//     var divID = document.getElementById(divID);
//     divID.style.display = "block";
//   }
  
  
 
 

//------------------------------------------------------------------------------
//========================CHANGE BACKGROUND COLOR===============================
//------------------------------------------------------------------------------

_('bgColor').onchange = function() {
    fillBgColor(this, 'bgColorDiv');
};


//------------------------------------------------------------------------------
//========================CHANGE LOGO IMAGE=====================================
//------------------------------------------------------------------------------

_('baseLogo').onchange = function() {
    fillLogoDiv(this, 'baseLogoDiv');
};

//------------------------------------------------------------------------------
//========================INPUT TEXT UPDATE DIV=================================
//------------------------------------------------------------------------------


_('baseOffer').onkeyup = function() {
    console.log(this.value);
    fillDiv(this, 'baseOfferDiv'); 
};

_('baseURL').onkeyup = function() {
    
    console.log(this.value);
    fillDiv(this, 'baseURLDiv'); 
};



_('baseDealer').onkeyup = function() {
     console.log(this.value);
     fillDiv(this, 'baseDealerDiv'); 
};

_('baseAddress1').onkeyup = function() {
    console.log(this.value);
    fillDiv(this, 'baseAddress1Div'); 
};

_('baseLocation1').onkeyup = function() {
    console.log(this.value);
    fillDiv(this, 'baseLocation1Div'); 
};


_('baseDealer2').onkeyup = function() {
     console.log(this.value);
     fillDiv(this, 'baseDealer2Div'); 
};

_('baseAddress2').onkeyup = function() {
    console.log(this.value);
    fillDiv(this, 'baseAddress2Div'); 
};

_('baseLocation2').onkeyup = function() {
    console.log(this.value);
    fillDiv(this, 'baseLocation2Div'); 
};




// _('addtionalDealers').onchange = function() {
//   console.log(this.value);
//   toggleDiv(this, 'dealerCont1');
  
// }

// _('baseCode').onchange = function() {
    
//     if(this.value === "oneDealer") {
        
//         _('dealer2DIV').style.display = "none";
//         _('dealer3DIV').style.display = "none";
//         _('dealer4DIV').style.display = "none";
//         fillAddDealerDiv(this, 'dealer1DIV'); 
//     }
//     if(this.value === "twoDealer") {
//         _('dealer1DIV').style.display = "none";
//         _('dealer3DIV').style.display = "none";
//         _('dealer4DIV').style.display = "none";
//         fillAddDealerDiv(this, 'dealer2DIV'); 
//     }
//     if(this.value === "threeDealer") {
//         _('dealer1DIV').style.display = "none";
//         _('dealer2DIV').style.display = "none";
//         _('dealer4DIV').style.display = "none";

//         fillAddDealerDiv(this, 'dealer3DIV'); 
//     }
//     if(this.value === "fourDealer") {
//         _('dealer1DIV').style.display = "none";
//         _('dealer2DIV').style.display = "none";
//         _('dealer3DIV').style.display = "none";
//         fillAddDealerDiv(this, 'dealer4DIV');
//     }
    
// };

// _('baseCode').onchange = function() {
//     console.log(this.value);
//     fillAddDealerDiv(this, 'dealerCont2'); 
// };

// _('baseCode').onchange = function() {
//     console.log(this.value);
//     fillAddDealerDiv(this, 'dealerCont3'); 
// };

// _('baseCode').onchange = function() {
//     console.log(this.value);
//     fillAddDealerDiv(this, 'dealerCont4'); 
// };


//------------------------------------------------------------------------------
//========================TESTING AREA==========================================
//------------------------------------------------------------------------------



//------------------------------------------------------------------------------
//========================TOGGLE CHECK BOXES====================================
//------------------------------------------------------------------------------

// WORKS BUT WOULD LIKE TO REFACTOR!!!!!!!!

// _('testCheck1').onclick = function() {
//     fillCheckedDivs(this, "testCheck1DIV");
// };

// _('testCheck2').onclick = function() {
//     fillCheckedDivs(this, "testCheck1DIV");
// };

// _('testCheck3').onclick = function() {
//     fillCheckedDivs(this, "testCheck3DIV");
// };

// _('testCheck4').onclick = function() {
//     fillCheckedDivs(this, "testCheck4DIV");
// };


// function fillCheckedDivs(checkboxID, divID) {
//  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//  for(var i = 0; i < checkboxes.length; i++) {
//     var checkID = checkboxes[i].id
//     var datadiv = checkboxes[i].dataset.div;
//     console.log(datadiv, divID, checkID);
    
    // if (checkboxes.checked) {
    //     divID.style.opacity = '1';
    // } else {
    //     divID.style.opacity = '0';
    //     }
//     }    
// }


// clickedCheckBox(checkID).onclick = function() {
// toggleDiv(this, datadiv);
// };

