const servers = [
  {
    url: 'https://api-ponto-de-venda.onrender.com',
    description: 'Server de produção',
  },
  {
    url: `http://localhost:${process.env.PORT || 3000}`,
    description: 'Server de desenvolvimento',
  },
];

module.exports = servers;
