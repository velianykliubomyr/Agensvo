const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ua", "en"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "ua";
let currentTexts = {};

const homeTexts = {
	"about_us": {
		ua: "Про нас",
		en: "About us",
	},
	"about_uss": {
		ua: "Про нас",
		en: "About us",
	},
	"about_usss": {
		ua: "Про нас",
		en: "About us",
	},
	"Home": {
		ua: "Головна",
		en: "Home",
	},
	"Homee": {
		ua: "Головна",
		en: "Home",
	},
	"OUR_SERVICES": {
		ua: "Ми докладаємо всі зусилля аби наш був преміум-якості",
		en: "We make every effort to ensure that ours is of premium quality",
	},
	"OUR_Text": {
		ua: "Наш сервіс",
		en: "OUR SERVICES",
	},
	"Full": {
		ua: "Повністю мебльована",
		en: "Full Furnished",
	},
	"Fulll": {
		ua: "Повністю мебльована",
		en: "Full Furnished",
	},
	"Fullll": {
		ua: "Повністю мебльована",
		en: "Full Furnished",
	},
	"Readd": {
		ua: "Детальніше",
		en: "Read",
	},
	"Gallery": {
		ua: "Галарея",
		en: "Gallery",
	},
	"Propertiess": {
		ua: "Властивості",
		en: "Properties",
	},
	"Propertiesss": {
		ua: "Властивості",
		en: "Properties",
	},
	"Homeeee": {
		ua: "Головна",
		en: "Home",
	},
	"Homeeeee": {
		ua: "Головна",
		en: "Home",
	},
	"Property_Gallery": {
		ua: "Галерея власності",
		en: "Property Gallery",
	},
	"Property_Text": {
		ua: "Галерея квартир придбаними щасливими клієнтами",
		en: "Gallery of apartments purchased by happy customers",
	},
	"Galleryyy": {
		ua: "Галарея",
		en: "Gallery",
	},
	"Readd": {
		ua: "Детальніше",
		en: "Read",
	},
	"Readdd": {
		ua: "Детальніше",
		en: "Read",
	},
	"Homeee": {
		ua: "Головна",
		en: "Home",
	},
	"Service": {
		ua: "Сервіси",
		en: "Service",
	},
	"Servicee	": {
		ua: "Сервіси",
		en: "Service",
	},
	"Serviceee": {
		ua: "Сервіси",
		en: "Service",
	},
	"Gallery": {
		ua: "Галарея",
		en: "Gallery",
	},
	"Properties": {
		ua: "Властивості",
		en: "Properties",
	},
	"All": {
		ua: "Усі чудові деталі нерухомості",
		en: "All Awesome Property Details",
	},
	"Contactt": {
		ua: "Контакти",
		en: "Contact",
	},
	"Contacttt": {
		ua: "Контакти",
		en: "Contact",
	},
	"Phone": {
		ua: "Телефон",
		en: "Phone",
	},
	"Address": {
		ua: "Адреса",
		en: "Address",
	},
	"Get_Appointmentt": {
		ua: "Записатись на прийом",
		en: "Get Appointment",
	},
	"Feedback": {
		ua: "Твій відгук",
		en: "Your Feedback",
	},
	"Request_for_Contact": {
		ua: "Дозвольте нам надати вам більше інформації про веб-сайт спеціальної пропозиції, який ви хочете отримати. Будь ласка, заповніть форму нижче. <br>У нас є мільйони власників сайтів, які раді працювати з нами!",
		en: "Let us give you more details about the special offer website you want us. Please fill out the form below. <br> We have million of website owners who happy to work with us!",
	},
	"Request_for_Text": {
		ua: "Запит на контакт",
		en: "Request for Contact",
	},
	"nine": {
		ua: "9 місяців потому",
		en: "9 months ago",
	},
	"ninee": {
		ua: "9 місяців потому",
		en: "9 months ago",
	},
	"nineee": {
		ua: "9 місяців потому",
		en: "9 months ago",
	},
	"Popular": {
		ua: "Популярне",
		en: "Popular",
	},
	"Popularr": {
		ua: "Популярне",
		en: "Popular",
	},
	"Popularrr": {
		ua: "Популярне",
		en: "Popular",
	},
	"Spacious": {
		ua: "Просторий і великий сад",
		en: "Spacious and Large Garden",
	},
	"Spaciouss": {
		ua: "Просторі апартаменти",
		en: "Spacious appartaments",
	},
	"Spaciousss": {
		ua: "Просторий і великий сад",
		en: "Spacious and Large Garden",
	},
	"Property": {
		ua: "Деталі придбання",
		en: "Property Details",
	},
	"Property_d": {
		ua: "Усе про придбання",
		en: "All about acquisition",
	},

	"Contact": {
		ua: "Контакт",
		en: "Contact",
	},
	"QUICK_APPOINTMENT": {
		ua: "ШВИДКЕ ПРИЗНАЧЕННЯ",
		en: "QUICK APPOINTMENT",
	},
	"Get_an_Appointment": {
		ua: "Запишіться на прийом",
		en: "Get an Appointment",
	},
	"Sell_Your": {
		ua: "Продайте своє майно з CITY Real Estate",
		en: "Sell Your Property with CITY Real Estate",
	},
	"With_CITY": {
		ua: "Контакт",
		en: "Contact",
	},
	"With_CITY": {
		ua: "За допомогою адаптивного шаблону цільової сторінки CITY Real Estate ви можете рекламувати всі свої проекти з нерухомості та нерухомості.",
		en: "With CITY Real Estate responsive landing page template, you can promote your all property & real estate projects.",
	},
	"View_Gallery": {
		ua: "Переглянути галерею",
		en: "View Gallery",
	},
	"Full_Furnished": {
		ua: "Повністю мебльована",
		en: "Full Furnished",
	},
	"Awards": {
		ua: "Компанія з нерухомості, відзначена нагородами",
		en: "Awards Winning Real Estate Company",
	},
	"Welcome": {
		ua: "Ласкаво просимо до CITY Real Estate",
		en: "Welcome to CITY Real Estate",
	},
	"Welcome_to_CITY": {
		ua: "Ласкаво просимо до CITY Real Estate, вашої брами до виняткової",
		en: "Welcome to CITY Real Estate, your gateway to exceptional properties",
	},
	"Our": {
		ua: "Наше прагнення до досконалості в поєднанні з пристрастю до спілкування людей із ними",
		en: "Our commitment to excellence, paired with a passion for connecting people with their",
	},
	"Welcome": {
		ua: "Ласкаво просимо до CITY Real Estate",
		en: "Welcome to CITY Real Estate",
	},
	"Read": {
		ua: "Детальніше",
		en: "Read More",
	},
	"Agent": {
		ua: "Відомості про агента",
		en: "Agent Details",
	},
	"Quisque": {
		ua: "Чесні відгуки від наших щасливих клієнтів",
		en: "Honest reviews from our happy customers",
	},
	"Agentt": {
		ua: "Агент",
		en: "The Agent",
	},
	"Jenny": {
		ua: "Дженні Мартінес",
		en: "Jenny Martines",
	},
	"Agentt": {
		ua: "Агент",
		en: "The Agent",
	},
	"Contact_Me": {
		ua: "Контакт зі мною",
		en: "Contact Me",
	},
	"Happy_Customers": {
		ua: "Щасливі клієнти",
		en: "Happy Customers",
	},
	"Happy_text": {
		ua: "Любимо своїх клієнтів, як вони нас!",
		en: "We love our clients as much as they love us!",
	},

	"They": {
		ua: "Вони отримали мій проект вчасно на конкурсі",
		en: "They have got my project on time with the competition with",
	},
	"Contact_Me": {
		ua: "Контакт зі мною",
		en: "Contact Me",
	},



};
const anotherTexts = {
	"another_page-title": {
		ua: "Другая страница",
		en: "Another page",
	},
	"another_page-1": {
		ua: "Первый параграф",
		en: "First paragraph on another page",
	},
	"another_page-2": {
		ua: "Второй параграф",
		en: "Second paragraph on another page",
	},
	"another_page-3": {
		ua: "Третий параграф",
		en: "Third paragraph on another page",
	},
	"another_page-4": {
		ua: "Домашняя страница",
		en: "Homepage",
	},
};

// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
			break;
		case "/another_page.html":
			currentTexts = anotherTexts;
			break;

		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
		case "ua":
			document
				.querySelector('[data-btn="ua"]')
				.classList.add("header__btn_active");
			break;
		case "en":
			document
				.querySelector('[data-btn="ua"]')
				.classList.add("header__btn_active");
			break;


		default:
			document
				.querySelector('[data-btn="ua"]')
				.classList.add("header__btn_active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());
