/**
 * User controller
 */
const Bookkeep = require("../models/Bookeep.model")

module.exports = {
  create: async function create(req, res) {
  let data = req.body;
  try {
    const book = await Bookkeep.create({
      name: data.name,
      author: data.author,
      link: data.link
    })
    return res.status(200).json(book.toJSON())
  } catch (e) {
    return res.status(500).json({ message: "error creating data!", e });
  }
}
}