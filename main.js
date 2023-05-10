const groups = {
    OPECcountries: {
        name: "OPEC countries",
        blurb: "The Organization of the Petroleum Exporting Countries (OPEC) is an intergovernmental organization comprising 13 oil-exporting nations. Established in 1960, its founding members were Iran, Iraq, Kuwait, Saudi Arabia, and Venezuela. Later, eight other countries joined: Algeria, Angola, the Republic of the Congo, Equatorial Guinea, Gabon, Libya, Nigeria, and the United Arab Emirates. OPEC's primary objective is to coordinate and unify petroleum policies among member countries to ensure stable oil prices, fair returns for producers, and a regular supply for consumers. The organization seeks to maintain market balance by adjusting member countries' oil production quotas based on factors such as supply and demand, global economic growth, and geopolitical developments. OPEC has significant influence over global oil prices, as its member countries collectively possess around 80% of the world's proven crude oil reserves and account for approximately 40% of global oil production. Through its actions, OPEC plays a crucial role in shaping the global energy landscape and affecting economies worldwide.",
        list: [
            "Algeria",
            "Angola",
            "Ecuador",
            "Iran",
            "Iraq",
            "Kuwait",
            "Libya",
            "Nigeria",
            "Saudi Arabia",
            "United Arab Emirates",
            "Venezuela",
        ],
    },
    beneluxCountries: {
        name: "Benelux countries",
        blurb: "Benelux is an economic and political union of three neighboring Western European countries: Belgium, the Netherlands, and Luxembourg. The name 'Benelux' is derived from the first letters of each country's name, creating a portmanteau. Established in 1944, it aimed to promote economic cooperation, political stability, and social progress among the member states. The formation of the Benelux Union was a precursor to the creation of the European Union (EU), as it served as an early model for regional integration in Europe. In fact, the Benelux countries played an instrumental role in the development of the EU, being among the six founding members of the European Coal and Steel Community in 1951, which later evolved into the European Economic Community (EEC) and subsequently the EU. Today, the Benelux Union continues to foster close cooperation among its members in various fields such as economic affairs, foreign policy, defense, and transportation. The union also encourages cross-border collaboration in environmental policy, energy, and the labor market. The member countries share common goals and values, and this regional collaboration contributes to the overall stability and prosperity of the region.",
        list: ["Belgium", "Netherlands", "Luxembourg"],
    },
    ASEANcountries: {
        name: "ASEAN Countries",
        blurb: "The Association of Southeast Asian Nations (ASEAN) is a regional organization of ten Southeast Asian countries, founded in 1967 to promote economic, political, and cultural cooperation among its members. The founding members are Indonesia, Malaysia, the Philippines, Singapore, and Thailand. Later, Brunei, Vietnam, Laos, Myanmar, and Cambodia joined, making up the current ten-member bloc. ASEAN's main objectives are to accelerate economic growth, social progress, and cultural development, as well as to promote peace and stability in the region. The organization encourages collaboration in various areas, such as trade, tourism, education, technology, and environmental protection. ASEAN has made significant strides in fostering economic integration, with the establishment of the ASEAN Free Trade Area (AFTA) and the ASEAN Economic Community (AEC), aimed at creating a single market and production base within the region. ASEAN plays a vital role in shaping regional policies and maintaining harmony among its diverse members, contributing to the overall stability and prosperity of Southeast Asia.",
        list: [
            "Brunei",
            "Cambodia",
            "Indonesia",
            "Laos",
            "Malaysia",
            "Myanmar",
            "Philippines",
            "Singapore",
            "Thailand",
            "Vietnam",
        ],
    },
    nordicCountries: {
        name: "Nordic Countries",
        blurb: "The Nordic countries are a group of five Northern European nations known for their shared cultural, historical, and linguistic ties, as well as their commitment to social welfare, equality, and democracy. The group comprises Denmark, Finland, Iceland, Norway, and Sweden, along with their autonomous territories such as Greenland, the Faroe Islands, and Åland Islands. These countries are renowned for their high living standards, comprehensive social safety nets, and strong education systems. Their social and economic models, often referred to as the 'Nordic Model,' emphasize a balance between free-market capitalism and extensive welfare provisions funded by high levels of taxation. The Nordic countries work together in various forums, such as the Nordic Council and the Nordic Council of Ministers, to promote cooperation and collaboration in areas like politics, economics, culture, and environmental policy. Despite their differences, they share a strong commitment to democracy, human rights, and environmental sustainability, which has earned them a reputation for being some of the most stable, prosperous, and socially progressive countries in the world.",
        list: ["Denmark", "Finland", "Iceland", "Norway", "Sweden"],
    },
    BRICScountries: {
        name: "BRICS Countries",
        blurb: "BRICS is an acronym representing five major emerging economies: Brazil, Russia, India, China, and South Africa. The term was coined by economist Jim O'Neill in 2001 to describe the growing economic and political influence of these countries in the global arena. The BRICS countries account for over 40% of the world's population and around 25% of global GDP, making them significant drivers of global economic growth. Initially an economic concept, BRICS evolved into a more formal cooperation with the first official summit in 2009. The group aims to promote economic growth, social development, and greater collaboration among its members, as well as to address shared global challenges such as climate change, poverty reduction, and international security. BRICS countries have established several joint initiatives, including the New Development Bank (NDB) and the Contingent Reserve Arrangement (CRA), to support infrastructure projects and provide financial stability. The group's increasing collaboration and combined influence challenge the traditional dominance of Western economies and institutions in the global economic and political landscape.",
        list: ["Brazil", "Russia", "India", "China", "South Africa"],
    },
    G7countries: {
        name: "G7 Countries",
        blurb: "The Group of Seven (G7) is an informal alliance of seven major advanced economies, consisting of Canada, France, Germany, Italy, Japan, the United Kingdom, and the United States. The European Union is also represented at G7 meetings. Originally formed in 1975 as the Group of Six (G6), Canada joined the following year, establishing the current G7. The G7 countries are among the world's largest and most influential economies, representing over 40% of global GDP and approximately 10% of the world's population. The G7 serves as a platform for discussing and addressing pressing global issues such as economic growth, international trade, financial regulation, climate change, and security. The group meets annually at the G7 Summit, where heads of state and government, along with key ministers and central bank governors, engage in dialogue and coordinate policies on matters of mutual concern. Although the G7 is an informal organization without a permanent secretariat or binding decisions, its policy recommendations and collaborative initiatives carry significant weight in shaping the global economic and political landscape.",
        list: [
            "Canada",
            "France",
            "Germany",
            "Italy",
            "Japan",
            "United Kingdom",
            "United States",
        ],
    },
    middleEastCountries: {
        name: "Middle East Countries",
        blurb: "The Middle East is a region in Western Asia and North Africa that consists of diverse countries with shared historical, cultural, and religious connections. The term 'Middle East' generally includes Bahrain, Cyprus, Egypt, Iran, Iraq, Israel, Jordan, Kuwait, Lebanon, Oman, Palestine, Qatar, Saudi Arabia, Syria, Turkey, United Arab Emirates, and Yemen. The region is strategically significant due to its vast oil reserves, geopolitical importance, and historical significance as the cradle of major civilizations and the birthplace of the world's three major monotheistic religions: Judaism, Christianity, and Islam.",
        list: [
            "Afghanistan",
            "Bahrain",
            "Cyprus",
            "Egypt",
            "Iran",
            "Iraq",
            "Israel",
            "Jordan",
            "Kuwait",
            "Lebanon",
            "Oman",
            "Palestine",
            "Qatar",
            "Saudi Arabia",
            "Syria",
            "Turkey",
            "United Arab Emirates",
            "Yemen",
        ],
    },
};

