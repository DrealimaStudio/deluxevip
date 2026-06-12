document.getElementById("appointment").addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const service = document.getElementById("service").value;
const date = document.getElementById("date").value;

if(!name || !phone || !date){
alert("Lütfen tüm alanları doldurun.");
return;
}

const message = `
✨ Deluxe Vip Güzellik Salonu Randevu Talebi

👤 Ad: ${name}
📞 Telefon: ${phone}
💆 Hizmet: ${service}
📅 Tarih: ${date}


`;

window.open(
`https://wa.me/905525554804?text=${encodeURIComponent(message)}`,
"_blank"
);

});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

// linke tıklayınca menüyü kapat
document.querySelectorAll("#navMenu a").forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});