const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(
    express.static(
        path.join(__dirname, "../frontend")
    )
);

// -------------------------------------
// Helpers
// -------------------------------------

async function fetchJSON(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `Request failed: ${response.status}`
        );
    }

    return response.json();
}

function weatherCodeToCondition(code, isDay = true) {
    if (code === 0) {
        return isDay ? "Sunny" : "Night";
    }

    if ([1, 2, 3].includes(code)) {
        return "Cloudy";
    }

    if (
        [
            45, 48,
            51, 53, 55,
            56, 57,
            61, 63, 65,
            66, 67,
            80, 81, 82
        ].includes(code)
    ) {
        return "Rainy";
    }

    if (
        [
            71, 73, 75,
            77, 85, 86
        ].includes(code)
    ) {
        return "Snowy";
    }

    if (
        [
            95, 96, 99
        ].includes(code)
    ) {
        return "Stormy";
    }

    return "Cloudy";
}

function uvLabel(uv) {
    if (uv <= 2) return "Low";
    if (uv <= 5) return "Moderate";
    if (uv <= 7) return "High";
    if (uv <= 10) return "Very High";
    return "Extreme";
}

function aqiLabel(pm25) {
    if (pm25 <= 12) return "Good";
    if (pm25 <= 35) return "Fair";
    if (pm25 <= 55) return "Moderate";
    if (pm25 <= 150) return "Poor";
    return "Very Poor";
}

function descriptionFromCondition(condition) {
    switch (condition) {
        case "Sunny":
            return "Clear skies with pleasant weather.";

        case "Cloudy":
            return "Cloud cover expected throughout the day.";

        case "Rainy":
            return "Rain is expected. Keep an umbrella nearby.";

        case "Stormy":
            return "Thunderstorm conditions may occur.";

        case "Snowy":
            return "Snowfall expected in the area.";

        case "Night":
            return "Clear night conditions.";

        default:
            return "Weather information available.";
    }
}

// -------------------------------------
// Search Cities
// -------------------------------------

app.get(
    "/api/search-cities",
    async (req, res) => {
        try {
            const query =
                (req.query.q || "").trim();

            if (query.length < 2) {
                return res.json([]);
            }

            const geo =
                await fetchJSON(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
                        query
                    )}&count=5&language=en&format=json`
                );

            const results =
                (geo.results || []).map(city => ({
                    city: city.name,
                    country:
                        city.country ||
                        "",
                    code:
                        city.country_code ||
                        ""
                }));

            res.json(results);
        } catch (err) {
            console.error(err);

            res.json([]);
        }
    }
);

app.get(
    "/api/weather",
    async (req, res) => {
        try {
            const city =
                (req.query.city || "Mumbai")
                    .trim();

            // ---------------------------------
            // Geocoding
            // ---------------------------------

            const geo =
                await fetchJSON(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
                        city
                    )}&count=1&language=en&format=json`
                );

            if (
                !geo.results ||
                !geo.results.length
            ) {
                return res
                    .status(404)
                    .json({
                        error:
                            "City not found"
                    });
            }

            const place =
                geo.results[0];

            const lat =
                place.latitude;

            const lon =
                place.longitude;

            // ---------------------------------
            // Weather Forecast
            // ---------------------------------

            const weather =
                await fetchJSON(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code,uv_index_max&timezone=auto&forecast_days=7`
                );

            // ---------------------------------
            // Air Quality
            // ---------------------------------

            const air =
                await fetchJSON(
                    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm2_5&timezone=auto`
                );

            const currentTemp =
                weather.current
                    .temperature_2m;

            const currentHumidity =
                weather.current
                    .relative_humidity_2m;

            const currentWind =
                weather.current
                    .wind_speed_10m;

            const weatherCode =
                weather.current
                    .weather_code;

            const isDay =
                Boolean(
                    weather.current
                        .is_day
                );

            const condition =
                weatherCodeToCondition(
                    weatherCode,
                    isDay
                );

            // ---------------------------------
            // AQI
            // ---------------------------------

            const pm25 =
                air.hourly.pm2_5?.[0] ??
                0;

            const aqi =
                aqiLabel(pm25);

            // ---------------------------------
            // Hourly
            // ---------------------------------

            const hourly = [];

            const hoursToShow = 8;

            for (
                let i = 0;
                i < hoursToShow;
                i++
            ) {
                const temp =
                    weather.hourly
                        .temperature_2m[
                        i
                    ];

                const code =
                    weather.hourly
                        .weather_code[
                        i
                    ];

                const time =
                    new Date(
                        weather.hourly
                            .time[i]
                    );

                hourly.push({
                    time:
                        i === 0
                            ? "Now"
                            : time.toLocaleTimeString(
                                  "en-US",
                                  {
                                      hour:
                                          "numeric",
                                      hour12:
                                          true
                                  }
                              ),
                    condition:
                        weatherCodeToCondition(
                            code,
                            true
                        ),
                    temp:
                        Math.round(
                            temp
                        )
                });
            }

            // ---------------------------------
            // Weekly
            // ---------------------------------

            const weekly = [];

            for (
                let i = 0;
                i <
                weather.daily.time
                    .length;
                i++
            ) {
                const date =
                    new Date(
                        weather.daily
                            .time[i]
                    );

                weekly.push({
                    day:
                        i === 0
                            ? "Today"
                            : date.toLocaleDateString(
                                  "en-US",
                                  {
                                      weekday:
                                          "short"
                                  }
                              ),
                    condition:
                        weatherCodeToCondition(
                            weather.daily
                                .weather_code[
                                i
                            ],
                            true
                        ),
                    min:
                        Math.round(
                            weather
                                .daily
                                .temperature_2m_min[
                                i
                            ]
                        ),
                    max:
                        Math.round(
                            weather
                                .daily
                                .temperature_2m_max[
                                i
                            ]
                        )
                });
            }

            // ---------------------------------
            // Response
            // ---------------------------------

            const responseData =
                {
                    city:
                        place.name,

                    country:
                        place.country,

                    code:
                        place.country_code,

                    condition,

                    temp:
                        Math.round(
                            currentTemp
                        ),

                    high:
                        Math.round(
                            weather.daily
                                .temperature_2m_max[0]
                        ),

                    low:
                        Math.round(
                            weather.daily
                                .temperature_2m_min[0]
                        ),

                    description:
                        descriptionFromCondition(
                            condition
                        ),

                    humidity:
                        Math.round(
                            currentHumidity
                        ),

                    wind:
                        Math.round(
                            currentWind
                        ),

                    uv: `${Math.round(
                        weather.daily
                            .uv_index_max[0]
                    )} (${uvLabel(
                        weather.daily
                            .uv_index_max[0]
                    )})`,

                    aqi,

                    hourly,

                    weekly
                };

            return res.json(
                responseData
            );
        } catch (error) {
            console.error(
                error
            );

            return res
                .status(500)
                .json({
                    error:
                        "Weather service unavailable"
                });
        }
    }
);

// -------------------------------------
// SPA Fallback
// -------------------------------------

app.get("*", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "../frontend/index.html"
        )
    );
});

// -------------------------------------
// Start Server
// -------------------------------------

app.listen(PORT, () => {
    console.log("");
    console.log(
        "================================="
    );
    console.log(
        " AeroGlass Open-Meteo Server"
    );
    console.log(
        ` http://localhost:${PORT}`
    );
    console.log(
        "================================="
    );
    console.log("");
});