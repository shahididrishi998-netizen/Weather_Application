// SVG Icon Definitions (Glows, Gradients & Animations included)
const weatherIcons = {
    Sunny: `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fffbcf" />
                    <stop offset="100%" stop-color="#ffd700" stop-opacity="0.2" />
                </radialGradient>
                <linearGradient id="sun-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffe066" />
                    <stop offset="100%" stop-color="#f59e0b" />
                </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="8" fill="url(#sun-glow)" />
            <circle cx="12" cy="12" r="5" fill="url(#sun-gradient)" stroke="#f59e0b" stroke-width="0.5" />
            <g stroke="#f59e0b" stroke-width="2" stroke-linecap="round">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
        </svg>
    `,
    Cloudy: `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cloud-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff" />
                    <stop offset="100%" stop-color="#d1d5db" />
                </linearGradient>
                <linearGradient id="cloud-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#f3f4f6" />
                    <stop offset="100%" stop-color="#9ca3af" />
                </linearGradient>
            </defs>
            <!-- Back Cloud -->
            <path d="M15.5 17.5A3.5 3.5 0 0 0 19 14c0-2.8-2.5-4.5-5-4.5h-.3A4.5 4.5 0 0 0 5 12.5c0 .3 0 .7.1 1a3.5 3.5 0 0 0 .4 7h10" fill="url(#cloud-grad-2)" opacity="0.7"/>
            <!-- Front Cloud -->
            <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.07-1.22.2A6 6 0 0 0 3 11.5a6 6 0 0 0 6 6h8.5" fill="url(#cloud-grad-1)" stroke="#cbd5e1" stroke-width="0.5"/>
        </svg>
    `,
    Rainy: `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="rain-cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#94a3b8" />
                    <stop offset="100%" stop-color="#475569" />
                </linearGradient>
            </defs>
            <path d="M17.5 16A3.5 3.5 0 0 0 21 12.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.07-1.22.2A6 6 0 0 0 3 8.5a6 6 0 0 0 6 6h8.5" fill="url(#rain-cloud-grad)" />
            <g stroke="#38bdf8" stroke-width="2" stroke-linecap="round">
                <line x1="8" y1="18" x2="6" y2="22" />
                <line x1="12" y1="18" x2="10" y2="22" />
                <line x1="16" y1="18" x2="14" y2="22" />
            </g>
        </svg>
    `,
    Snowy: `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="snow-cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#e2e8f0" />
                    <stop offset="100%" stop-color="#94a3b8" />
                </linearGradient>
            </defs>
            <path d="M17.5 16A3.5 3.5 0 0 0 21 12.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.07-1.22.2A6 6 0 0 0 3 8.5a6 6 0 0 0 6 6h8.5" fill="url(#snow-cloud-grad)" />
            <g stroke="#7dd3fc" stroke-width="1.5" stroke-linecap="round">
                <circle cx="8" cy="19" r="1" fill="#7dd3fc" />
                <circle cx="12" cy="21" r="1" fill="#7dd3fc" />
                <circle cx="16" cy="19" r="1" fill="#7dd3fc" />
                <path d="M8 18.5v1M7.5 19h1M12 20.5v1M11.5 21h1M16 18.5v1M15.5 19h1" />
            </g>
        </svg>
    `,
    Stormy: `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="storm-cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#475569" />
                    <stop offset="100%" stop-color="#1e293b" />
                </linearGradient>
            </defs>
            <path d="M17.5 15A3.5 3.5 0 0 0 21 11.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.07-1.22.2A6 6 0 0 0 3 7.5a6 6 0 0 0 6 6h8.5" fill="url(#storm-cloud-grad)" />
            <!-- Bolt -->
            <path d="M11 14l-3 5h4l-2 5 6-6h-4l1-4z" fill="#f59e0b" stroke="#d97706" stroke-width="0.5" filter="drop-shadow(0 0 4px #fbbf24)"/>
        </svg>
    `,
    Night: `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="moon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fef08a" />
                    <stop offset="100%" stop-color="#eab308" />
                </linearGradient>
            </defs>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="url(#moon-grad)" filter="drop-shadow(0 2px 8px rgba(234, 179, 8, 0.3))"/>
            <!-- Twinkling Stars -->
            <path d="M19 5l.5 1 .5-1-.5-.5z" fill="#ffffff" opacity="0.8" />
            <path d="M15 2l.3.7.7-.3-.3-.3z" fill="#ffffff" opacity="0.6" />
            <path d="M22 10l.4.8.8-.4-.4-.4z" fill="#ffffff" opacity="0.7" />
        </svg>
    `
};

