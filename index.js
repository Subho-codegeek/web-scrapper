const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000;

const app = express();

const url = 'https://www.theguardian.com/uk'

axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    $('.fc-item__title', html).each(function () {
        const title = $(this).text();
        const url = $(this).find('a').attr('href');
        articles.push({
            title,
            url
        })
    })
    // app.get('/', (req, res) => {
    //     res.send(()=>{
    //         for (let index = 0; index < articles.length; index++) {
    //             const element = articles[index];


    //         }
    //     });
    // })
    console.log(articles);
}).catch(err => console.log(err))

// app.get('/', (req, res) => {
//     res.send(articles);
// })

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });