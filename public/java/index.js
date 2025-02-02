const socket = io();
const form=document.getElementById("form");
const input=document.getElementById("input");
const message=document.getElementById("messages");
const Mbox=document.querySelector(".message_box");
const btn=document.querySelector(".chatbot_popup_btn button");
const btn_div=document.querySelector(".chatbot_popup_btn");


btn.addEventListener("click",()=>{
  btn_div.classList.add("hide_btn");
  Mbox.classList.add("show_box");
})

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(input.value){
    socket.emit("message",input.value);
    const item=document.createElement("li");
    item.classList.add("Smessage");
    item.textContent=input.value;
    message.appendChild(item);
    input.value="";
  }
})

socket.on("mes",(mes)=>{
  const item=document.createElement("li");
  item.textContent=mes;
  item.classList.add("Rmessage");
  message.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
})


