import NextAuth from 'next-auth';
import { Employee } from '.';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    user: {
      employee: Employee;
    };
  }
}
