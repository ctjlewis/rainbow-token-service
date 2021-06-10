module.exports = {
  async headers() {
    return [
      {
        source: '/api/[endpoint]',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=30',
          },
        ],
      },
    ];
  },
}