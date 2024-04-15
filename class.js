let pa =document.querySelector("#pare");
let boxes=document.querySelectorAll(".box");
let boj=document.querySelector("#l");
let pa1 =document.querySelector("#pare1");
let pa2 =document.querySelector("#pare2");
let reset1=document.querySelector("#reset");
let body=document.querySelector("body");
let t=document.querySelector("#t");
let link=document.querySelector(".link");
let game=document.querySelector(".game");
let g1=document.querySelector("#g1");
let g2=document.querySelector("#g2");
let g3=document.querySelector("#g3");
let second=document.querySelector(".second");
let nam =document.querySelector(".name");
 boxes.forEach ((box) => {
    box.addEventListener("click",()=>{
       let c=box.innerText;
       let d= pa.textContent;
        d=d+c       
        pa.textContent=d

        box.disabled=true;
        if(pa.innerText==="43256" ||pa.innerText==="678"){
         body.style.background='white'
         boj.style.display = 'block';
         t.style.display = 'block';
         g1.style.display = 'block';
         g2.style.display = 'block';
         g3.style.display = 'block';
         game.style.display = 'block';
         nam.style.display = 'none';
         
         
         second.setAttribute("class" ,"secondd")
         link.setAttribute("class" ,"linkk")
              pa1.innerText="WELCOME TO THE PHOTOSAVER";
              pa2.innerText="PhotoSaver prides itself on its robust security measures, ensuring that your precious memories remain safe and private. Employing state-of-the-art encryption protocols, PhotoSaver secures your photos with military-grade protection, safeguarding them from unauthorized access or data breaches. With end-to-end encryption, your photos are encrypted on your device before being transmitted, ensuring that only you have the key to unlock them. Additionally, PhotoSaver employs stringent authentication methods, such as biometric recognition and two-factor authentication, to further fortify your account against any potential threats. Rest assured, with PhotoSaver, your memories are not only preserved but also shielded from prying eyes.";
              reset1.setAttribute("id","resetn")
              boxes.forEach((box)=>{
              box.setAttribute("class","boxn")
               })
               pa.setAttribute("id","paren")
            }
         // arry();
          
    })
});

reset1.addEventListener("click",()=>{
    pa.innerText="";
    boxes.forEach((box)=>{
    box.disabled=false;
    }
    )
}
)

