//  var checks = document.querySelectorAll('input[type="checkbox"]');
  
//  for(var i = 0; i < checks.length; i++) {
//     var checkID = checks[i].id
//     var datadiv = checks[i].dataset.div;
//     console.log(datadiv, checkID);
// }

// clickedCheckBox(checkID).onclick = function() {
// toggleDiv(this, datadiv);
// };








function clickedCheckBox(checkboxID) {
  return document.getElementById(checkboxID);
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

// WORKS BUT WOULD LIKE TO REFACTOR---------------------------------------------
clickedCheckBox('baseURL').onclick = function() {
    toggleDiv(this, "baseURLDiv");
};

clickedCheckBox('baseLogo').onclick = function() {
    toggleDiv(this, 'baseLogoDiv');
};

clickedCheckBox('baseDealer').onclick = function() {
    toggleDiv(this, 'baseDealerDiv'); 
};

clickedCheckBox('baseAddress1').onclick = function() {
    toggleDiv(this, 'baseAddress1Div'); 
};

clickedCheckBox('baseAddress2').onclick = function() {
    toggleDiv(this, 'baseAddress2Div'); 
};

clickedCheckBox("baseOffer").onclick = function() {
    toggleDiv(this, 'baseOfferDiv'); 
};



// function colorWheelBox(colorWheel) {
//   return document.getElementById(colorWheel);
// }

// function changeColor(colorSelection, divId) {
//     // Grabbing ID OF DIV TO CHANGE COLOR---------------------------------------
//     var divId = document.getElementById(divId);
//     if (checkbox.checked) {
//         divId.style.opacity = '1';
//     } else {
//         divId.style.opacity = '0';
//     }
// }

var bgColor = document.getElementById('bgColor');
var bgColorDiv = document.getElementById('bgColorDiv');

bgColor.addEventListener("change", function(){
  bgColorDiv.style.background = this.value;
  console.log(this.value);
});

