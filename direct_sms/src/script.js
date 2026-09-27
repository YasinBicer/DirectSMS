  	const button1 = document.getElementById('secim_button_1');
    const button2 = document.getElementById('secim_button_2');

    button1.addEventListener('click', function() {
        button1.classList.add('active_button');
        button2.classList.remove('active_button');
    });

    button2.addEventListener('click', function() {
        button2.classList.add('active_button');
        button1.classList.remove('active_button');
    });

    // Sayfa yüklenirken ilk butonu aktif yapmak için
    window.onload = function() {
        button1.classList.add('active_button');
    }



<!--Bannerdaki_Kayan_Uygulamalar-->
     var swiper1 = new Swiper('.swiper1', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            freeMode: true,
            speed: 10000, // Geçiş hızı (ms)
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
        });

        var swiper2 = new Swiper('.swiper2', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            loopAdditionalSlides: 1, // Döngü sırasında boşluk oluşmasını önler
            speed: 7500, // Geçiş hızı (ms)
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true, // Ters yönde kaydırma
            },
        });






<!-- Slayt geçişini sağlamak için JavaScript fonksiyonları
var slideIndex = 0;

function showSlide(n) {
    var slides = document.getElementsByClassName("slider-resim");
    var dots = document.getElementsByClassName("slider-dot");

    if (n >= slides.length) {slideIndex = 0}    
    if (n < 0) {slideIndex = slides.length - 1}
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].classList.add("active");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function toSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// İlk slaytı göster
showSlide(slideIndex);









<!--Anasayfa_Sol_Taraf--><br>

//Servis Aktivasyonlar kart kutusu içerisinden filtreleme kısmı
function arama_servis() {
    var input = document.querySelector('.secim-form-servis-text').value.toLowerCase();
    var cards = Array.from(document.getElementsByClassName('servis-card'));

    cards.forEach(function(card) {
        var title = card.querySelector('.card-baslik').textContent.toLowerCase();
        card.style.display = title.includes(input) ? '' : 'none';
    });
}


function arama_ulke() {
    var input = document.querySelector('.secim-form-ulke-text').value.toLowerCase();
    var cards = Array.from(document.getElementsByClassName('ulke-card'));

    cards.forEach(function(card) {
        var title = card.querySelector('.card-baslik').textContent.toLowerCase();
        card.style.display = title.includes(input) ? '' : 'none';
    });
}



function arama_operator() {
    var input = document.querySelector('.secim-form-operator-text').value.toLowerCase();
    var cards = Array.from(document.getElementsByClassName('operator-card'));

    cards.forEach(function(card) {
        var title = card.querySelector('.card-baslik').textContent.toLowerCase();
        card.style.display = title.includes(input) ? '' : 'none';
    });
}
		
		
		

//TAB 2 ARAMA

function arama_servis_tab2() {
    var input = document.querySelector('.secim-form-servis-text-tab2').value.toLowerCase();
    var cards = Array.from(document.getElementsByClassName('servis-card-tab2'));

    cards.forEach(function(card) {
        var title = card.querySelector('.card-baslik').textContent.toLowerCase();
        card.style.display = title.includes(input) ? '' : 'none';
    });
}

		
		
function arama_ulke_tab2() {
    var input = document.querySelector('.secim-form-ulke-text-tab2').value.toLowerCase();
    var cards = Array.from(document.getElementsByClassName('ulke-card-tab2'));

    cards.forEach(function(card) {
        var title = card.querySelector('.card-baslik').textContent.toLowerCase();
        card.style.display = title.includes(input) ? '' : 'none';
    });
}



function arama_operator_tab2() {
    var input = document.querySelector('.secim-form-operator-text-tab2').value.toLowerCase();
    var cards = Array.from(document.getElementsByClassName('operator-card-tab2'));

    cards.forEach(function(card) {
        var title = card.querySelector('.operator-card-baslik').textContent.toLowerCase();
        card.style.display = title.includes(input) ? '' : 'none';
    });
}
		
		
		

// Başlangıçta operatör seçim kutusunu kilitle
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector(".ulke-secim-card-kutu-tab2 input[type='checkbox']:checked")) {
        document.getElementById("operator-secim-acik-tab2").classList.add("disabled");
    }
});

function toggleActive(element) {
    var activeElements = document.querySelectorAll('.servis-card.active');
    activeElements.forEach(function(el) {
        el.classList.remove('active');
    });
    element.classList.add('active');
}