// Client-side Mock Database fallback (Used if running as file:/// or if server is offline)
const clientFallbackDatabase = [
    {
        city: "New York",
        country: "United States",
        code: "US",
        condition: "Rainy",
        temp: 18,
        high: 22,
        low: 14,
        description: "Expect persistent rainfall throughout the afternoon. Keep your umbrella close.",
        humidity: 84,
        wind: 16,
        uv: "2 (Low)",
        aqi: "32 (Good)",
        hourly: [
            { time: "Now", condition: "Rainy", temp: 18 },
            { time: "9 AM", condition: "Cloudy", temp: 19 },
            { time: "12 PM", condition: "Rainy", temp: 20 },
            { time: "3 PM", condition: "Rainy", temp: 22 },
            { time: "6 PM", condition: "Stormy", temp: 21 },
            { time: "9 PM", condition: "Rainy", temp: 17 },
            { time: "12 AM", condition: "Cloudy", temp: 16 },
            { time: "3 AM", condition: "Cloudy", temp: 15 }
        ],
        weekly: [
            { day: "Today", condition: "Rainy", min: 14, max: 22 },
            { day: "Tue", condition: "Stormy", min: 16, max: 24 },
            { day: "Wed", condition: "Cloudy", min: 15, max: 23 },
            { day: "Thu", condition: "Sunny", min: 18, max: 26 },
            { day: "Fri", condition: "Sunny", min: 19, max: 27 },
            { day: "Sat", condition: "Cloudy", min: 17, max: 25 },
            { day: "Sun", condition: "Rainy", min: 13, max: 20 }
        ]
    },
    {
        city: "Tokyo",
        country: "Japan",
        code: "JP",
        condition: "Cloudy",
        temp: 21,
        high: 25,
        low: 17,
        description: "Overcast skies with mild temperatures. A gentle breeze blowing from the bay.",
        humidity: 68,
        wind: 12,
        uv: "4 (Moderate)",
        aqi: "45 (Good)",
        hourly: [
            { time: "Now", condition: "Cloudy", temp: 21 },
            { time: "10 AM", condition: "Cloudy", temp: 22 },
            { time: "1 PM", condition: "Cloudy", temp: 24 },
            { time: "4 PM", condition: "Sunny", temp: 25 },
            { time: "7 PM", condition: "Night", temp: 20 },
            { time: "10 PM", condition: "Night", temp: 19 },
            { time: "1 AM", condition: "Night", temp: 18 },
            { time: "4 AM", condition: "Cloudy", temp: 17 }
        ],
        weekly: [
            { day: "Today", condition: "Cloudy", min: 17, max: 25 },
            { day: "Tue", condition: "Sunny", min: 18, max: 27 },
            { day: "Wed", condition: "Sunny", min: 19, max: 28 },
            { day: "Thu", condition: "Rainy", min: 16, max: 22 },
            { day: "Fri", condition: "Cloudy", min: 17, max: 24 },
            { day: "Sat", condition: "Sunny", min: 20, max: 29 },
            { day: "Sun", condition: "Night", min: 18, max: 25 }
        ]
    },
    {
        city: "Cairo",
        country: "Egypt",
        code: "EG",
        condition: "Sunny",
        temp: 36,
        high: 40,
        low: 26,
        description: "Very hot and sunny. Ensure you stay well hydrated and avoid direct sunlight.",
        humidity: 22,
        wind: 18,
        uv: "11 (Extreme)",
        aqi: "95 (Moderate)",
        hourly: [
            { time: "Now", condition: "Sunny", temp: 36 },
            { time: "10 AM", condition: "Sunny", temp: 38 },
            { time: "1 PM", condition: "Sunny", temp: 40 },
            { time: "4 PM", condition: "Sunny", temp: 39 },
            { time: "7 PM", condition: "Sunny", temp: 34 },
            { time: "10 PM", condition: "Night", temp: 30 },
            { time: "1 AM", condition: "Night", temp: 28 },
            { time: "4 AM", condition: "Night", temp: 26 }
        ],
        weekly: [
            { day: "Today", condition: "Sunny", min: 26, max: 40 },
            { day: "Tue", condition: "Sunny", min: 27, max: 41 },
            { day: "Wed", condition: "Sunny", min: 28, max: 42 },
            { day: "Thu", condition: "Sunny", min: 25, max: 39 },
            { day: "Fri", condition: "Sunny", min: 24, max: 37 },
            { day: "Sat", condition: "Sunny", min: 25, max: 38 },
            { day: "Sun", condition: "Sunny", min: 26, max: 40 }
        ]
    },
    {
        city: "London",
        country: "United Kingdom",
        code: "GB",
        condition: "Rainy",
        temp: 14,
        high: 17,
        low: 10,
        description: "Cool and damp with light drizzle clearing by late evening.",
        humidity: 88,
        wind: 22,
        uv: "3 (Moderate)",
        aqi: "28 (Good)",
        hourly: [
            { time: "Now", condition: "Rainy", temp: 14 },
            { time: "9 AM", condition: "Rainy", temp: 13 },
            { time: "12 PM", condition: "Rainy", temp: 15 },
            { time: "3 PM", condition: "Cloudy", temp: 17 },
            { time: "6 PM", condition: "Cloudy", temp: 16 },
            { time: "9 PM", condition: "Night", temp: 13 },
            { time: "12 AM", condition: "Night", temp: 12 },
            { time: "3 AM", condition: "Rainy", temp: 11 }
        ],
        weekly: [
            { day: "Today", condition: "Rainy", min: 10, max: 17 },
            { day: "Tue", condition: "Cloudy", min: 11, max: 18 },
            { day: "Wed", condition: "Rainy", min: 9, max: 16 },
            { day: "Thu", condition: "Stormy", min: 12, max: 19 },
            { day: "Fri", condition: "Cloudy", min: 10, max: 18 },
            { day: "Sat", condition: "Sunny", min: 13, max: 21 },
            { day: "Sun", condition: "Sunny", min: 14, max: 23 }
        ]
    }
];

