const User = require('../../models/auth/index');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function registration(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Некорректные данные' })
        };
        const { email, password, name, surname, age, sex, phone } = req.body;
        const candidate = await User.findOne({ email });
        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword, name, surname, age, sex, phone });
        await user.save();
        res.status(201).json({ message: 'Пользователь создан' })
    } catch (error) {
        res.status(500).json({ message: 'При регистрации что-то пошло не так' })
    }
}

async function login(req, res) {
try {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Некорректные данные при входе' })
        };
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден'})
    };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова'})    
    }
    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h'}
    )
    res.json({ token, userId: user.id});
} catch (error) {
    console.log(error);
    res.status(500).json({ message: 'При авторизации что-то пошло не так' })
}
}

async function getUser(req, res) {
    const userId = req.body.userId;
    if(!userId)
        return;

    const user = await User.findOne({ userId });
    if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден'})
    };
    res.json({ user });
}

module.exports = { registration, login, getUser }