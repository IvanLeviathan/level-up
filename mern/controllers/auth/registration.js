const User = require('../../models/auth/index');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function registration(req, res){
  try{
    const errors = validationResult(req);
    if(!errors.isEmpty())
      return res.status(400).json({errors: errors.array(), message: "Некорректные данные при регистрации"});
    

    const {email, password} = req.body;
    const candidate = await User.findOne({email});

    if(candidate)
      return res.status(400).json({message: "Такой пользователь существует"})
    

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({email, password: hashedPassword});
    await user.save();
    return res.status(201).json({message: 'Пользователь создан'});


  } catch(error){
    res.status(500).json({message: "При регистрации что-то пошло не так, попробуйте еще раз" + error.toString()})
  }
}

async function login(req, res){
  try{
    const errors = validationResult(req);
    if(!errors.isEmpty())
      return res.status(400).json({errors: errors.array(), message: "Некорректные данные при регистрации"});
    
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user){
      return res.status(400).json({message: "Пользователь не найден"})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(400).json({message: "Неверный пароль, попробуйте снова"})
    }

    const token = jwt.sign(
      {userId: user.id},
      process.env.JWT_SECRET,
      {expiresIn: "1h"}
    )

    res.json({token, userId: user.id});

  } catch(error){
    res.status(500).json({message: "При авторизации что-то пошло не так, попробуйте еще раз"})
  }
}

module.exports = {registration, login};