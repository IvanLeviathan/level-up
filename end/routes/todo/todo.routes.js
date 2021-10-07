const { Router } = require('express');
const { authMiddleware } = require('../../middleware/auth.middleware');
const { getTodos, createTodo, updateTodo, deleteTodo, getTodo } = require('../../controllers/todo/todo');

const router = Router();

router.post('/create', authMiddleware, async (req, res) => createTodo (req, res));
router.get('/all', authMiddleware, async (req, res) => getTodos (req, res));
router.post('/get', authMiddleware, async (req, res) => getTodo (req, res));
router.post('/update', authMiddleware, async (req, res) =>  updateTodo (req, res));
router.delete('/remove', authMiddleware, async (req, res) =>  deleteTodo (req, res));

module.exports = router;`
`