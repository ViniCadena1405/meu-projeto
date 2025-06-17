exports.index = (req, res) => {
    res.render('admin/dashboard', {
        titulo: "Painel de administrador"
    });
}