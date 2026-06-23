let currentTab = 'departures';

// БАЗА ДАННИ: С цени само в евро
const busDatabase = {
  sofia: [
    { time: "07:00", direction: "София - Пловдив", carrier: "Юнион Ивкони", type: "departures", price: "9.20 €", stops: ["Директен"] },
    { time: "08:30", direction: "София - Бургас", carrier: "Етап Адресс", type: "departures", price: "17.90 €", stops: ["Пловдив (10:30)", "Стара Загора (11:45)", "Сливен (13:00)"] },
    { time: "09:00", direction: "София - Варна", carrier: "Биомет", type: "departures", price: "19.43 €", stops: ["Велико Търново (12:00)", "Търговище (13:30)", "Шумен (14:15)"] },
    { time: "11:30", direction: "София - Пловдив", carrier: "Хеброс Бус", type: "departures", price: "7.67 €", stops: ["Пазарджик (13:00)"] },
    { time: "14:00", direction: "София - Бургас", carrier: "Юнион Ивкони", type: "departures", price: "17.90 €", stops: ["Стара Загора (17:00)"] },
    { time: "16:30", direction: "София - Варна", carrier: "Глобал Биомет", type: "departures", price: "19.43 €", stops: ["Велико Търново (19:30)", "Шумен (21:45)"] },
    { time: "09:15", direction: "Пловдив - София", carrier: "Хеброс Бус", type: "arrivals", price: "7.67 €", stops: ["Пазарджик (07:45)"] },
    { time: "13:45", direction: "Варна - София", carrier: "Биомет", type: "arrivals", price: "19.43 €", stops: ["Шумен (09:45)", "Велико Търново (11:30)"] },
    { time: "15:30", direction: "Бургас - София", carrier: "Етап Адресс", type: "arrivals", price: "17.90 €", stops: ["Сливен (11:00)", "Стара Загора (12:15)"] },
    { time: "18:00", direction: "Пловдив - София", carrier: "Юнион Ивкони", type: "arrivals", price: "9.20 €", stops: ["Директен"] }
  ],
  plovdiv: [
    { time: "06:30", direction: "Пловдив - София", carrier: "Хеброс Бус", type: "departures", price: "7.67 €", stops: ["Пазарджик (07:15)"] },
    { time: "08:00", direction: "Пловдив - Варна", carrier: "Кристал", type: "departures", price: "20.45 €", stops: ["Стара Загора (09:30)", "Сливен (10:45)", "Шумен (13:00)"] },
    { time: "10:30", direction: "Пловдив - Бургас", carrier: "Юнион Ивкони", type: "departures", price: "14.32 €", stops: ["Стара Загора (11:45)", "Карнобат (13:30)"] },
    { time: "14:00", direction: "Пловдив - София", carrier: "Юнион Ивкони", type: "departures", price: "9.20 €", stops: ["Директен"] },
    { time: "17:15", direction: "Пловдив - Хасково", carrier: "Арда Тур", type: "departures", price: "6.14 €", stops: ["Димитровград (18:10)"] },
    { time: "08:45", direction: "София - Пловдив", carrier: "Юнион Ивкони", type: "arrivals", price: "9.20 €", stops: ["Директен"] },
    { time: "11:20", direction: "Бургас - Пловдив", carrier: "Етап Адресс", type: "arrivals", price: "14.32 €", stops: ["Сливен (08:30)", "Стара Загора (09:45)"] },
    { time: "13:10", direction: "София - Пловдив", carrier: "Хеброс Бус", type: "arrivals", price: "7.67 €", stops: ["Пазарджик (12:20)"] },
    { time: "16:40", direction: "Варна - Пловдив", carrier: "Кристал", type: "arrivals", price: "20.45 €", stops: ["Шумен (11:30)", "Сливен (14:00)", "Стара Загора (15:15)"] }
  ],
  varna: [
    { time: "07:30", direction: "Варна - София", carrier: "Биомет", type: "departures", price: "19.43 €", stops: ["Шумен (08:30)", "Велико Търново (10:45)"] },
    { time: "09:00", direction: "Варна - Бургас", carrier: "М-Бус", type: "departures", price: "7.67 €", stops: ["Бяла (10:15)", "Обзор (10:30)", "Слънчев бряг (11:15)", "Несебър (11:30)"] },
    { time: "13:30", direction: "Варна - Пловдив", carrier: "Кристал", type: "departures", price: "20.45 €", stops: ["Шумен (14:30)", "Сливен (17:00)", "Стара Загора (18:15)"] },
    { time: "23:30", direction: "Варна - София", carrier: "Глобал Биомет", type: "departures", price: "19.43 €", stops: ["Директен (Нощен)"] },
    { time: "11:15", direction: "Бургас - Варна", carrier: "М-Бус", type: "arrivals", price: "7.67 €", stops: ["Слънчев бряг (09:00)", "Обзор (09:45)", "Бяла (10:00)"] },
    { time: "15:45", direction: "София - Варна", carrier: "Биомет", type: "arrivals", price: "19.43 €", stops: ["Велико Търново (12:30)", "Шумен (14:45)"] },
    { time: "19:00", direction: "Пловдив - Варна", carrier: "Кристал", type: "arrivals", price: "20.45 €", stops: ["Стара Загора (15:00)", "Сливен (16:15)", "Шумен (18:00)"] }
  ],
  burgas: [
    { time: "07:00", direction: "Бургас - София", carrier: "Юнион Ивкони", type: "departures", price: "17.90 €", stops: ["Стара Загора (09:30)"] },
    { time: "08:30", direction: "Бургас - Варна", carrier: "М-Бус", type: "departures", price: "7.67 €", stops: ["Поморие (09:00)", "Слънчев бряг (09:30)", "Обзор (10:15)"] },
    { time: "12:00", direction: "Бургас - Пловдив", carrier: "Етап Адресс", type: "departures", price: "14.32 €", stops: ["Карнобат (13:00)", "Сливен (14:00)", "Стара Загора (15:15)"] },
    { time: "23:00", direction: "Бургас - София", carrier: "Етап Адресс", type: "departures", price: "17.90 €", stops: ["Директен (Нощен)"] },
    { time: "12:30", direction: "Варна - Бургас", carrier: "М-Бус", type: "arrivals", price: "7.67 €", stops: ["Обзор (10:45)", "Слънчев бряг (11:30)", "Поморие (12:00)"] },
    { time: "14:15", direction: "София - Бургас", carrier: "Етап Адресс", type: "arrivals", price: "17.90 €", stops: ["Стара Загора (11:15)", "Сливен (12:30)"] },
    { time: "17:45", direction: "Пловдив - Бургас", carrier: "Юнион Ивкони", type: "arrivals", price: "14.32 €", stops: ["Стара Загора (15:00)"] }
  ]
};

