import NextAuth from 'next-auth/next';
import TwitterProvider from 'next-auth/providers/twitter';

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.CLIENT_ID ?? '',
      clientSecret: process.env.CLIENT_SECRET ?? '',
      version: '2.0',
    }),
  ],
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.id = profile.id;
  //     }
  //     return token;
  //   },
  // },
  // onError(error, _, res) {
  //   res.status(500).json({ error: `Authentication failed: ${error.message}` });
  // },
});

export { handler as GET, handler as POST };
