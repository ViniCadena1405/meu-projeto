const Assinatura = require("../models/assinatura");

exports.index = async (req, res) => {
  const assinantes = await Assinatura.findAll();
  res.render('assinantes/index', {assinantes});
};

exports.store = async (req, res) => {
  await Assinatura.create(req.body);
  res.redirect('/assinantes');
};

exports.update = async (req, res) => {
  const {user_id} = req.params;
  await Assinatura.update(user_id, req.body);
  res.redirect('/assinantes');
};

exports.destroy = async (req, res) => {
  const {user_id} = req.params;
  await Assinatura.delete(user_id);
  res.redirect('/assinantes');
};