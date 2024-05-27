const { mongoose, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const connectionStringz = "mongodb+srv://johnstonharlea:I62V4Lsg3tjSkxzC@cluster0.ryaxisq.mongodb.net/dart_DB?";
const collectionOne = "Users";
const collectionTwo = "Books";
const collectionThree = "Vinyls";
const collectionFour = "Games"
const collectionFive = "Comics"

mongoose.connect(connectionStringz, {useUnifiedTopology: true, useNewUrlParser: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongoose Connected")
});

const users = new Schema({
    Key: String,
    Gmail: String,
    Username: String,
    Img: String,
    Password: String,
},
    { collection: collectionOne }
);
const UserModel = mongoose.model("user", users);


const books = new Schema({
    title: String,
    author: String,
    publisher: String,
    pageCount: String,
    publicationYear: String,
    Img: String,
},
    { collection: collectionTwo}
);
const BookModel = mongoose.model("book", books);


const vinyls = new Schema({
    label: String,
    singer: String,
    publicationYear: String,
    Img: String,
},
    { collection: collectionThree }
);
const VinylModel = mongoose.model("vinyl", vinyls);


const videoGames = new Schema({
    title: String,
    studio: String,
    digitalCopy: Boolean,
    publicationYear: String,
    Img: String,
},
    { collection: collectionFour }
);
const GameModel = mongoose.model("game", videoGames);


const comics = new Schema({
    title: String,
    author: String,
    publisher: String,
    digitalCopy: Boolean,
    pageCount: String,
    publicationYear: String,
    Img: String,
},
    { collection: collectionFive }
);
const ComicModel = mongoose.model("comic", comics);

exports.DAL = {
    //Post Dal Stuff
    createBook: (bookTitle, bookAuthor, bookPublisher, bookCount, bookYear, Img) => {
        let Books = {
            bookTitle: bookTitle,
            bookAuthor: bookAuthor,
            bookPublisher: bookPublisher,
            bookCount: bookCount,
            bookYear: bookYear,
            Img: Img
        }
        BookModel.collection.insertOne(Books);
    },
    deleteBook: async (id) => {
        await BookModel.deleteOne({ _id: id }).exec();
        
    },
    updateBook: async (id, data) => {
        try {
            const updatedData = await BookModel.findOneAndUpdate(
                { _id: id }, data, { new: true }
            );
        return updatedData;
        } 
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    getBook: async () => {
        let filter = {};
        return await BookModel.find(filter).exec();
    },
    getBookById: async (id) => {
        return await BookModel.findById(id).exec();
    },

    createVinyl: (vinylLabel, vinylSinger, vinylYear, Img) => {
        let Vinyls = {
            vinylLabel: vinylLabel,
            vinylSinger: vinylSinger,
            vinylYear: vinylYear,
            Img: Img
        }
        VinylModel.collection.insertOne(Vinyls);
    },
    deleteVinyl: async (id) => {
        await VinylModel.deleteOne({ _id: id }).exec();
        
    },
    updateVinyl: async (id, data) => {
        try {
            const updatedData = await VinylModel.findOneAndUpdate(
                { _id: id }, data, { new: true }
            );
        return updatedData;
        } 
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    getVinyl: async () => {
        let filter = {};
        return await VinylModel.find(filter).exec();
    },
    getVinylById: async (id) => {
        return await VinylModel.findById(id).exec();
    },

    createGame: (gameTitle, gameStudio, gameCopy, gameYear, Img) => {
        let Games = {
            gameTitle: gameTitle,
            gameStudio: gameStudio,
            gameCopy: gameCopy,
            gameYear: gameYear,
            Img: Img
        }
        GameModel.collection.insertOne(Games);
    },
    deleteGame: async (id) => {
        await GameModel.deleteOne({ _id: id }).exec();
        
    },
    updateGame: async (id, data) => {
        try {
            const updatedData = await GameModel.findOneAndUpdate(
                { _id: id }, data, { new: true }
            );
        return updatedData;
        } 
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    getGame: async () => {
        let filter = {};
        return await GameModel.find(filter).exec();
    },
    getGameById: async (id) => {
        return await GameModel.findById(id).exec();
    },

    createComic: (comicTitle, comicAuthor, comicPublisher, comicCopy, comicCount, comicYear, Img) => {
        let Comics = {
            comicTitle: comicTitle,
            comicAuthor: comicAuthor,
            comicPublisher: comicPublisher,
            comicCopy: comicCopy,
            comicCount: comicCount,
            comicYear: comicYear,
            Img: Img
        }
        ComicModel.collection.insertOne(Comics);
    },
    deleteComic: async (id) => {
        await ComicModel.deleteOne({ _id: id }).exec();
        
    },
    updateComic: async (id, data) => {
        try {
            const updatedData = await ComicModel.findOneAndUpdate(
                { _id: id }, data, { new: true }
            );
        return updatedData;
        } 
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    getComic: async () => {
        let filter = {};
        return await ComicModel.find(filter).exec();
    },
    getComicById: async (id) => {
        return await ComicModel.findById(id).exec();
    },



    //User Dal Stuff
    getUserByEmail: async (email) => {
        return await UserModel.findOne({ Gmail: email }).exec();
    },
    updateUserProfile: async (userId, updatedUserData) => {
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(
                userId, { $set: updatedUserData }, { new: true }
            ).exec();
        return updatedUser;
        } 
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    getUserById: async (userId) => {
        try {
            const user = await UserModel.findById(userId).exec();
            return user;
        } 
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    getAllUsers: async () => {
        try {
            const users = await UserModel.find(); 
            return users;
        } 
        catch (error) {
            throw error;
        }
    },
    generateKey: () => {
        return uuidv4();
    },
    createUser: async (email, key, username, password) => {
        let newUser = {
            Key: key,
            Gmail: email,
            Username: username,
            Img: "/images/profile-pictures/default-user.png", 
            Password: await bcrypt.hash(password, 10),
        };
        try {
            const result = await UserModel.create(newUser); 
            return result; 
        } 
        catch (error) {
            console.log("Error creating user:", error);
            throw error;
        }
    },
    isKeyValid: (key) => {
        console.log("isKeyValid" + key);
        let result = key === "ndkl-dkfd-ekrg-ewld";
        console.log("isKeyValid result");
        return result;
    },
    comparePasswords: async (inputPassword, hashedPassword) => {
        return await bcrypt.compare(inputPassword, hashedPassword);
    },
    filename: function (req, file, cb) {
        const sanitizedFilename = sanitize(file.originalname);
        cb(null, sanitizedFilename);
    },
};