// Application State
let currentCity = null;
let tempUnit = "C"; // C or F

// DOM Elements
const locationNameEl = document.getElementById("location-name");
const currentDateEl = document.getElementById("current-date");
const weatherBadgeEl = document.getElementById("weather-badge");
const currentTempEl = document.getElementById("current-temp");
const mainWeatherIconEl = document.getElementById("main-weather-icon");
const highTempEl = document.getElementById("high-temp");
const lowTempEl = document.getElementById("low-temp");
const weatherDescEl = document.getElementById("weather-desc");
const valHumidityEl = document.getElementById("val-humidity");
const valWindEl = document.getElementById("val-wind");
const valUvEl = document.getElementById("val-uv");
const valAqiEl = document.getElementById("val-aqi");

const hourlyContainer = document.getElementById("hourly-container");
const weeklyContainer = document.getElementById("weekly-container");

const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const suggestionsBox = document.getElementById("suggestions-box");

const unitCBtn = document.getElementById("unit-c");
const unitFBtn = document.getElementById("unit-f");

// Helper: Temperature Converter
function formatTemp(celsius) {
    if (tempUnit === "F") {
        return Math.round((celsius * 9) / 5 + 32);
    }
    return Math.round(celsius);
}

// Helper: Format Date
function getFormattedDate() {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
}

// Update Active Body Theme
function updateTheme(condition) {
    document.body.className = "";
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes("sunny") || lowerCondition.includes("clear")) {
        document.body.classList.add("theme-sunny");
    } else if (lowerCondition.includes("cloudy") || lowerCondition.includes("overcast") || lowerCondition.includes("fog") || lowerCondition.includes("mist")) {
        document.body.classList.add("theme-cloudy");
    } else if (lowerCondition.includes("rainy") || lowerCondition.includes("drizzle") || lowerCondition.includes("rain")) {
        document.body.classList.add("theme-rainy");
    } else if (lowerCondition.includes("snowy") || lowerCondition.includes("snow") || lowerCondition.includes("blizzard")) {
        document.body.classList.add("theme-snowy");
    } else if (lowerCondition.includes("stormy") || lowerCondition.includes("thunderstorm") || lowerCondition.includes("storm")) {
        document.body.classList.add("theme-stormy");
    } else if (lowerCondition.includes("night")) {
        document.body.classList.add("theme-night");
    } else {
        document.body.classList.add("theme-sunny");
    }
}

