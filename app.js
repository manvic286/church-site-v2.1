const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// const PORT = process.env.PORT || 4001;
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/Events')
//mongoose.connect('mongodb+srv://manuelviotor:charleslwanga@charleslwanga.zj69b.mongodb.net/')
mongoose.connect('mongodb+srv://manuel123:manuel123@cluster0.m5ysuwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


// Schemas
const eventSchema = {
    eventName: String,
    month: String,
    day: Number,
    // date: Date,
    // date: {
    //     type: Date,
    //     get: (date) => date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
    // },
    time: String,
    description: String
    // imageUrl: String
};

const Event = mongoose.model('Event', eventSchema);

// app.get('/', (req, res) => {
//     // res.render('index', {title: "Home"})
//     res.render('addevent', {title: "Create events"})

// })

app.get('/events', (req, res) => {

    Event.find()
        .then(events => {
            res.render('events', { events, title: "Events"})
        })
        // .catch(err => {
        //     console.error('Error fetching events:', err);
        //     res.status(500).send('Error loading events');
        // });
    
})

// app.get('/about', (req, res) => {

//     res.render('about', {title: "About Us"})
// })

app.post('/events', (req, res) => {
    const event = new Event(req.body)

    event.save()
        .then(result => {
            res.redirect('/events');
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/event/:id', (req, res) => {
    const id = req.params.id
    Event.findById(id)
        .then(result => {
            res.render('details', { event: result, title: "Event Details" });
        })
        .catch(err => {
            console.log(err)
        })
});

// app.get('/add-event', (req, res) => {

//     res.render('addevent', {title: "Create events"})
// })

// app.get('/contact', (req, res) => {

//     res.render('contact', {title: "Contact Us"})
// })

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
