function changeCard1() {
    document.getElementById("myDIV").style.backgroundImage = "url(image10.jpg)"; 
   }
 function changeCard2() {
    document.getElementById("myDIV").style.backgroundImage = "url(image20.jpg)";
 }
 function changeCard3() {
    document.getElementById("myDIV").style.backgroundImage = "url(image30.jpg)";
 }

    const txt1 = document.getElementById('btn1')
    const txt2 = document.getElementById('btn2')
    const dt1= document.getElementById('btn3')
    const txt3 = document.getElementById('btn4')
    const txt4 = document.getElementById('btn5')
    
   //  const clk = document.getElementById('btn0')
   //  const out1 = document.getElementById('output')
    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    const line3 = document.getElementById('line3')
    const line4 = document.getElementById('line4')
    const line5 = document.getElementById('line5')
   //  let result = line1.concat("&", line2)
   
    txt1.addEventListener('keyup',trigger1)

    function trigger1(){
      const text = txt1.value
      line1.innerText = text

    }
    txt2.addEventListener('keyup',trigger2)

    function trigger2(){
      const text = txt2.value
      line2.innerText = text

    }
// line1 += line2
// const fullname = txt1.concat(txt2)

    dt1.addEventListener('keyup',trigger3)

    function trigger3(){
      const text = dt1.value
      line3.innerText = text

    }

    txt3.addEventListener('keyup',trigger4)

    function trigger4(){
      const text = txt3.value
      line4.innerText = text

    }

    txt4.addEventListener('keyup',trigger5)

    function trigger5(){
      const text = txt4.value
      line5.innerText = text

    }
    


//     function fnct1() {
//         out1.innerHTML = txt1.value;

//     }
//     clk.addEventListener('keyup',fnct1);
//     function fnct2() {
//       out1.innerHTML = txt2.value;

//   }
//   clk.addEventListener('click',fnct2);


//   const nodeList = document.querySelectorAll(".Form");
//   for (let i = 0; i < nodeList.length; i++) {
//     nodeList[i].style.backgroundColor = "blue";
//   }
