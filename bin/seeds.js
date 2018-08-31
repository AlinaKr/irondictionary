const mongoose = require('mongoose');
const Entry = require('../models/Entry');

mongoose
.connect('mongodb://localhost/irondictionary', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

let entriesToCreate = [
  {
    originalWord: "hello",
    convertedWord: "salut",
  },
  {
    originalWord: "today",
    convertedWord: "aujourd'hui",
  },
  {
    originalWord: "bye",
    convertedWord: "salut",
  },
  {
    originalWord: "world",
    convertedWord: "monde",
  }
]

Entry.deleteMany()
.then(() => Entry.create(entriesToCreate))
.then(entries => {
  console.log(entries.length + ' entries created')
  mongoose.disconnect()
})

// setTimeout(() => {
//   mongoose.disconnect()
// }, 2000)