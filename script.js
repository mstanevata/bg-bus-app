const busDatabase = {
  sofia: [
    { time: "07:00", direction: "София - Пловдив", carrier: "Юнион Ивкони", type: "departures", price: "9.20 €", stops: ["Директен"] },
    { time: "08:30", direction: "София - Бургас", carrier: "Етап Адресс", type: "departures", price: "17.90 €", stops: ["Пловдив", "Стара Загора"] },
    { time: "09:00", direction: "София - Варна", carrier: "Биомет", type: "departures", price: "19.43 €", stops: ["Велико Търново", "Търговище", "Шумен"] },
    { time: "11:30", direction: "София - Пловдив", carrier: "Хеброс Бус", type: "departures", price: "7.67 €", stops: ["Пазарджик"] },
    { time: "14:00", direction: "София - Бургас", carrier: "Юнион Ивкони", type: "departures", price: "17.90 €", stops: ["Стара Загора"] },
    { time: "16:30", direction: "София - Варна", carrier: "Глобал Биомет", type: "departures", price: "19.43 €", stops: ["Велико Търново", "Шумен"] },
    { time: "09:15", direction: "Пловдив - София", carrier: "Хеброс Бус", type: "arrivals", price: "7.67 €", stops: ["Пазарджик"] },
    { time: "13:45", direction: "Варна - София", carrier: "Биомет", type: "arrivals", price: "19.43 €", stops: ["Шумен", "Велико Търново"] },
    { time: "15:30", direction: "Бургас - София", carrier: "Етап Адресс", type: "arrivals", price: "17.90 €", stops: ["Сливен", "Стара Загора"] },
    { time: "18:00", direction: "Пловдив - София", carrier: "Юнион Ивкони", type: "arrivals", price: "9.20 €", stops: ["Директен"] }
  ],
  plovdiv: [
    { time: "06:30", direction: "Пловдив - София", carrier: "Хеброс Бус", type: "departures", price: "7.67 €", stops: ["Пазарджик"] },
    { time: "08:00", direction: "Пловдив - Варна", carrier: "Кристал", type: "departures", price: "20.45 €", stops: ["Стара Загора", "Сливен", "Шумен"] },
    { time: "10:30", direction: "Пловдив - Бургас", carrier: "Юнион Ивкони", type: "departures", price: "14.32 €", stops: ["Стара Загора", "Карнобат"] },
    { time: "14:00", direction: "Пловдив - София", carrier: "Юнион Ивкони", type: "departures", price: "9.20 €", stops: ["Директен"] },
    { time: "17:15", direction: "Пловдив - Хасково", carrier: "Арда Тур", type: "departures", price: "6.14 €", stops: ["Димитровград"] },
    { time: "08:45", direction: "София - Пловдив", carrier: "Юнион Ивкони", type: "arrivals", price: "9.20 €", stops: ["Директен"] },
    { time: "11:20", direction: "Бургас - Пловдив", carrier: "Етап Адресс", type: "arrivals", price: "14.32 €", stops: ["Сливен", "Стара Загора"] },
    { time: "13:10", direction: "София - Пловдив", carrier: "Хеброс Бус", type: "arrivals", price: "7.67 €", stops: ["Пазарджик"] },
    { time: "16:40", direction: "Варна - Пловдив", carrier: "Кристал", type: "arrivals", price: "20.45 €", stops: ["Шумен", "Сливен", "Стара Загора"] }
  ],
  varna: [
    { time: "07:30", direction: "Варна - София", carrier: "Биомет", type: "departures", price: "19.43 €", stops: ["Шумен", "Велико Търново"] },
    { time: "09:00", direction: "Варна - Бургас", carrier: "М-Бус", type: "departures", price: "7.67 €", stops: ["Бяла", "Обзор", "Слънчев бряг", "Несебър"] },
    { time: "13:30", direction: "Варна - Пловдив", carrier: "Кристал", type: "departures", price: "20.45 €", stops: ["Шумен", "Сливен", "Стара Загора"] },
    { time: "23:30", direction: "Варна - София", carrier: "Глобал Биомет", type: "departures", price: "19.43 €", stops: ["Директен"] },
    { time: "11:15", direction: "Бургас - Варна", carrier: "М-Бус", type: "arrivals", price: "7.67 €", stops: ["Слънчев бряг", "Обзор", "Бяла"] },
    { time: "15:45", direction: "София - Варна", carrier: "Биомет", type: "arrivals", price: "19.43 €", stops: ["Велико Търново", "Шумен"] },
    { time: "19:00", direction: "Пловдив - Варна", carrier: "Кристал", type: "arrivals", price: "20.45 €", stops: ["Стара Загора", "Сливен", "Шумен"] }
  ],
  burgas: [
    { time: "07:00", direction: "Бургас - София", carrier: "Юнион Ивкони", type: "departures", price: "17.90 €", stops: ["Стара Загора"] },
    { time: "08:30", direction: "Бургас - Варна", carrier: "М-Бус", type: "departures", price: "7.67 €", stops: ["Поморие", "Слънчев бряг", "Обзор"] },
    { time: "12:00", direction: "Бургас - Пловдив", carrier: "Етап Адресс", type: "departures", price: "14.32 €", stops: ["Карнобат", "Сливен", "Стара Загора"] },
    { time: "23:00", direction: "Бургас - София", carrier: "Етап Адресс", type: "departures", price: "17.90 €", stops: ["Директен"] },
    { time: "12:30", direction: "Варна - Бургас", carrier: "М-Бус", type: "arrivals", price: "7.67 €", stops: ["Обзор", "Слънчев бряг", "Поморие"] },
    { time: "14:15", direction: "София - Бургас", carrier: "Етап Адресс", type: "arrivals", price: "17.90 €", stops: ["Стара Загора", "Сливен"] },
    { time: "17:45", direction: "Пловдив - Бургас", carrier: "Юнион Ивкони", type: "arrivals", price: "14.32 €", stops: ["Стара Загора"] }
  ]
};

