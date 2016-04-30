//------------------------------------------------------------------------------
//===================HELPER FUNCTIONS===========================================
//------------------------------------------------------------------------------


function _(inputField) {
  return document.getElementById(inputField);
}


//------------------------------------------------------------------------------
//===================INPUT FIELDS FUNCTIONS=====================================
//------------------------------------------------------------------------------

function toggleDiv(checkbox, divId) {
    // Grabbing ID OF DIV TO HIDE OR SHOW
    var divId = document.getElementById(divId);
    if (checkbox.checked) {
        divId.style.opacity = '1';
    } else {
        divId.style.opacity = '0';
    }
}

function fillDiv(inputbox, divId) {
    // Grabbing ID OF DIV TO Fill WITH TEXT
    var divId = document.getElementById(divId);
    divId.style.display = "block";
    divId.innerHTML = inputbox.value;
}

function fillLogoDiv(selectBox, divId) {
    // GRABBING ID OF DIV TO FILL WITH IMAGE
    var divId = document.getElementById(divId);
    divId.style.display = "block";
    divId.innerHTML = "<img src="+"\""+selectBox.value + "\">" ;
}

function fillBgColor(colorpick, divId, dummyContent) {
    // GRABBING ID OF DIV TO FILL WITH BG COLOR
  var divId = document.getElementById(divId);
  divId.style.background = colorpick.value;
  console.log(colorpick.value);
}


//------------------------------------------------------------------------------
//========================TOGGLE CHECK BOXES====================================
//------------------------------------------------------------------------------

// WORKS BUT WOULD LIKE TO REFACTOR!!!!!!!!

// _('baseURL').onclick = function() {
//     toggleDiv(this, "baseURLDiv");
// };

// _('baseLogo').onclick = function() {
//     toggleDiv(this, "baseLogoDiv");
// };

// _('baseDealer').onclick = function() {
//     toggleDiv(this, "baseDealerDiv"); 
// };

// _('baseAddress1').onclick = function() {
//     toggleDiv(this, "baseAddress1Div"); 
// };

//------------------------------------------------------------------------------
//========================CHANGE BACKGROUND COLOR===============================
//------------------------------------------------------------------------------

_('bgColor').onchange = function() {
    fillBgColor(this, 'bgColorDiv','dummyContent');
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










//------------------------------------------------------------------------------
//========================TESTING AREA==========================================
//------------------------------------------------------------------------------

//  var checks = document.querySelectorAll('input[type="checkbox"]');
  
//  for(var i = 0; i < checks.length; i++) {
//     var checkID = checks[i].id
//     var datadiv = checks[i].dataset.div;
//     console.log(datadiv, checkID);
// }

// clickedCheckBox(checkID).onclick = function() {
// toggleDiv(this, datadiv);
// };

