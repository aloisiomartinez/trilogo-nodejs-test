// const jwt = require('jwt-then');

// const authConfig = require('../../config/auth');

// module.exports = async (req, res, next) => {
//   try {
//     // eslint-disable-next-line no-throw-literal
//     console.log('reqqq', req.headers);
//     if (!req.headers.authorization) throw 'Sem Tokken!';
//     const token = req.headers.authorization.split(' ')[1];
//     console.log('TOKENNNN', token);
//     const payload = await jwt.verify(token, authConfig.secret);
//     req.payload = payload;
//     next();
//   } catch (err) {
//     res.status(401).json({
//       message: 'Erro no Token ',
//     });
//   }
// };
