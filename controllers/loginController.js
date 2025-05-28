const validado = {
    username: "Balti Rusu",
    age: 74,
    country: "Moldávia",
    profession: "Aposentada",
    phonenumber: "+373(50) 74983-9380"
};

exports.fazerLogin = (req, res) => {
    res.render('login', {error: null});
}

exports.loginProcesso = (req, res) => {
    const {username, age, country, profession, phonenumber} = req.body;

    if(!username || !age || !country || !profession || !phonenumber) {
        return res.render('login', {error: 'Preencha todos os campos'});
    }

    if(username === validado.username && age === validado.age && country === validado.country && profession === validado.profession && phonenumber === validado.phonenumber) {
        return res.render('home', {username})
    }

    else {
        return res.render('login', { error: 'Usuário, idade, país, profissão ou telefone incorretos.' });
    }
}