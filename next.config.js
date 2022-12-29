module.exports = {
  async redirects() {
    return [
      {
        source: '/adm',
        destination: '/adm/casas',
        permanent: true,
      },
    ];
  },
};