function servis_expose(cardNumber) {
    var check = document.getElementById("servis_check_" + cardNumber);
    
    if (check.checked) {
        document.getElementById("servis_card_" + cardNumber).style.pointerEvents = "none";
        document.getElementById("servis_card_bilgi_" + cardNumber).style.display = "none";
        document.getElementById("servis_card_iptal_" + cardNumber).style.display = "block";
		document.getElementById("servis-secim").style=" height:50px !important; overflow-y:hidden ";
		document.getElementById("secim_form_1").style=" display:none";
		document.getElementById("secim_form_2").style=" display:block";
		
		

        // Diğer kartları gizle
        for (var i = 1; i <= 8; i++) {
            if (i !== cardNumber) {
                document.getElementById("servis_card_" + i).style.display = "none";
            }
        }

        document.getElementById("ulke-secim-gizli").style.display = "none";
        document.getElementById("ulke-secim-acik").style=" display:block; height:300px;";
    } else {
        document.getElementById("servis_card_" + cardNumber).style.pointerEvents = "auto";
        document.getElementById("servis_card_bilgi_" + cardNumber).style.display = "block";
        document.getElementById("servis_card_iptal_" + cardNumber).style.display = "none";

        // Diğer kartları göster
        for (var i = 1; i <= 8; i++) {
            document.getElementById("servis_card_" + i).style.display = "block";
        }
    }
}



function ulke_expose(ulke_cardNumber) {
    var check = document.getElementById("ulke_check_" + ulke_cardNumber);
	
    if (check.checked) {
        document.getElementById("ulke_card_" + ulke_cardNumber).style.pointerEvents = "none";
        document.getElementById("ulke_card_iptal_" + ulke_cardNumber).style.display = "block";
        document.getElementById("operator-secim-gizli").style.display = "none";
        document.getElementById("operator-secim-acik").style.display = "block";
		document.getElementById("ulke-secim-acik").style=" display:block; height:50px; overflow-y:hidden";
		document.getElementById("secim_form_2").style=" display:none";
		document.getElementById("secim_form_3").style=" display:block";
		
		
        // Diğer kartları gizle
        for (var i = 1; i <= 8; i++) {
            if (i !== ulke_cardNumber) {
                document.getElementById("ulke_card_" + i).style.display = "none";
            }
        }

        // Operatör seçim kutusunu aktif hale getir
        document.getElementById("operator-secim-acik").classList.remove("disabled");
    } else {
        // Diğer kartları göster
        for (var i = 1; i <= 8; i++) {
            document.getElementById("ulke_card_" + i).style.display = "block";
        }

        // Eğer hiçbir ülke seçili değilse operatör seçim kutusunu kilitle
        if (!document.querySelector(".ulke-secim-card-kutu input[type='checkbox']:checked")) {
            document.getElementById("operator-secim-acik").classList.add("disabled");
        }
    }
}



function operator_expose(operator_cardNumber) {
    var check = document.getElementById("operator_check_" + operator_cardNumber);

    if (check.checked) {
        document.getElementById("operator_card_" + operator_cardNumber).style.pointerEvents = "none";
        document.getElementById("operator_card_iptal_" + operator_cardNumber).style.display = "block";
		document.getElementById("operator_card_bilgi_" + operator_cardNumber).style.display = "none";
		document.getElementById("operator-secim-acik").style=" display:block; height:50px; overflow-y:hidden";
		document.getElementById("secim_form_3").style=" display:none";
        
        // Diğer kartları gizle
        for (var i = 1; i <= 8; i++) {
            if (i !== operator_cardNumber) {
                document.getElementById("operator_card_" + i).style.display = "none";}}
				
		
    } else {
        // Diğer kartları göster
        for (var i = 1; i <= 8; i++) {
            document.getElementById("operator_card_" + i).style.display = "block";
        }
    }
}



function servis_card_iptal(servis_cardNumber) {
    document.getElementById("servis_check_" + servis_cardNumber).checked = false;
    document.getElementById("servis_card_" + servis_cardNumber).style.pointerEvents = "auto";
    document.getElementById("servis_card_iptal_" + servis_cardNumber).style.display = "none";
	document.getElementById("ulke-secim-gizli").style.display="block";
	document.getElementById("ulke-secim-acik").style.display="none";
	document.getElementById("operator-secim-gizli").style.display="block";
	document.getElementById("operator-secim-acik").style.display="none";
		document.getElementById("secim_form_1").style=" display:block";
	document.getElementById("secim_form_2").style=" display:none";
	document.getElementById("secim_form_3").style=" display:none";
	document.getElementById("servis-secim").style=""

    // Diğer kartları göster
    for (var i = 1; i <= 8; i++) {
        document.getElementById("servis_card_" + i).style.display = "block";
    }

    // Eğer hiçbir ülke seçili değilse operatör seçim kutusunu kilitle
    if (!document.querySelector(".ulke-secim-card-kutu input[type='checkbox']:checked")) {
        document.getElementById("operator-secim-acik").classList.add("disabled");
    }
}






