module.exports = (req, res, next) => {
    return res.status(200).send({code : 1 , message : "Bienvenidos al Pokedex"});
}