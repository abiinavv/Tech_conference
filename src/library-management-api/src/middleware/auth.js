import jwt from 'jsonwebtoken';

// Function to generate a JWT
const login = (req, res) => {
  const user = { id: 1, username: 'user' }; // Example user object
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

// Middleware to authenticate JWT
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Only export authenticateToken if you want it to be available for import
export default authenticateToken;
