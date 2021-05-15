const JWT = require("jsonwebtoken");

const issueJWT = (user) => {
  const _id = user._id;

  const expiresIn = process.env.EXPIRES_IN;

  const payload = {
    addedBy: user.addedBy,
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = JWT.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

module.exports = issueJWT;