let currentTab = 'departures';

const stationSelect = document.getElementById('station-select');
const tabsContainer = document.getElementById('tabs-container');
const busList = document.getElementById('bus-list');
const loader = document.getElementById('loader');

stationSelect.addEventListener('change', function() {
  const station = this.value;
  if (!station) {
    tabsContainer.classList.add('hidden');
    busList.innerHTML = '';
    return;
  }
  tabsContainer.classList.remove('hidden');
  busList.innerHTML = '';
  loader.classList.remove('hidden');
  
  setTimeout(() => {
    loader.classList.add('hidden');
    filterAndRender(station);
  }, 300);
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('.tab-btn.active').classList.remove('active');
    this.classList.add('active');
    currentTab = this.getAttribute('data-tab');
    if (stationSelect.value) filterAndRender(stationSelect.value);
  });
});

function filterAndRender(station) {
  busList.innerHTML = '';
  const allBuses = busDatabase[station] || [];
  const filtered = allBuses.filter(b => b.type === currentTab);

  if (filtered.length === 0) {
    busList.innerHTML = '<li style="text-align:center; padding:20px; color:white;">Няма автобуси.</li>';
    return;
  }

  filtered.forEach(bus => {
    const stopsHtml = bus.stops.map(stop => `<span class="stop-badge">${stop}</span>`).join(' ➔ ');
    const li = document.createElement('li');
    li.className = 'bus-card';
    li.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
        <span>🕒 ${bus.time} ч.</span>
        <span class="bus-price">💰 ${bus.price}</span>
      </div>
      <div style="margin: 5px 0;">➡️ ${bus.direction}</div>
      <div style="font-size: 0.8rem;">🏢 ${bus.carrier}</div>
      <div style="margin-top: 8px; font-size: 0.8rem;">${stopsHtml}</div>
    `;
    busList.appendChild(li);
  });
}
