exports.index = (req, res) => {
    res.render('pages/login', {
        error: null,
        titulo: "Login"
    });
}