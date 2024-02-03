const express = require('express');

const router = express();

router.get('/', (req, res) => {
  return res.status(200).send({
    name: 'API Loja Virtual',
    about: 'Uma API com todas as funcionalidades necessárias em uma loja virtual.',
  });
});

module.exports = router;