// Render Main Information
function renderMainWeather() {
    if (!currentCity) return;

    locationNameEl.textContent = `${currentCity.city}, ${currentCity.country}`;
    currentDateEl.textContent = getFormattedDate();
    weatherBadgeEl.textContent = currentCity.condition;
    currentTempEl.textContent = formatTemp(currentCity.temp);
    highTempEl.textContent = `${formatTemp(currentCity.high)}°`;
    lowTempEl.textContent = `${formatTemp(currentCity.low)}°`;
    weatherDescEl.textContent = currentCity.description;
    
    mainWeatherIconEl.innerHTML = weatherIcons[currentCity.condition] || weatherIcons["Sunny"];
    
    valHumidityEl.textContent = `${currentCity.humidity}%`;
    valWindEl.textContent = `${currentCity.wind} km/h`;
    valUvEl.textContent = currentCity.uv;
    valAqiEl.textContent = currentCity.aqi;
}

// Render Hourly Forecast
function renderHourlyForecast() {
    if (!currentCity || !currentCity.hourly) return;

    hourlyContainer.innerHTML = "";
    currentCity.hourly.forEach((hour) => {
        const item = document.createElement("div");
        item.className = "hourly-item";
        
        const timeEl = document.createElement("span");
        timeEl.className = "hourly-time";
        timeEl.textContent = hour.time;
        
        const iconEl = document.createElement("div");
        iconEl.className = "hourly-icon";
        iconEl.innerHTML = weatherIcons[hour.condition] || weatherIcons["Sunny"];
        
        const tempEl = document.createElement("span");
        tempEl.className = "hourly-temp";
        tempEl.textContent = `${formatTemp(hour.temp)}°`;
        
        item.appendChild(timeEl);
        item.appendChild(iconEl);
        item.appendChild(tempEl);
        hourlyContainer.appendChild(item);
    });
}

// Render 7-Day Forecast
function renderWeeklyForecast() {
    if (!currentCity || !currentCity.weekly) return;

    weeklyContainer.innerHTML = "";
    
    const globalMin = Math.min(...currentCity.weekly.map(w => w.min));
    const globalMax = Math.max(...currentCity.weekly.map(w => w.max));
    const globalRange = globalMax - globalMin;
    
    currentCity.weekly.forEach((day) => {
        const row = document.createElement("div");
        row.className = "weekly-row";
        
        const dayEl = document.createElement("span");
        dayEl.className = "weekly-day";
        dayEl.textContent = day.day;
        
        const conditionEl = document.createElement("div");
        conditionEl.className = "weekly-condition";
        conditionEl.innerHTML = `${weatherIcons[day.condition] || weatherIcons["Sunny"]} <span>${day.condition}</span>`;
        
        const tempRangeEl = document.createElement("div");
        tempRangeEl.className = "weekly-temp-range";
        
        const minEl = document.createElement("span");
        minEl.className = "range-min";
        minEl.textContent = `${formatTemp(day.min)}°`;
        
        const barEl = document.createElement("div");
        barEl.className = "range-bar";
        
        const barFillEl = document.createElement("div");
        barFillEl.className = "range-bar-fill";
        
        const leftPercent = globalRange > 0 ? ((day.min - globalMin) / globalRange) * 100 : 0;
        const widthPercent = globalRange > 0 ? ((day.max - day.min) / globalRange) * 100 : 100;
        
        barFillEl.style.left = `${leftPercent}%`;
        barFillEl.style.width = `${widthPercent}%`;
        
        barEl.appendChild(barFillEl);
        
        const maxEl = document.createElement("span");
        maxEl.className = "range-max";
        maxEl.textContent = `${formatTemp(day.max)}°`;
        
        tempRangeEl.appendChild(minEl);
        tempRangeEl.appendChild(barEl);
        tempRangeEl.appendChild(maxEl);
        
        row.appendChild(dayEl);
        row.appendChild(conditionEl);
        row.appendChild(tempRangeEl);
        weeklyContainer.appendChild(row);
    });
}

// Complete Page Refresher
function refreshWeatherPage() {
    if (!currentCity) return;
    updateTheme(currentCity.condition);
    renderMainWeather();
    renderHourlyForecast();
    renderWeeklyForecast();
}

// Helper: client-side mock data retrieval
function loadClientMockData(cityName) {
    const found = clientFallbackDatabase.find(c => c.city.toLowerCase().includes(cityName.toLowerCase()));
    currentCity = found || clientFallbackDatabase[0];
    refreshWeatherPage();
}

