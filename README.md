# (EN) DATE AND TIME

🔗 ACCESS THIS PROJECT 👉 https://clmateus.github.io/data-e-hora/

This project is a chilling web page that shows the current date and time. These values are shown in portuguese.

![image of date and time](assets/sample.jpg)

Relax and keep the eyes on the time while listening to a 24/7 lo-fi radio.

# TECHNOLOGIES

The page content was made with HTML.
The style of the page was made with CSS.
The clock and the date was made with Javascript.
The background music was made with a Youtube API.

# The logic behind the Javascript

To make the date, i made 2 arrays: one for especify which day of the week the user is, and the second for especify which month of the year the user is. These arrays contains strings with each day name and month name.
For the time, i made 1 function that gets three initial values from the user system: the current hour, minute and second. After that, a "if loop" is responsable to change the inner html and check if the sintax of the time is writen correctly.
To refresh the clock, i made a variable which calls the clock function every second.
The background music uses a Youtube API that embeds a video from Youtube in the page. The video is programmed to start automatically and is hidden through CSS, so the user will only have access to the audio of the video.

# (PT) DATA E HORA

🔗 ACESSE ESSE PROJETO 👉 https://clmateus.github.io/data-e-hora/

Esse projeto é uma relaxante página que mostra o atual horário e data.

Relaxe e não perca a hora enquanto escuta a uma rádio lo-fi ativa 24/7.

# TECNOLOGIAS

O conteúdo da página foi feito com HTML.
O estilo da página foi feito com CSS.
O relógio e a data foi feito com Javascript.
A música de fundo foi feita usando uma API do Youtube.

# A lógica por trás do Javascript

Para fazer a data, eu criei 2 arrays: um para especificar que dia da semana o usuário está, e o segundo para especificar que mês do ano o usuário está. Esses arrays possuem strings com o nome de cada dia e de cada mês.
Para a hora, eu criei uma função que puxa três valores iniciais do sistema do usuário: a atual hora, minuto e segundo. Depois disso, um loop criado com "if" é responsável por modificar o conteúdo HTML da página, além de checar se a sintaxe da hora está escrita corretamente.
Para atualizar o horário, eu criei uma variável que chama a função relógio a cada segundo que passa.
A música de fundo usa uma API do Youtube que insere um vídeo do Youtube na página. Esse vídeo está programado para começar automaticamente, e está escondido através do CSS, então o usuário só terá acesso ao áudio do vídeo.
