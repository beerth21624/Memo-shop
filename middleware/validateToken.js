const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authToken = req.headers.token;
  !authToken && res.status(401).json('You are not authenticated!');
  const token = authToken.split(' ')[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    err && res.status(403).json('Token is not valid!!!');
    req.user = user;
    next();
  });
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('you are not allowed!');
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('you are not allowed!');
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
