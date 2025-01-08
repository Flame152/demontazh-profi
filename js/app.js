(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
	 // класс для закоговка в квизе
    const btnNext = document.getElementById("btn-next");
    const titleAll = document.getElementById("title-quiz");
    btnNext.addEventListener("click", (function() {
        titleAll.classList.add("quiz-active");
    }));
	 // блок контакты в квизе меняем placeholder
    const phone = document.getElementById("phone");
    const whatapp = document.getElementById("whatapp");
    const tg = document.getElementById("tg");
    const input = document.getElementById("contact-form");
    phone.onclick = function() {
        input.placeholder = "Введите Ваш телефон";
    };
    whatapp.onclick = function() {
        input.placeholder = "Введите Ваш WhatsApp";
    };
    tg.onclick = function() {
        input.placeholder = "Введите Ваш Telegram";
    };
	 //popup
    const popups = document.querySelectorAll(".popup");
    const popupButton = document.querySelectorAll(".header__social, .header__tel-text");
    const body = document.body;
    const popupWrapper = document.querySelectorAll(".popup__wrapper");
    const fixBlock = document.querySelectorAll(".fix-block");
    let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
    let marginOffset = document.body.offsetWidth - window.innerWidth + "px";
    function openPopup(elem) {
        elem.classList.add("popup-open");
        body.classList.add("lock");
        document.body.style.paddingRight = paddingOffset;
        fixBlock.forEach((el => {
            el.style.paddingRight = paddingOffset;
        }));
        popupWrapper.forEach((el => {
            el.style.marginLeft = marginOffset;
        }));
    }
    function closePopup(e) {
        if (e.target.classList.contains("popup__close") || e.target.closest(".popup__close") || e.target.classList.contains("popup__wrapper")) {
            e.target.closest(".popup").classList.remove("popup-open");
            body.classList.remove("lock");
            document.body.style.paddingRight = "0px";
            fixBlock.forEach((el => {
                el.style.paddingRight = "0px";
            }));
            popupWrapper.forEach((el => {
                el.style.marginLeft = "auto";
            }));
        }
    }
    popupButton.forEach((btn => {
        btn.addEventListener("click", (e => {
            let data = e.target.dataset.popupOpen;
            popups.forEach((popup => {
                if (popup.dataset.popup == data || popup.dataset.popup == e.target.closest(".header__social, .header__tel-text").dataset.popupOpen) openPopup(popup);
            }));
        }));
    }));
    popups.forEach((popup => {
        popup.addEventListener("click", (e => closePopup(e)));
    }));
	 //Слайдер
    function initSliders() {
        if (document.querySelector(".quiz__slider")) new Swiper(".quiz__slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            speed: 1100,
            allowTouchMove: false,
            navigation: {
                prevEl: ".quiz-button-prev",
                nextEl: ".quiz-button-next"
            }
        });
    }
    window.addEventListener("load", (function(e) {
        initSliders();
    }));
	//portfolio
    document.addEventListener("DOMContentLoaded", (() => {
        const hardestMainSlider = document.querySelector(".hardest-slider");
        const hardestMainImage = hardestMainSlider.querySelector("img");
        const hardestPrevBtn = document.querySelector(".hardest-prev-btn");
        const hardestNextBtn = document.querySelector(".hardest-next-btn");
        const hardestThumbnails = document.querySelectorAll(".hardest-thumbnail");
        const hardestDescription = document.querySelector(".hardest-description");
        const hardestSliderData = [ {
            mainImage: "./img/hardest/1/image(1).jpg",
            thumbnails: [ "img/hardest/1/Rectangle99.jpg", "img/hardest/1/Rectangle100.jpg", "img/hardest/1/Rectangle101.jpg" ]
        }, {
            mainImage: "./img/hardest/2/image(4).jpg",
            thumbnails: [ "img/hardest/2/Rectangle202.jpg", "img/hardest/2/Rectangle203.jpg", "img/hardest/2/Rectangle204.jpg", "img/hardest/2/Rectangle205.jpg" ]
        }, {
            mainImage: "./img/hardest/3/image(8).jpg",
            thumbnails: [ "img/hardest/3/Rectangle120.jpg", "img/hardest/3/Rectangle121.jpg", "img/hardest/3/Rectangle122.jpg", "img/hardest/3/Rectangle130.jpg", "img/hardest/3/Rectangle132.jpg", "img/hardest/3/Rectangle139.jpg", "img/hardest/3/Rectangle141.jpg", "img/hardest/3/Rectangle143.jpg", "img/hardest/3/Rectangle140.jpg", "img/hardest/3/Rectangle156.jpg", "img/hardest/3/Rectangle159.jpg", "img/hardest/3/Rectangle160.jpg", "img/hardest/3/Rectangle161.jpg", "img/hardest/3/Rectangle162.jpg", "img/hardest/3/Rectangle164.jpg" ]
        }, {
            mainImage: "./img/hardest/4/image(14).jpg",
            thumbnails: [ "img/hardest/4/Rectangle109.jpg" ]
        }, {
            mainImage: "./img/hardest/5/image(10).jpg",
            thumbnails: [ "img/hardest/5/Rectangle74.jpg", "img/hardest/5/Rectangle75.jpg", "img/hardest/5/Rectangle78.jpg", "img/hardest/5/Rectangle81.jpg" ]
        }, {
            mainImage: "./img/hardest/6/image(11).jpg",
            thumbnails: [ "img/hardest/6/Rectangle90.jpg", "img/hardest/6/Rectangle93.jpg", "img/hardest/6/Rectangle96.jpg" ]
        }, {
            mainImage: "./img/hardest/7/image(15).jpg",
            thumbnails: [ "img/hardest/7/Rectangle113.jpg", "img/hardest/7/Rectangle114.jpg" ]
        }, {
            mainImage: "./img/hardest/8/image(13).jpg",
            thumbnails: [ "img/hardest/8/Rectangle177.jpg", "img/hardest/8/Rectangle178.jpg", "img/hardest/8/Rectangle179.jpg", "img/hardest/8/Rectangle180.jpg", "img/hardest/8/Rectangle181.jpg", "img/hardest/8/Rectangle182.jpg", "img/hardest/8/Rectangle183.jpg", "img/hardest/8/Rectangle184.jpg" ]
        }, {
            mainImage: "./img/hardest/9/image(14).jpg",
            thumbnails: [ "img/hardest/9/Rectangle215.jpg", "img/hardest/9/Rectangle216.jpg", "img/hardest/9/Rectangle217.jpg" ]
        }, {
            mainImage: "./img/hardest/10/image(15).jpg",
            thumbnails: [ "img/hardest/10/Rectangle225.jpg", "img/hardest/10/Rectangle226.jpg", "img/hardest/10/Rectangle227.jpg", "img/hardest/10/Rectangle228.jpg" ]
        } ];
        const hardestSliderDataMobile = [ {
            mainImage: "./img/hardest/1/image(1).jpg",
            thumbnails: [ "img/hardest/mobile/1/Mask group(2).jpg", "img/hardest/mobile/1/Mask group(3).jpg", "img/hardest/mobile/1/Mask group(4).jpg", "img/hardest/mobile/1/Mask group(5).jpg" ],
            description: "Тут можно придумать название объекта. Демонтаж металлоконструкций и напольного покрытия (плитка, стяжка) на объекте в городе Мытищи"
        }, {
            mainImage: "./img/hardest/2/image(4).jpg",
            thumbnails: [ "img/hardest/mobile/2/image(16).jpg", "img/hardest/mobile/2/image(17).jpg", "img/hardest/mobile/2/image(18).jpg" ],
            description: "Центральный офис компании “Евроцемент” на Сухаревской. Демонтаж сейфовых комнат. Работа выполнена за два дня без отрыва от производства (работали в выходные дни) ни одной плитки не пострадало."
        }, {
            mainImage: "./img/hardest/3/image(8).jpg",
            thumbnails: [ "img/hardest/mobile/3/image(19).jpg", "img/hardest/mobile/3/image(20).jpg", "img/hardest/mobile/3/image(21).jpg" ],
            description: "Объект культурного наследия. Демонтаж аварийного особняка на Арбате с сохранением фасадной стены в староконюшенном переулке напротив посольства Австрии. Срок реализации 10 дней, задействовано более 30 сотрудников."
        }, {
            mainImage: "./img/hardest/4/image(14).jpg",
            thumbnails: [ "img/hardest/mobile/4/image(22).jpg" ],
            description: "Объект культурного наследия. Демонтаж аварийного особняка на Арбате с сохранением фасадной стены в староконюшенном переулке напротив посольства Австрии. Срок реализации 10 дней, задействовано более 30 сотрудников."
        }, {
            mainImage: "./img/hardest/5/image(10).jpg",
            thumbnails: [ "img/hardest/mobile/5/image(23).jpg", "img/hardest/mobile/5/Maskgroup(6).jpg" ],
            description: "Объект культурного наследия. Демонтаж аварийного особняка на Арбате с сохранением фасадной стены в староконюшенном переулке напротив посольства Австрии. Срок реализации 10 дней, задействовано более 30 сотрудников."
        }, {
            mainImage: "./img/hardest/6/image(11).jpg",
            thumbnails: [ "img/hardest/mobile/6/image(24).jpg", "img/hardest/mobile/6/image(25).jpg", "img/hardest/mobile/6/image(26).jpg", "img/hardest/mobile/6/image(27).jpg", "img/hardest/mobile/6/image(28).jpg", "img/hardest/mobile/6/image(29).jpg", "img/hardest/mobile/6/image(30).jpg", "img/hardest/mobile/6/Maskgroup(7).jpg", "img/hardest/mobile/6/image(31).jpg", "img/hardest/mobile/6/image(32).jpg", "img/hardest/mobile/6/image(33).jpg", "img/hardest/mobile/6/image(34).jpg", "img/hardest/mobile/6/image(35).jpg", "img/hardest/mobile/6/image(36).jpg", "img/hardest/mobile/6/image(37).jpg", "img/hardest/mobile/6/image(38).jpg" ],
            description: "ФМБА Медицина катастроф. Демонтаж корпусов 1, 2, 5 строений общей площадью более 100.000м2"
        }, {
            mainImage: "./img/hardest/7/image(15).jpg",
            thumbnails: [ "img/hardest/mobile/7/image(39).jpg", "img/hardest/mobile/7/image(40).jpg", "img/hardest/mobile/7/image(41).jpg", "img/hardest/mobile/7/image(42).jpg", "img/hardest/mobile/7/image(43).jpg", "img/hardest/mobile/7/image(44).jpg", "img/hardest/mobile/7/image(45).jpg", "img/hardest/mobile/7/Maskgroup(8).jpg" ],
            description: "Психиатрическая больница на Варшавке. Демонтаж крыльца"
        }, {
            mainImage: "./img/hardest/8/image(13).jpg",
            thumbnails: [ "img/hardest/mobile/8/image(46).jpg", "img/hardest/mobile/8/image(47).jpg", "img/hardest/mobile/8/image(48).jpg", "img/hardest/mobile/8/Maskgroup(9).jpg" ],
            description: "Коттеджный поселок в деревне Жуковка. Алмазная резка, усиление проемов. В монолите, в кирпиче, в бетоне."
        }, {
            mainImage: "./img/hardest/9/image(14).jpg",
            thumbnails: [ "img/hardest/mobile/9/image(49).jpg", "img/hardest/mobile/9/image(50).jpg", "img/hardest/mobile/9/Maskgroup(10).jpg" ],
            description: "Погрузка и вывоз строительного мусора."
        }, {
            mainImage: "./img/hardest/10/image(15).jpg",
            thumbnails: [ "img/hardest/mobile/10/image(51).jpg", "img/hardest/mobile/10/image(52).jpg", "img/hardest/mobile/10/image(53).jpg", "img/hardest/mobile/10/image(54).jpg" ],
            description: "ФМБА Медицина катастроф. Демонтаж и монтаж кровельного полотна общей площадью 5.000м2"
        } ];
        const getCurrentSliderData = () => window.innerWidth <= 768 ? hardestSliderDataMobile : hardestSliderData;
        let hardestCurrentSliderIndex = 0;
        let hardestCurrentImageIndex = 0;
        function updateHardestSlider(index) {
            const sliderData = getCurrentSliderData();
            const slider = sliderData[index];
            hardestMainImage.src = slider.thumbnails[0];
            hardestCurrentImageIndex = 0;
            if (window.innerWidth <= 768) {
                hardestDescription.textContent = slider.description;
                hardestDescription.style.display = "flex";
            } else hardestDescription.style.display = "none";
            hardestThumbnails.forEach(((thumb, i) => {
                thumb.querySelector("img").src = sliderData[i].mainImage;
                thumb.classList.toggle("active", i === index);
            }));
        }
        hardestThumbnails.forEach(((thumb, index) => {
            thumb.addEventListener("click", (() => {
                const sliderData = getCurrentSliderData();
                hardestThumbnails.forEach((t => t.classList.remove("active")));
                thumb.classList.add("active");
                hardestCurrentSliderIndex = index;
                hardestCurrentImageIndex = 0;
                const currentSlider = sliderData[hardestCurrentSliderIndex];
                hardestMainImage.src = currentSlider.thumbnails[hardestCurrentImageIndex];
                if (window.innerWidth <= 768) hardestDescription.textContent = currentSlider.description;
            }));
        }));
        hardestThumbnails.forEach(((thumb, index) => {
            thumb.addEventListener("click", (() => {
                const sliderData = getCurrentSliderData();
                hardestThumbnails.forEach((t => t.classList.remove("active")));
                thumb.classList.add("active");
                hardestCurrentSliderIndex = index;
                hardestCurrentImageIndex = 0;
                const currentSlider = sliderData[hardestCurrentSliderIndex];
                hardestMainImage.src = currentSlider.thumbnails[hardestCurrentImageIndex];
                if (window.innerWidth <= 768) hardestDescription.textContent = currentSlider.description;
            }));
        }));
        hardestPrevBtn.addEventListener("click", (() => {
            const sliderData = getCurrentSliderData();
            const currentSlider = sliderData[hardestCurrentSliderIndex];
            if (hardestCurrentImageIndex === 0) {
                hardestCurrentSliderIndex = (hardestCurrentSliderIndex - 1 + sliderData.length) % sliderData.length;
                const newSlider = sliderData[hardestCurrentSliderIndex];
                hardestCurrentImageIndex = newSlider.thumbnails.length - 1;
                hardestMainImage.src = newSlider.thumbnails[hardestCurrentImageIndex];
                hardestThumbnails.forEach(((thumb, i) => {
                    thumb.classList.toggle("active", i === hardestCurrentSliderIndex);
                    thumb.querySelector("img").src = sliderData[i].mainImage;
                }));
                if (window.innerWidth <= 768) hardestDescription.textContent = newSlider.description;
            } else {
                hardestCurrentImageIndex--;
                hardestMainImage.src = currentSlider.thumbnails[hardestCurrentImageIndex];
            }
        }));
        hardestNextBtn.addEventListener("click", (() => {
            const sliderData = getCurrentSliderData();
            const currentSlider = sliderData[hardestCurrentSliderIndex];
            if (hardestCurrentImageIndex === currentSlider.thumbnails.length - 1) {
                hardestCurrentSliderIndex = (hardestCurrentSliderIndex + 1) % sliderData.length;
                const newSlider = sliderData[hardestCurrentSliderIndex];
                hardestCurrentImageIndex = 0;
                hardestMainImage.src = newSlider.thumbnails[hardestCurrentImageIndex];
                hardestThumbnails.forEach(((thumb, i) => {
                    thumb.classList.toggle("active", i === hardestCurrentSliderIndex);
                }));
                if (window.innerWidth <= 768) hardestDescription.textContent = newSlider.description;
            } else {
                hardestCurrentImageIndex++;
                hardestMainImage.src = currentSlider.thumbnails[hardestCurrentImageIndex];
            }
        }));
        window.addEventListener("resize", (() => {
            updateHardestSlider(hardestCurrentSliderIndex);
        }));
        updateHardestSlider(0);
    }));
    window["FLS"] = true;
    isWebp();
})();