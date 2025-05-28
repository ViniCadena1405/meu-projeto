exports.index = (req, res) => {
    res.render("pages/home", {
        titulo: "Home",
        mensagem: "Bem vindo á pagina inicial"
    })
}