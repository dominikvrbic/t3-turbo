import { inferProcedureInput } from '@trpc/server';
import { expect, test } from 'vitest';

import { createContext } from '../context';
import { postRouter, PostRouter } from './post';

test('add and get post', async () => {
  const ctx = await createContext();
  const postCaller = postRouter.createCaller(ctx);

  const input: inferProcedureInput<PostRouter['create']> = {
    content: 'hello test',
    title: 'hello test',
  };
  const post = await postCaller.create(input);
  const byId = await postCaller.byId(post.id);

  expect(byId).toMatchObject(input);
});
