import { inferProcedureInput } from '@trpc/server';
import { expect, test } from 'vitest';

import { AppRouter, appRouter } from '.';
import { createContext } from '../context';

test('add and get post', async () => {
  const ctx = await createContext({} as any);
  const postCaller = appRouter.post.createCaller(ctx);

  const input: inferProcedureInput<AppRouter['post']['create']> = {
    content: 'hello test',
    title: 'hello test',
  };
  const post = await postCaller.create(input);
  const byId = await postCaller.byId(post.id);

  expect(byId).toMatchObject(input);
});
