const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) return res.status(401).json({ message: "Missing token" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { id, role, iat, exp }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
// citizen token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkNJVElaRU4iLCJpYXQiOjE3NzA5MDEyMDgsImV4cCI6MTc3MTUwNjAwOH0.11c_mszfxL-N5sVGJyhe_Prqbf1kFDIYyAsaDOzkkJo
//admin token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzcwOTcwODQxLCJleHAiOjE3NzE1NzU2NDF9.bfNcIXmRDgbB7gvhRWnoLo9JEMJlAj5HbrZDGBfC1ao
//collector token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IkNPTExFQ1RPUiIsImlhdCI6MTc3MDk3NTE2MywiZXhwIjoxNzcxNTc5OTYzfQ.Jg9cxxA9lMcW6Zzd3m-C_6SVQZAKkj5Bnj2pAbDkdbU