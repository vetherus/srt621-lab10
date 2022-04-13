const Bookeep = require('../models/Bookeep.model');
module.exports = {
    handleHome: async function (req, res) {
        const books = await Bookeep.find();
        const count = books ? books.length : 0;
        res.render('index', { books, count });
    },
    handleBooks: async function (req, res) {
        const id = req.params.id;
        const book = await Bookeep.findOne({
            _id: id
        })
        
        res.render('book', { book })
    },
    default: async function (req, res) {
        res.redirect("/home");
    }
}