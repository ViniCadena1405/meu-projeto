exports.index = (req, res) => {
    res.render("pages/sobre", {
        titulo: "Sobre",
        descricao: "Obtenha informações sobre o site aqui"
    })
}