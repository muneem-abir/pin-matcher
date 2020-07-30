window.onload = function(){
    var inputBox = document.getElementById("input_box");
    var container = document.getElementById("container_full");
    container.addEventListener("click", function(e){
        buttonClick(e.target.id);
    });
    // pin entry code
    function buttonClick(buttonId){
        if(buttonId != "buttonback" && buttonId != "buttonc"){
            var button = document.getElementById(buttonId);
            var temp = buttonId;
            temp = temp.replace("button","");
            entries(temp);
        };
    };
    function entries(temp){
        inputBox.value += temp;
    } 
    // total clear / cancel button code
    var cancel = document.getElementById("buttonc")
    cancel.addEventListener("click", erase);
    function erase(){
        inputBox.value = "";
    };
    // backspace code
    var backBtn = document.getElementById("buttonback")
    backBtn.addEventListener("click", function(){
        var str = document.getElementById("input_box").value;
        str = str.substr(0,str.length-1);
        document.getElementById("input_box").value = str ;
    });
};
// pin generator
var generate = document.getElementById("generate_btn");
generate.addEventListener("click", function(){
    var max = 9999;
    var min = 1000;
    var result = Math.random()*(max - min) + min;
    var output = Math.round(result);
    document.getElementById('generate_box').value = output;
    return output;
});
// pin maching code
function submitMatcher(){
    var matcherKeyBox = document.getElementById("input_box").value;
    var matcherGenBox = document.getElementById("generate_box").value
    var matched = document.getElementById("matched");
    var notMatched = document.getElementById("not_matched");
    if (matcherGenBox == matcherKeyBox){
        matched.style.display = "block";
        notMatched.style.display = "none";
    };
    if (matcherGenBox != matcherKeyBox) {
        notMatched.style.display = "block";
        matched.style.display = "none";
    };
};