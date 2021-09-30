const jwt = require('jsonwebtoken');

function authMiddleware (req, res, next) { 
    if (req.method === 'OPTIONS') {
     return next()    
    }

    try {
        console.log(req.headers);
        const token = req.headers.authorisation.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ message: 'Нет авторизации' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Нет авторизации!!!' })
    }
};

module.exports = { authMiddleware };