import { postRouter } from '../post/router';
import { router } from '../trpc';
import { authRouter } from './auth';

export const appRouter = router({
  post: postRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
