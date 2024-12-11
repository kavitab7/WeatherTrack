const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        await global.db.query(query, [username, email, hashedPassword])

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
};

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const [rows] = await global.db.query('SELECT * FROM users WHERE email = ?', [email])
        if (rows.length === 0) return res.status(404).json({ error: 'User not found' })

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' })

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token, username: user.username });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
};

module.exports = { signup, login };
