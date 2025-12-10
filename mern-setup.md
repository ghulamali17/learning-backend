
---

## **2. Backend Setup**

1. **Initialize Node project**

```bash
mkdir backend
cd backend
npm init -y
npm install express mongoose cors dotenv
npm install nodemon --save-dev
```

2. **server.js**

```js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const notesRoutes = require('./routes/notes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.log(err));
```

3. **Note model (`models/Note.js`)**

```js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
```

4. **Routes (`routes/notes.js`)**

```js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET all notes
router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

// POST new note
router.post('/', async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.json(note);
});

// DELETE note
router.delete('/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
});

module.exports = router;
```

5. **.env file**

```
MONGO_URI=your_mongodb_connection_string
```

6. **package.json scripts**

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## **3. Frontend Setup (React)**

1. **Create React app**

```bash
npx create-react-app frontend
cd frontend
npm install axios
```

---

