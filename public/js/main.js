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

clickedCheckBox('basePhone').onclick = function() {
    toggleDiv(this, 'basePhoneDiv'); 
};

