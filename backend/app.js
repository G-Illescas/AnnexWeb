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

app.post('/create/users', async (req, res) => {
    const { email, username, password } = req.body;
    const key = dal.generateKey();
    try {
        const user = await dal.createUser(email, key, username, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

app.get('/database/users', async (req, res) => {
    try {
        const users = await dal.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.get('/database/user/:id', async (req, res) => {
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

app.put('/database/edit/user/:id', async (req, res) => {
    try {
        const updatedUser = await dal.updateUserProfile(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

// Book routes
app.post('/create/book', async (req, res) => {
    const { title, author, publisher, pageCount, publicationYear, Img } = req.body;
    try {
        await dal.createBook(title, author, publisher, pageCount, publicationYear, Img);
        res.status(201).json({ message: 'Book created' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
});

app.get('/database/books', async (req, res) => {
    try {
        const books = await dal.getBook();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

app.get('/database/book/:id', async (req, res) => {
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

app.put('/database/edit/book/:id', async (req, res) => {
    try {
        const updatedBook = await dal.updateBook(req.params.id, req.body);
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update book' });
    }
});

app.delete('/database/remove/book/:id', async (req, res) => {
    try {
        await dal.deleteBook(req.params.id);
        res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book' });
    }
});

// Vinyl routes
app.post('/create/vinyl', async (req, res) => {
    const { label, singer, publicationYear, Img } = req.body;
    try {
        await dal.createVinyl(label, singer, publicationYear, Img);
        res.status(201).json({ message: 'Vinyl created' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create vinyl' });
    }
});

app.get('/database/vinyls', async (req, res) => {
    try {
        const vinyls = await dal.getVinyl();
        res.status(200).json(vinyls);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch vinyls' });
    }
});

app.get('/database/vinyl/:id', async (req, res) => {
    try {
        const vinyl = await dal.getVinylById(req.params.id);
        if (vinyl) {
            res.status(200).json(vinyl);
        } else {
            res.status(404).json({ error: 'Vinyl not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch vinyl' });
    }
});

app.put('/database/edit/vinyl/:id', async (req, res) => {
    try {
        const updatedVinyl = await dal.updateVinyl(req.params.id, req.body);
        res.status(200).json(updatedVinyl);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update vinyl' });
    }
});

app.delete('/database/remove/vinyl/:id', async (req, res) => {
    try {
        await dal.deleteVinyl(req.params.id);
        res.status(200).json({ message: 'Vinyl deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete vinyl' });
    }
});

// Game routes
app.post('/create/game', async (req, res) => {
    const { title, studio, digitalCopy, publicationYear, Img } = req.body;
    try {
        await dal.createGame(title, studio, digitalCopy, publicationYear, Img);
        res.status(201).json({ message: 'Game created' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create game' });
    }
});

app.get('/database/games', async (req, res) => {
    try {
        const games = await dal.getGame();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games' });
    }
});

app.get('/database/game/:id', async (req, res) => {
    try {
        const game = await dal.getGameById(req.params.id);
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).json({ error: 'Game not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch game' });
    }
});

app.put('/database/edit/game/:id', async (req, res) => {
    try {
        const updatedGame = await dal.updateGame(req.params.id, req.body);
        res.status(200).json(updatedGame);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update game' });
    }
});

app.delete('/database/remove/game/:id', async (req, res) => {
    try {
        await dal.deleteGame(req.params.id);
        res.status(200).json({ message: 'Game deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete game' });
    }
});

// Game routes
app.post('/create/comic', async (req, res) => {
    const { title, author, publisher, digitalCopy, pageCount, publicationYear, Img } = req.body;
    try {
        await dal.createComic(title, author, publisher, digitalCopy, pageCount, publicationYear, Img);
        res.status(201).json({ message: 'Comic created' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create comic' });
    }
});

app.get('/database/comics', async (req, res) => {
    try {
        const comics = await dal.getComic();
        res.status(200).json(comics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comics' });
    }
});

app.get('/database/comic/:id', async (req, res) => {
    try {
        const comic = await dal.getComicById(req.params.id);
        if (comic) {
            res.status(200).json(comic);
        } else {
            res.status(404).json({ error: 'Comic not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comic' });
    }
});

app.put('/database/edit/comic/:id', async (req, res) => {
    try {
        const updatedComic = await dal.updateComic(req.params.id, req.body);
        res.status(200).json(updatedComic);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update comic' });
    }
});

app.delete('/database/remove/comic/:id', async (req, res) => {
    try {
        await dal.deleteComic(req.params.id);
        res.status(200).json({ message: 'Comic deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete comic' });
    }
});


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});