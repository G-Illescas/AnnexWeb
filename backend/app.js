const express = require("express");
const dal = require ("./DAL").DAL;
const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/collections", async (req, res) => {
    try{
        const getCollection = await dal.getBook() && dal.getComic() && dal.getGame() && dal.getVinyl();
        return res.json(getCollection);
    }
    catch (e) {
        console.log(e);
    }
});

app.post('/users', async (req, res) => {
    const { email, username, password } = req.body;
    const key = dal.generateKey();
    try {
        const user = await dal.createUser(email, key, username, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await dal.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await dal.getUserById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await dal.updateUserProfile(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

// Book routes
app.post('/books', async (req, res) => {
    const { title, author, publisher, pageCount, publicationYear, Img } = req.body;
    try {
        await dal.create(title, author, publisher, pageCount, publicationYear, Img);
        res.status(201).json({ message: 'Book created' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
});

app.get('/books', async (req, res) => {
    try {
        const books = await dal.getBook();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const book = await dal.getBookById(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book' });
    }
});

app.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await dal.update(req.params.id, req.body);
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update book' });
    }
});

app.delete('/books/:id', async (req, res) => {
    try {
        await dal.delete(req.params.id);
        res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book' });
    }
});


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});