---
layout: post
title:  "Telegrambot"
summary: "chatbot with API's"
date:   2023-07-02 10:00:00
preview: /assets/telegrambot3.png
---

![Picture 3](/assets/telegrambot3.png)

Project Date: ~2017-2020

<a href="https://github.com/Crare/telegrambot" target="_blank">Source Code</a>

While I was working at SuperApp at Lahti, Finland in 2017-2018. I traveled via train from Helsinki to there. I had spare time sometimes available on the train ride and other freetime when I started working on this chatbot. 

It's a chatbot that was running on one of my <a href="https://www.raspberrypi.com/" target="_blank">Raspberry Pi's</a>. You could send a message with <a href="https://core.telegram.org/api" target="_blank">Telegram-app</a> from smartphone and it responded back with messages. It was very useful to see train timetable and where they left in a whim and easily. Then I added a lot of other features to it too. We used to have version of this running at work so everyone could use it.

I learned a lot about API's and cronjobs and Linux while working on it.

It uses many Open API's such as <a href="https://www.digitraffic.fi/en/railway-traffic/" target="_blank">Digitraffic's Train traffic data</a>, weather forecasts from <a href="https://openweathermap.org/api" target="_blank">openweathermap.org</a> and even <a href="https://yle.fi/uutiset/rss" target="_blank">YLE news</a>. You could see upcoming movies from TV with Leffatykki's API(seems to be not available anymore) and <a href="https://ruuvi.com/" target="_blank">Ruuvitags</a> were also implemented to it.

Here's few examples of what it can do:

weather data at given location:

![Picture 4](/assets/telegrambot4.png)

setting reminders, either with time range in hours and minutes etc. or with specific time in clock:

![Picture 1](/assets/telegrambot.png)
![Picture 2](/assets/telegrambot2.png)

Project <a href="https://github.com/Crare/telegrambot" target="_blank">source code is available on github</a> if you are interested. It is outdated though and needs a major rework to work properly. Also you need to setups couple of API-keys to make it work. I might resurrect this project at some point.