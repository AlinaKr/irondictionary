# Irondictionary


## To set up the project with Git

First, create a repository on GitHub and clone the repository.

```sh
$ git clone https://github.com/mc100s/my-project-cloned.git
$ cd my-project-cloned
$ irongenerate --auth .
$ git add .
$ git commit -m "First commit"
$ git push origin master
```

## Iterations

### Iteration 1 | Create the Models and Seeds


### Solution 1

```js
// /models/Entry.js
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const entrySchema = new Schema({
  originalWord: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 1
  },
  convertedWord: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 1
  },
});

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;

```

```js
// /bin/seeds.js
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
```