//Elements
var txtInput = document.getElementById('txtInput');
var txtFileName = document.getElementById('txtFileName');
var txtPrompt = document.getElementById('error');


//Button Save Click
document.getElementById('btnSave').addEventListener('click', function(){
            
    var fileName = document.getElementById('txtFileName').value;
    var txtToSave = document.getElementById('txtInput').value;
    var txtProblem = document.getElementById('txtChallenge').innerHTML;
    var txtTitle = document.getElementById('txtTitle').innerHTML;
    var saveToFile = "Name : " +fileName.toUpperCase()+ "\n-----------------------------------\n" +txtTitle+ " : " +txtProblem+ "\n-----------------------------------\n\n"   +txtToSave;
    
    if (txtToSave == "" && fileName == "") defineTextField("both");
    else if (txtToSave == "") defineTextField("code");
    else if (fileName == "") defineTextField("filename");
    else { defineTextField("success"); SaveTextFile(saveToFile); }
}); 



//Define textfield
function defineTextField(type)
{
    txtPrompt.innerHTML = "*Required textfield";
    txtPrompt.style.color = "red";
    txtPrompt.style.visibility = "visible";

    switch(type)
    {
        case "both":
            txtInput.style.border = "1px solid red";
            txtFileName.style.border = "1px solid red";
            break;
        
        case "code":
            txtInput.focus();
            txtInput.style.border = "1px solid red";
            txtFileName.style.border = "none";
            break;

        case "filename":
            txtFileName.focus();
            txtInput.style.border = "none";
            txtFileName.style.border = "1px solid red";
            break;

        case "success":
            txtInput.style.border = "none";
            txtFileName.style.border = "none";
            txtPrompt.innerHTML = "Successfully saved!";
            txtPrompt.style.color = "dodgerblue";
    }
}


//Save as txt file
function SaveTextFile(txtToSave)
{
    var blob = new Blob([txtToSave], { type: 'text/plain'});
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = txtFileName.value.toUpperCase() + '.txt';

    document.body.append(a);
    a.click();
    document.body.removeChild(a);

    txtFileName.value = "";
    txtInput.value = "";
    //window.alert("Your code is successfully saved!");
}


//Key press
txtInput.addEventListener("keypress", function(event){ 
    txtInput.style.border = "none";
    txtPrompt.style.visibility = "hidden";
});

txtFileName.addEventListener("keypress", function(event){ 
    txtFileName.style.border = "none";
    txtPrompt.style.visibility = "hidden";
    
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("btnSave").click();
    }
});

