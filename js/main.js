document.addEventListener("DOMContentLoaded",function(){
  var yearEls=document.querySelectorAll("#year,#year2,#year3,#year4");
  var y=new Date().getFullYear();
  yearEls.forEach(function(e){e.textContent=y});
  var mobileToggle=document.getElementById("mobileToggle");
  var mobileToggle2=document.getElementById("mobileToggle2");
  var mobileToggle3=document.getElementById("mobileToggle3");
  var mobileToggle4=document.getElementById("mobileToggle4");
  var mobileMenu=document.getElementById("mobileMenu");
  function toggleMenu(){
    if(mobileMenu.hasAttribute("hidden")){
      mobileMenu.removeAttribute("hidden");
    } else {
      mobileMenu.setAttribute("hidden","");
    }
  }
  if(mobileToggle)mobileToggle.addEventListener("click",toggleMenu);
  if(mobileToggle2)mobileToggle2.addEventListener("click",toggleMenu);
  if(mobileToggle3)mobileToggle3.addEventListener("click",toggleMenu);
  if(mobileToggle4)mobileToggle4.addEventListener("click",toggleMenu);
  var bookingForm=document.getElementById("bookingForm");
  if(bookingForm){
    var formMessage=document.getElementById("formMessage");
    bookingForm.addEventListener("submit",function(ev){
      ev.preventDefault();
      var data={
        name:bookingForm.name.value.trim(),
        phone:bookingForm.phone.value.trim(),
        email:bookingForm.email.value.trim(),
        service:bookingForm.service.value,
        details:bookingForm.details.value.trim(),
        date:bookingForm.date.value
      };
      localStorage.setItem("mte_last_booking",JSON.stringify(data));
      formMessage.textContent="Request saved locally. Opening your email app to send details.";
      setTimeout(function(){
        var subject=encodeURIComponent("Booking request from "+data.name);
        var body=encodeURIComponent("Name: "+data.name+"\nPhone: "+data.phone+"\nEmail: "+data.email+"\nService: "+data.service+"\nPreferred date/time: "+data.date+"\nDetails: "+data.details);
        window.location.href="mailto:marshs.tech@example.com?subject="+subject+"&body="+body;
      },800);
    });
    var mailtoBtn=document.getElementById("mailtoBtn");
    if(mailtoBtn){
      mailtoBtn.addEventListener("click",function(){
        var name=bookingForm.name.value.trim();
        var phone=bookingForm.phone.value.trim();
        var email=bookingForm.email.value.trim();
        var service=bookingForm.service.value;
        var details=bookingForm.details.value.trim();
        var date=bookingForm.date.value;
        var subject=encodeURIComponent("Booking request from "+(name||""));
        var body=encodeURIComponent("Name: "+name+"\nPhone: "+phone+"\nEmail: "+email+"\nService: "+service+"\nPreferred date/time: "+date+"\nDetails: "+details);
        window.location.href="mailto:marshs.tech@example.com?subject="+subject+"&body="+body;
      });
    }
  }
});