const countries = [
    { country: "Afghanistan", capital: "Kabul" },
    { country: "Albania", capital: "Tirana" },
    { country: "Algeria", capital: "Algiers" },
    { country: "Andorra", capital: "Andorra la Vella" },
    { country: "Angola", capital: "Luanda" },
    { country: "Antigua and Barbuda", capital: "St. John's" },
    { country: "Argentina", capital: "Buenos Aires" },
    { country: "Armenia", capital: "Yerevan" },
    { country: "Australia", capital: "Canberra" },
    { country: "Austria", capital: "Vienna" },
    { country: "Azerbaijan", capital: "Baku" },
    { country: "Bahamas", capital: "Nassau" },
    { country: "Bahrain", capital: "Manama" },
    { country: "Bangladesh", capital: "Dhaka" },
    { country: "Barbados", capital: "Bridgetown" },
    { country: "Belarus", capital: "Minsk" },
    { country: "Belgium", capital: "Brussels" },
    { country: "Belize", capital: "Belmopan" },
    { country: "Benin", capital: "Porto-Novo" },
    { country: "Bhutan", capital: "Thimphu" },
    { country: "Bolivia", capital: "La Paz (administrative)" },
    { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
    { country: "Botswana", capital: "Gaborone" },
    { country: "Brazil", capital: "Brasília" },
    { country: "Brunei", capital: "Bandar Seri Begawan" },
    { country: "Bulgaria", capital: "Sofia" },
    { country: "Burkina Faso", capital: "Ouagadougou" },
    { country: "Burundi", capital: "Gitega" },
    { country: "Cabo Verde", capital: "Praia" },
    { country: "Cambodia", capital: "Phnom Penh" },
    { country: "Cameroon", capital: "Yaoundé" },
    { country: "Canada", capital: "Ottawa" },
    { country: "Central African Republic", capital: "Bangui" },
    { country: "Chad", capital: "N'Djamena" },
    { country: "Chile", capital: "Santiago" },
    { country: "China", capital: "Beijing" },
    { country: "Colombia", capital: "Bogotá" },
    { country: "Comoros", capital: "Moroni" },
    { country: "Congo, Democratic Republic of the", capital: "Kinshasa" },
    { country: "Congo, Republic of the", capital: "Brazzaville" },
    { country: "Costa Rica", capital: "San José" },
    { country: "Côte d'Ivoire", capital: "Yamoussoukro" },
    { country: "Croatia", capital: "Zagreb" },
    { country: "Cuba", capital: "Havana" },
    { country: "Cyprus", capital: "Nicosia" },
    { country: "Czech Republic", capital: "Prague" },
    { country: "Denmark", capital: "Copenhagen" },
    { country: "Djibouti", capital: "Djibouti" },
    { country: "Dominica", capital: "Roseau" },
    { country: "Dominican Republic", capital: "Santo Domingo" },
    { country: "Ecuador", capital: "Quito" },
    { country: "Egypt", capital: "Cairo" },
    { country: "El Salvador", capital: "San Salvador" },
    { country: "Equatorial Guinea", capital: "Malabo" },
    { country: "Eritrea", capital: "Asmara" },
    { country: "Estonia", capital: "Tallinn" },
    { country: "Eswatini", capital: "Lobamba" },
    { country: "Ethiopia", capital: "Addis Ababa" },
    { country: "Fiji", capital: "Suva" },
    { country: "Finland", capital: "Helsinki" },
    { country: "France", capital: "Paris" },
    { country: "Gabon", capital: "Libreville" },
    { country: "Gambia", capital: "Banjul" },
    { country: "Georgia", capital: "Tbilisi" },
    { country: "Germany", capital: "Berlin" },
    { country: "Ghana", capital: "Accra" },
    { country: "Greece", capital: "Athens" },
    { country: "Grenada", capital: "St. George's" },
    { country: "Guatemala", capital: "Guatemala City" },
    { country: "Guinea", capital: "Conakry" },
    { country: "Guinea-Bissau", capital: "Bissau" },
    { country: "Guyana", capital: "Georgetown" },
    { country: "Haiti", capital: "Port-au-Prince" },
    { country: "Honduras", capital: "Tegucigalpa" },
    { country: "Hungary", capital: "Budapest" },
    { country: "Iceland", capital: "Reykjavik" },
    { country: "India", capital: "New Delhi" },
    { country: "Indonesia", capital: "Jakarta" },
    { country: "Iran", capital: "Tehran" },
    { country: "Iraq", capital: "Baghdad" },
    { country: "Ireland", capital: "Dublin" },
    { country: "Israel", capital: "Jerusalem" },
    { country: "Italy", capital: "Rome" },
    { country: "Jamaica", capital: "Kingston" },
    { country: "Japan", capital: "Tokyo" },
    { country: "Jordan", capital: "Amman" },
    { country: "Kazakhstan", capital: "Nur-Sultan" },
    { country: "Kenya", capital: "Nairobi" },
    { country: "Kiribati", capital: "South Tarawa" },
    { country: "Kuwait", capital: "Kuwait City" },
    { country: "Kyrgyzstan", capital: "Bishkek" },
    { country: "Laos", capital: "Vientiane" },
    { country: "Latvia", capital: "Riga" },
    { country: "Lebanon", capital: "Beirut" },
    { country: "Lesotho", capital: "Maseru" },
    { country: "Liberia", capital: "Monrovia" },
    { country: "Libya", capital: "Tripoli" },
    { country: "Liechtenstein", capital: "Vaduz" },
    { country: "Lithuania", capital: "Vilnius" },
    { country: "Luxembourg", capital: "Luxembourg City" },
    { country: "Madagascar", capital: "Antananarivo" },
    { country: "Malawi", capital: "Lilongwe" },
    { country: "Malaysia", capital: "Kuala Lumpur" },
    { country: "Maldives", capital: "Male" },
    { country: "Mali", capital: "Bamako" },
    { country: "Malta", capital: "Valletta" },
    { country: "Marshall Islands", capital: "Majuro" },
    { country: "Mauritania", capital: "Nouakchott" },
    { country: "Mauritius", capital: "Port Louis" },
    { country: "Mexico", capital: "Mexico City" },
    { country: "Micronesia, Federated States of", capital: "Palikir" },
    { country: "Moldova", capital: "Chisinau" },
    { country: "Monaco", capital: "Monaco" },
    { country: "Mongolia", capital: "Ulaanbaatar" },
    { country: "Montenegro", capital: "Podgorica" },
    { country: "Morocco", capital: "Rabat" },
    { country: "Mozambique", capital: "Maputo" },
    { country: "Myanmar", capital: "Nay Pyi Taw" },
    { country: "Namibia", capital: "Windhoek" },
    { country: "Nauru", capital: "Yaren District" },
    { country: "Nepal", capital: "Kathmandu" },
    { country: "Netherlands", capital: "Amsterdam" },
    { country: "New Zealand", capital: "Wellington" },
    { country: "Nicaragua", capital: "Managua" },
    { country: "Niger", capital: "Niamey" },
    { country: "Nigeria", capital: "Abuja" },
    { country: "North Korea", capital: "Pyongyang" },
    { country: "North Macedonia", capital: "Skopje" },
    { country: "Norway", capital: "Oslo" },
    { country: "Oman", capital: "Muscat" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Palau", capital: "Ngerulmud" },
    { country: "Palestine", capital: "Ramallah" },
    { country: "Panama", capital: "Panama City" },
    { country: "Papua New Guinea", capital: "Port Moresby" },
    { country: "Paraguay", capital: "Asunción" },
    { country: "Peru", capital: "Lima" },
    { country: "Philippines", capital: "Manila" },
    { country: "Poland", capital: "Warsaw" },
    { country: "Portugal", capital: "Lisbon" },
    { country: "Qatar", capital: "Doha" },
    { country: "Romania", capital: "Bucharest" },
    { country: "Russia", capital: "Moscow" },
    { country: "Rwanda", capital: "Kigali" },
    { country: "Saint Kitts and Nevis", capital: "Basseterre" },
    { country: "Saint Lucia", capital: "Castries" },
    { country: "Saint Vincent and the Grenadines", capital: "Kingstown" },
    { country: "Samoa", capital: "Apia" },
    { country: "San Marino", capital: "San Marino" },
    { country: "Sao Tome and Principe", capital: "São Tomé" },
    { country: "Saudi Arabia", capital: "Riyadh" },
    { country: "Senegal", capital: "Dakar" },
    { country: "Serbia", capital: "Belgrade" },
    { country: "Seychelles", capital: "Victoria" },
    { country: "Sierra Leone", capital: "Freetown" },
    { country: "Singapore", capital: "Singapore" },
    { country: "Slovakia", capital: "Bratislava" },
    { country: "Slovenia", capital: "Ljubljana" },
    { country: "Solomon Islands", capital: "Honiara" },
    { country: "Somalia", capital: "Mogadishu" },
    {
        country: "South Africa",
        capital:
            "Pretoria (administrative); Cape Town (legislative); Bloemfontein (judicial)",
    },
    { country: "South Korea", capital: "Seoul" },
    { country: "South Sudan", capital: "Juba" },
    { country: "Spain", capital: "Madrid" },
    {
        country: "Sri Lanka",
        capital: "Sri Jayawardenepura Kotte (official); Colombo (commercial)",
    },
    { country: "Sudan", capital: "Khartoum" },
    { country: "Suriname", capital: "Paramaribo" },
    { country: "Sweden", capital: "Stockholm" },
    { country: "Switzerland", capital: "Bern" },
    { country: "Syria", capital: "Damascus" },
    { country: "Taiwan", capital: "Taipei" },
    { country: "Tajikistan", capital: "Dushanbe" },
    {
        country: "Tanzania",
        capital: "Dodoma (official); Dar es Salaam (commercial)",
    },
    { country: "Thailand", capital: "Bangkok" },
    { country: "Timor-Leste", capital: "Dili" },
    { country: "Togo", capital: "Lomé" },
    { country: "Tonga", capital: "Nuku'alofa" },
    { country: "Trinidad and Tobago", capital: "Port of Spain" },
    { country: "Tunisia", capital: "Tunis" },
    { country: "Turkey", capital: "Ankara" },
    { country: "Turkmenistan", capital: "Ashgabat" },
    { country: "Tuvalu", capital: "Funafuti" },
    { country: "Uganda", capital: "Kampala" },
    { country: "Ukraine", capital: "Kyiv (Kiev)" },
    { country: "United Arab Emirates", capital: "Abu Dhabi" },
    { country: "United Kingdom", capital: "London" },
    { country: "United States", capital: "Washington, D.C." },
    { country: "Uruguay", capital: "Montevideo" },
    { country: "Uzbekistan", capital: "Tashkent" },
    { country: "Vanuatu", capital: "Port Vila" },
    { country: "Vatican City (Holy See)", capital: "Vatican City" },
    { country: "Venezuela", capital: "Caracas" },
    { country: "Vietnam", capital: "Hanoi" },
    { country: "Yemen", capital: "Sana'a" },
    { country: "Zambia", capital: "Lusaka" },
    { country: "Zimbabwe", capital: "Harare" },
];

// Get the group keys in an array
const groupKeys = Object.keys(groups);
// Initialize a variable to keep track of the current group index
let currentGroupIndex = 0;

function showNextGroup() {
    const currentGroup = groups[groupKeys[currentGroupIndex]];

    removeCurrentCities();

    updateHeader(currentGroup);
    updateCities(currentGroup);
    // Update the group index, and wrap around if at the end
    currentGroupIndex = (currentGroupIndex + 1) % groupKeys.length;
}

function removeCurrentCities() {
    let main = document.querySelector("main");
    main.replaceChildren();
}

let btn = document.querySelector("button");
btn.addEventListener("click", showNextGroup);

function updateHeader(group) {
    let currentlyShowing = document.querySelector(".currently-showing");
    let blurb = document.querySelector(".blurb");

    currentlyShowing.textContent = `Currently showing: ${group.name}`;
    blurb.textContent = group.blurb;
}

function updateCities(group) {
    group.list.forEach(async (country) => {
        let capital = getCapital(country);
        let weather = await getCityWeather(capital);
        createCityWrapper(
            weather.location.name,
            weather.location.country,
            `${weather.location.lat} ${weather.location.lon}`,
            weather.current.temp_c,
            weather.current.temp_f,
            weather.current.wind_kph,
            weather.current.wind_mph,
            weather.current.wind_dir,
            weather.current.pressure_mb,
            weather.current.humidity
        );
    });
}

let getCapital = function (c) {
    let result = countries.find((item) => item.country === c);
    console.log(result.capital);
    return result.capital;
};

async function getCityWeather(query) {
    const API_KEY = "feb43f471a6847268e915001232904";
    let weatherData = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`
    );
    let weather = await weatherData.json();
    return weather;
}

let t = document.querySelector("h1");
t.addEventListener("click", switchMetricAndImperial);

function switchMetricAndImperial() {
    console.log("yo!");
    let imperials = document.querySelectorAll(".imperial");
    let metrics = document.querySelectorAll(".metric");

    if (imperials[0].style.display === "none") {
        showThem(imperials);
        hideTheOthers(metrics);
    } else {
        showThem(metrics);
        hideTheOthers(imperials);
    }

    function showThem(elements) {
        elements.forEach((element) => {
            element.style.display = "block";
        });
    }

    function hideTheOthers(elements) {
        elements.forEach((element) => {
            element.style.display = "none";
        });
    }
}

// create elements
function createCityWrapper(
    name,
    country,
    coord,
    tempMetric,
    tempImperial,
    windSpeedMetric,
    windSpeedImperial,
    windDirection,
    pressure,
    humidity
) {
    let myClassName = convertSpacesToDashesAndKeepLettersOnly(name);

    function convertSpacesToDashesAndKeepLettersOnly(str) {
        let lettersAndSpacesOnly = str.replace(/[^a-zA-Z ]/g, ""); // remove non-letters and non-space characters
        let dashesInsteadOfSpaces = lettersAndSpacesOnly.replace(/ /g, "-"); // replace spaces with dashes
        return dashesInsteadOfSpaces;
    }

    let main = document.querySelector("main");

    let cityWrapper = newElement("div", "main", `city-wrapper ${myClassName}`);
    let cityName = newElement(
        "div",
        `.city-wrapper.${myClassName}`,
        "city-name",
        name
    );
    let cityCountry = newElement(
        "div",
        `.city-wrapper.${myClassName}`,
        "country-name",
        country
    );
    let cityCoord = newElement(
        "div",
        `.city-wrapper.${myClassName}`,
        "coord",
        coord
    );
    let cityWeather = newElement(
        "div",
        `.city-wrapper.${myClassName}`,
        "weather"
    );
    let cityDegreesF = newElement(
        "div",
        `.${myClassName} .weather`,
        "degrees imperial",
        `${tempImperial}°F`
    );

    let cityDegreesC = newElement(
        "div",
        `.${myClassName} .weather`,
        "degrees metric",
        `${tempMetric}°C`
    );
    let cityWindMetric = newElement(
        "div",
        `.${myClassName} .weather`,
        "wind metric",
        `Wind: ${windSpeedMetric} km/h ${windDirection}`
    );

    let cityWindImperial = newElement(
        "div",
        `.${myClassName} .weather`,
        "wind imperial",
        `Wind: ${windSpeedImperial} mph ${windDirection}`
    );

    let cityPressure = newElement(
        "div",
        `.${myClassName} .weather`,
        "pressure",
        `Pressure: ${pressure}`
    );
    let cityHumidity = newElement(
        "div",
        `.${myClassName} .weather`,
        "humidity",
        `Humidity: ${humidity}`
    );
}

function newElement(type, parent, classes, text = "") {
    let container = document.querySelector(parent);
    let newEl = document.createElement(type);
    newEl.className = classes;
    newEl.textContent = text;
    container.appendChild(newEl);
}

showNextGroup();