// Fetch weather from backend API
async function fetchWeatherData(city) {
    // If protocol is file://, bypass server and load mock data locally immediately
    if (window.location.protocol === 'file:') {
        loadClientMockData(city);
        return;
    }

    try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
        if (!response.ok) throw new Error(`API returned status code: ${response.status}`);
        
        const data = await response.json();
        currentCity = data;
        refreshWeatherPage();
    } catch (error) {
        console.error("Failed to fetch weather data from server. Loading local mock fallback...", error);
        loadClientMockData(city);
    }
}

// Set up UI Event Listeners
function setupEventListeners() {
    unitCBtn.addEventListener("click", () => {
        if (tempUnit !== "C") {
            tempUnit = "C";
            unitCBtn.classList.add("active");
            unitFBtn.classList.remove("active");
            refreshWeatherPage();
        }
    });

    unitFBtn.addEventListener("click", () => {
        if (tempUnit !== "F") {
            tempUnit = "F";
            unitFBtn.classList.add("active");
            unitCBtn.classList.remove("active");
            refreshWeatherPage();
        }
    });

    searchInput.addEventListener("input", async (e) => {
        const query = e.target.value.trim();
        
        if (query.length > 0) {
            clearSearchBtn.style.display = "flex";
            
            // If running offline locally as a file, filter suggestions client-side
            if (window.location.protocol === 'file:') {
                const list = clientFallbackDatabase.filter(c => 
                    c.city.toLowerCase().includes(query.toLowerCase()) || 
                    c.country.toLowerCase().includes(query.toLowerCase())
                );
                showSuggestions(list);
                return;
            }

            try {
                const response = await fetch(`/api/search-cities?q=${encodeURIComponent(query)}`);
                if (response.ok) {
                    const filtered = await response.json();
                    showSuggestions(filtered);
                }
            } catch (err) {
                console.error("Autocomplete search fetch failed. Using local fallback list.", err);
                const list = clientFallbackDatabase.filter(c => 
                    c.city.toLowerCase().includes(query.toLowerCase())
                );
                showSuggestions(list);
            }
        } else {
            clearSearchBtn.style.display = "none";
            hideSuggestions();
        }
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
        hideSuggestions();
        searchInput.focus();
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            hideSuggestions();
        }
    });
}

// Show Autocomplete suggestions box
function showSuggestions(list) {
    suggestionsBox.innerHTML = "";
    
    if (list.length === 0) {
        const query = searchInput.value.trim();
        const customItem = document.createElement("div");
        customItem.className = "suggestion-item";
        
        const nameSpan = document.createElement("span");
        nameSpan.innerHTML = `Search for "<strong>${query}</strong>" via API`;
        
        const codeSpan = document.createElement("span");
        codeSpan.className = "country-code";
        codeSpan.textContent = "API";
        
        customItem.appendChild(nameSpan);
        customItem.appendChild(codeSpan);
        
        customItem.addEventListener("click", () => {
            fetchWeatherData(query);
            searchInput.value = "";
            clearSearchBtn.style.display = "none";
            hideSuggestions();
        });
        
        suggestionsBox.appendChild(customItem);
    } else {
        list.forEach((cityData) => {
            const item = document.createElement("div");
            item.className = "suggestion-item";
            
            const nameSpan = document.createElement("span");
            nameSpan.textContent = `${cityData.city}, ${cityData.country}`;
            
            const codeSpan = document.createElement("span");
            codeSpan.className = "country-code";
            codeSpan.textContent = cityData.code;
            
            item.appendChild(nameSpan);
            item.appendChild(codeSpan);
            
            item.addEventListener("click", () => {
                fetchWeatherData(cityData.city);
                searchInput.value = "";
                clearSearchBtn.style.display = "none";
                hideSuggestions();
            });
            
            suggestionsBox.appendChild(item);
        });
    }
    
    suggestionsBox.classList.add("show");
}

// Hide Autocomplete suggestions box
function hideSuggestions() {
    suggestionsBox.classList.remove("show");
}

// Initialize AeroGlass Weather App
function initApp() {
    setupEventListeners();

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const lat =
                    position.coords.latitude;

                const lon =
                    position.coords.longitude;

                const response =
                    await fetch(
                        `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=en`
                    );

                const data =
                    await response.json();

                const city =
                    data?.results?.[0]?.name ||
                    "Mumbai";

                fetchWeatherData(city);
            } catch {
                fetchWeatherData("Mumbai");
            }
        },
        () => {
            fetchWeatherData("Mumbai");
        }
    );
}

window.addEventListener("DOMContentLoaded", initApp);
