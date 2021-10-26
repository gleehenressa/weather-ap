const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=adf0f028dde665a93fd790031646f51f&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})