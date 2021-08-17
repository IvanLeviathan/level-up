const { Router } = require('express');
const {check} = require('express-validator');

const { registration, login } = require('../../controllers/auth/registration');

const router = Router();

router.post('/registration',[
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
], async (req, res) => registration(req, res));

router.post('/login', async (req, res) => login(req, res));

module.exports = router;