const { check, checkSchema, validationResult } = require('./check');

const express = require('express');
const app = express();
app.use(express.json());
app.post('/*', [
  check('password')
    // .isLength({min: 6})
    // .withMessage("Minimum Length must be at least 6")
    // .optional({ checkFalsy: true })
    // .custom(() => true)
    ,
  check('passwordConfirmation').custom((value, { req }) => {
      if(req.body.password === value)
          return true;
      else
          throw new Error("Password Doesn't match");
  })
], (req, res) => {
  console.log('body', req.body);
  console.log('query', req.query);
  console.log('headers', req.headers);
  console.log('params', req.params);
  console.log('cookies', req.cookies);
  res.json(validationResult(req).array());
});

app.listen(3000);