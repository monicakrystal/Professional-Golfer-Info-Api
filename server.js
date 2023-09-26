const express = require('express');
const app = express();
const PORT = 8000;

const golfers = {
    'tiger woods': {
    'golferName': 'Tiger Woods',
    'height': "6'1\"",
    'age': 47,
    'birthDate': 'December 30, 1975',
    'astrologicalSign': 'Capricorn',
    'birthLocation': 'Cypress, California',
    'photo':'images/tiger.png'
    },
    'rory mcilroy': {
        'golferName': 'Rory McIlroy',
        'height': "5'9\"",
        'age': 34,
        'birthDate':'May 4, 1989',
        'astrologicalSign': 'Taurus',
        'birthLocation': 'Holywood, County Down, Northern Ireland',
        'photo':'images/rory.jpg'
    }, 
     'jon rahm': {
        'golferName': 'Jon Rahm',
        'height': "6'2\"",
        'age': 28,
        'birthDate':'November 10, 1994',
        'astrologicalSign': 'Scorpio',
        'birthLocation': 'Barrika, Basque County, Spain',
        'photo':'images/jon.png'
    }, 
     'nelly korda': {
        'golferName': 'Nelly Korda',
        'height': "5'10\"",
        'age': 25,
        'birthDate':'July 28, 1998',
        'astrologicalSign': 'Leo',
        'birthLocation': 'Bradenton, Florida, USA',
        'photo':'images/nelly.png'
    },
     'unknown': {
        'golferName': 'unknown',
        'height':'unknown',
        'age': 'unknown',
        'birthDate':'unknown',
        'astrologicalSign': 'unknown',
        'birthLocation': 'unknown',
        'photo':'unknown'
        
    }    
    
}

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Server is running')
})

app.get('/api/:golferName', (request, response) => {
    const golferInfo = request.params.golferName.toLowerCase()
    if(golfers[golferInfo]){
        response.json(golfers[golferInfo])
    } else{
        response.json(golfers['unknown'])
    }
})

