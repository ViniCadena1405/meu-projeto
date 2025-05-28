exports.index = (req, res) => {
    res.render("pages/login", {
        titulo: "Login",
        mensagem: "Faça login para entrar na lista"
    })
}