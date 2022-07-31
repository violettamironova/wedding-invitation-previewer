function changeCard1() {
    document.getElementById("myDIV").style.backgroundImage = "url(image1.jpg)";
 }
 function changeCard2() {
    document.getElementById("myDIV").style.backgroundImage = "url(image2.jpg)";
 }
 function changeCard3() {
    document.getElementById("myDIV").style.backgroundImage = "url(image3.jpg)";
 }

 const txt1 = document.getElementById('btn1')
    const txt2 = document.getElementById('btn2')
    const dt1 = document.getElementById('btn3')
    const txt3 = document.getElementById('btn4')
    const clk = document.getElementById('btn0')
    const out1 = document.getElementById('output')

    function fnct1() {
        out1.innerHTML = txt1.value;

    }
    clk.addEventListener('click',fnct1);