function ulke_card_iptal(ulke_cardNumber) {
    document.getElementById("ulke_check_" + ulke_cardNumber).checked = false;
    document.getElementById("ulke_card_" + ulke_cardNumber).style.pointerEvents = "auto";
    document.getElementById("ulke_card_iptal_" + ulke_cardNumber).style.display = "none";
	document.getElementById("operator-secim-gizli").style.display="block";
	document.getElementById("operator-secim-acik").style.display="none";
	document.getElementById("ulke-secim-acik").style=" display:block; height:300px;";
	document.getElementById("secim_form_1").style=" display:none";
	document.getElementById("secim_form_2").style=" display:block";
	document.getElementById("secim_form_3").style=" display:none";

    // Diğer kartları göster
    for (var i = 1; i <= 8; i++) {
        document.getElementById("ulke_card_" + i).style.display = "block";
    }
}



function operator_card_iptal(operator_cardNumber) {
    document.getElementById("operator_check_" + operator_cardNumber).checked = false;
    document.getElementById("operator_card_" + operator_cardNumber).style.pointerEvents = "auto";
    document.getElementById("operator_card_iptal_" + operator_cardNumber).style.display = "none";
	document.getElementById("operator_card_bilgi_" + operator_cardNumber).style.display = "block";
	document.getElementById("operator-secim-acik").style=" display:block; height:300px;";
		document.getElementById("secim_form_1").style=" display:none";
	document.getElementById("secim_form_2").style=" display:none";
	document.getElementById("secim_form_3").style=" display:block";
    // Diğer kartları göster
    for (var i = 1; i <= 8; i++) {
        document.getElementById("operator_card_" + i).style.display = "block";
    }
}











// TAB 2 KISMI




function servis_expose_tab2(cardNumber) {
    var check = document.getElementById("servis_check_tab2_" + cardNumber);
    
    if (check.checked) {
        document.getElementById("servis_card_tab2_" + cardNumber).style.pointerEvents = "none";
        document.getElementById("servis_card_bilgi_tab2_" + cardNumber).style.display = "none";
        document.getElementById("servis_card_iptal_tab2_" + cardNumber).style.display = "block";
		document.getElementById("servis-secim-tab2").style=" height:50px !important; overflow-y:hidden ";
		document.getElementById("secim_form_tab2_1").style=" display:none";
		document.getElementById("secim_form_tab2_2").style=" display:block";
		
		

        // Diğer kartları gizle
        for (var i = 1; i <= 8; i++) {
            if (i !== cardNumber) {
                document.getElementById("servis_card_tab2_" + i).style.display = "none";
            }
        }

        document.getElementById("ulke-secim-gizli-tab2").style.display = "none";
        document.getElementById("ulke-secim-acik-tab2").style=" display:block; height:300px;";
    } else {
        document.getElementById("servis_card_tab2_" + cardNumber).style.pointerEvents = "auto";
        document.getElementById("servis_card_bilgi_tab2_" + cardNumber).style.display = "block";
        document.getElementById("servis_card_iptal_tab2_" + cardNumber).style.display = "none";

        // Diğer kartları göster
        for (var i = 1; i <= 8; i++) {
            document.getElementById("servis_card_tab2_" + i).style.display = "block";
        }
    }
}



function ulke_expose_tab2(ulke_cardNumber) {
    var check = document.getElementById("ulke_check_tab2_" + ulke_cardNumber);
	
    if (check.checked) {
        document.getElementById("ulke_card_tab2_" + ulke_cardNumber).style.pointerEvents = "none";
        document.getElementById("ulke_card_iptal_tab2_" + ulke_cardNumber).style.display = "block";
        document.getElementById("operator-secim-gizli-tab2").style.display = "none";
        document.getElementById("operator-secim-acik-tab2").style.display = "block";
		document.getElementById("ulke-secim-acik-tab2").style=" display:block; height:50px; overflow-y:hidden";
		document.getElementById("secim_form_tab2_2").style=" display:none";
		document.getElementById("secim_form_tab2_3").style=" display:block";
		
		
        // Diğer kartları gizle
        for (var i = 1; i <= 8; i++) {
            if (i !== ulke_cardNumber) {
                document.getElementById("ulke_card_tab2_" + i).style.display = "none";
            }
        }

        // Operatör seçim kutusunu aktif hale getir
        document.getElementById("operator-secim-acik-tab2").classList.remove("disabled");
    } else {
        // Diğer kartları göster
        for (var i = 1; i <= 8; i++) {
            document.getElementById("ulke_card_tab2_" + i).style.display = "block";
        }

        // Eğer hiçbir ülke seçili değilse operatör seçim kutusunu kilitle
        if (!document.querySelector(".ulke-secim-card-kutu-tab2 input[type='checkbox']:checked")) {
            document.getElementById("operator-secim-acik-tab2").classList.add("disabled");
        }
    }
}