const stationSelect = document.getElementById('station-select');
const searchInput = document.getElementById('search-input');
const tabsContainer = document.getElementById('tabs-container');
const busList = document.getElementById('bus-list');
const loader = document.getElementById('loader');
const themeToggle = document.getElementById('theme-toggle');
const favBtn = document.getElementById('fav-btn');

// Автоматичен дисклеймър
if (!document.getElementById('date-disclaimer')) {
  const mainTag = document.querySelector('main');
  const disclaimer = document.createElement('div');
  disclaimer.id = 'date-disclaimer';
  disclaimer.style = "text-align: center; font-size: 0.85rem; color: #7f8c8d; margin-top: 25px; padding-top: 15px; border-top: 1px solid var(--border-color, #ccc);";
  disclaimer.innerHTML = "<em>* Разписанията и цените са примерни и са актуални към 23 юни 2026 г.</em>";
  mainTag.appendChild(disclaimer);
}

// Тъмна Тема
themeToggle.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// Любима автогара
const savedFav = localStorage.getItem('favStation');
if (savedFav) {
  stationSelect.value = savedFav;
  setTimeout(() => stationSelect.dispatchEvent(new Event('change')), 100);
}

favBtn.addEventListener('click', () => {
  const currentStation = stationSelect.value;
  if (!currentStation) return;
  if (localStorage.getItem('favStation') === currentStation) {
    localStorage.removeItem('favStation');
    favBtn.textContent = '☆';
  } else {
    localStorage.setItem('favStation', currentStation);
    favBtn.textContent = '⭐';
  }
});

stationSelect.addEventListener('change', function() {
  const station = this.value;
  if (!station) { hideElements(); return; }
  
  favBtn.textContent = localStorage.getItem('favStation') === station ? '⭐' : '☆';
  searchInput.classList.remove('hidden');
  tabsContainer.classList.remove('hidden');
  
  busList.innerHTML = '';
  loader.classList.remove('hidden');
  setTimeout(() => {
    loader.classList.add('hidden');
    filterAndRender(station);
  }, 400);
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('.tab-btn.active').classList.remove('active');
    this.classList.add('active');
    currentTab = this.getAttribute('data-tab');
    if (stationSelect.value) filterAndRender(stationSelect.value);
  });
});

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.bus-card').forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
});

function filterAndRender(station) {
  busList.innerHTML = '';
  const allBusesForStation = busDatabase[station] || [];
  const filtered = allBusesForStation.filter(b => b.type === currentTab);

  if (filtered.length === 0) {
    busList.innerHTML = '<li style="list-style:none; text-align:center; padding:20px;">Няма намерени автобуси за днес.</li>';
    return;
  }

  filtered.sort((a, b) => a.time.localeCompare(b.time));

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  filtered.forEach(bus => {
    const [bHour, bMin] = bus.time.split(':').map(Number);
    const busMinutes = bHour * 60 + bMin;
    
    let timeClass = '';
    if (busMinutes < currentMinutes) {
      timeClass = 'past';
    } else if (busMinutes - currentMinutes <= 60) {
      timeClass = 'urgent';
    }

    const stopsHtml = bus.stops && bus.stops.length > 0 
      ? bus.stops.map(stop => `<span class="stop-badge">${stop}</span>`).join(' ➔ ')
      : '<span class="stop-badge">Директен</span>';

    const li = document.createElement('li');
    li.className = `bus-card ${timeClass}`;
    li.style.listStyle = 'none';
    
    li.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="bus-time">🕒 ${bus.time} ч.</div>
        <div class="bus-price" style="font-weight: bold; color: #27ae60; font-size: 1.05rem;">💰 ${bus.price}</div>
      </div>
      <div class="bus-direction">${currentTab === 'departures' ? '➡️' : '⬅️'} ${bus.direction}</div>
      <div class="bus-carrier">🏢 Превозвач: ${bus.carrier}</div>
      <div class="bus-route" style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--border-color, #ccc); font-size: 0.85rem;">
        <strong>Маршрут:</strong><br> ${stopsHtml}
      </div>
    `;
    busList.appendChild(li);
  });
  
  searchInput.dispatchEvent(new Event('input'));
}

function hideElements() {
  busList.innerHTML = '';
  searchInput.classList.add('hidden');
  tabsContainer.classList.add('hidden');
  favBtn.textContent = '☆';
}