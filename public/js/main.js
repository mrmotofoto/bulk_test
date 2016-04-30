//------------------------------------------------------------------------------
//===================HELPER FUNCTIONS===========================================
//------------------------------------------------------------------------------


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

_('baseURL').onkeyup = function() {
    console.log(this.value);
    fillDiv(this, 'baseURLDiv'); 
};

_('baseCode').onkeyup = function() {
    console.log(this.value);
    fillDiv(this, 'baseCodeDIV'); 
};


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