function operator_expose_tab2(operator_cardNumber) {
    var check = document.getElementById("operator_check_tab2_" + operator_cardNumber);

    if (check.checked) {
        document.getElementById("operator_card_tab2_" + operator_cardNumber).style.pointerEvents = "none";
        document.getElementById("operator_card_iptal_tab2_" + operator_cardNumber).style.display = "block";
		document.getElementById("operator_card_bilgi_tab2_" + operator_cardNumber).style.display = "none";
		document.getElementById("operator-secim-acik-tab2").style=" display:block; height:50px; overflow-y:hidden";
		document.getElementById("secim_form_tab2_3").style=" display:none";
        
        // Diğer kartları gizle
        for (var i = 1; i <= 8; i++) {
            if (i !== operator_cardNumber) {
                document.getElementById("operator_card_tab2_" + i).style.display = "none";}}
				
		
    } else {
        // Diğer kartları göster
        for (var i = 1; i <= 8; i++) {
            document.getElementById("operator_card_tab2_" + i).style.display = "block";
        }
    }
}



function servis_card_iptal_tab2(servis_cardNumber) {
    document.getElementById("servis_check_tab2_" + servis_cardNumber).checked = false;
    document.getElementById("servis_card_tab2_" + servis_cardNumber).style.pointerEvents = "auto";
    document.getElementById("servis_card_iptal_tab2_" + servis_cardNumber).style.display = "none";
	document.getElementById("ulke-secim-gizli-tab2").style.display="block";
	document.getElementById("ulke-secim-acik-tab2").style.display="none";
	document.getElementById("operator-secim-gizli-tab2").style.display="block";
	document.getElementById("operator-secim-acik-tab2").style.display="none";
		document.getElementById("secim_form_tab2_1").style=" display:block";
	document.getElementById("secim_form_tab2_2").style=" display:none";
	document.getElementById("secim_form_tab2_3").style=" display:none";
	document.getElementById("servis-secim-tab2").style=""

    // Diğer kartları göster
    for (var i = 1; i <= 8; i++) {
        document.getElementById("servis_card_tab2_" + i).style.display = "block";
    }

    // Eğer hiçbir ülke seçili değilse operatör seçim kutusunu kilitle
    if (!document.querySelector(".ulke-secim-card-kutu-tab2 input[type='checkbox']:checked")) {
        document.getElementById("operator-secim-acik-tab2").classList.add("disabled");
    }
}






function ulke_card_iptal_tab2(ulke_cardNumber) {
    document.getElementById("ulke_check_tab2_" + ulke_cardNumber).checked = false;
    document.getElementById("ulke_card_tab2_" + ulke_cardNumber).style.pointerEvents = "auto";
    document.getElementById("ulke_card_iptal_tab2_" + ulke_cardNumber).style.display = "none";
	document.getElementById("operator-secim-gizli-tab2").style.display="block";
	document.getElementById("operator-secim-acik-tab2").style.display="none";
	document.getElementById("ulke-secim-acik-tab2").style=" display:block; height:300px;";
	document.getElementById("secim_form_tab2_1").style=" display:none";
	document.getElementById("secim_form_tab2_2").style=" display:block";
	document.getElementById("secim_form_tab2_3").style=" display:none";

    // Diğer kartları göster
    for (var i = 1; i <= 8; i++) {
        document.getElementById("ulke_card_tab2_" + i).style.display = "block";
    }
}



function operator_card_iptal_tab2(operator_cardNumber) {
    document.getElementById("operator_check_tab2_" + operator_cardNumber).checked = false;
    document.getElementById("operator_card_tab2_" + operator_cardNumber).style.pointerEvents = "auto";
    document.getElementById("operator_card_iptal_tab2_" + operator_cardNumber).style.display = "none";
	document.getElementById("operator_card_bilgi_tab2_" + operator_cardNumber).style.display = "block";
	document.getElementById("operator-secim-acik-tab2").style=" display:block; height:300px;";
		document.getElementById("secim_form_tab2_1").style=" display:none";
	document.getElementById("secim_form_tab2_2").style=" display:none";
	document.getElementById("secim_form_tab2_3").style=" display:block";
    // Diğer kartları göster
    for (var i = 1; i <= 8; i++) {
        document.getElementById("operator_card_tab2_" + i).style.display = "block";
    }
}