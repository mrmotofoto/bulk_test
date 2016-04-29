//------------------------------------------------------------------------------
//===================CHECK BOX FILL DIV SECTION=================================
//------------------------------------------------------------------------------
function _(inputField) {
  return document.getElementById(inputField);
}

function toggleDiv(checkbox, divId) {
    // Grabbing ID OF DIV TO HIDE OR SHOW---------------------------------------
    var divId = document.getElementById(divId);
    if (checkbox.checked) {
        divId.style.opacity = '1';
    } else {
        divId.style.opacity = '0';
    }
}

function fillDiv(inputbox, divId) {
    // Grabbing ID OF DIV TO Fill-----------------------------------------------
    var divId = document.getElementById(divId);
    divId.style.display = "block"
    divId.innerHTML = inputbox.value;
}


function fillBgColor(colorpick, divId) {
  var divId = document.getElementById(divId);
  divId.style.background = colorpick.value;
  console.log(colorpick.value);
}


// WORKS BUT WOULD LIKE TO REFACTOR!!!!!!!!-------------------------------------

//------------------------------------------------------------------------------
//========================TOGGLE CHECK BOXES====================================
//------------------------------------------------------------------------------

_('baseURL').onclick = function() {
    toggleDiv(this, "baseURLDiv");
};

_('baseLogo').onclick = function() {
    toggleDiv(this, 'baseLogoDiv');
};

_('baseDealer').onclick = function() {
    toggleDiv(this, 'baseDealerDiv'); 
};

_('baseAddress1').onclick = function() {
    toggleDiv(this, 'baseAddress1Div'); 
};


//------------------------------------------------------------------------------
//========================CHANGE BACKGROUND COLOR===============================
//------------------------------------------------------------------------------

_('bgColor').onchange = function() {
    fillBgColor(this, 'bgColorDiv');
};


_('baseOffer').onchange = function() {
    fillDiv(this, 'baseOfferDiv'); 
};











//------------------------------------------------------------------------------
//========================TESTING AREA===========================================
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

