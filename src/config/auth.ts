export default {
    jwt: {
      secret: process.env.APP_SECRET || 'SECRET21231231231321231231231231',
      expiresIn: '1d',
    },
  };