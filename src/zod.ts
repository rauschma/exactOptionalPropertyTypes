import { z } from 'zod';
import type { Assert, Equal } from './asserttt.ts';

type T = {
  prop?: string,
};

// Schema for type `T`
const TSchema = z.object({
  prop: z.string().optional(),
});

// The inferred type is not equal to `T`
type TInferred = z.infer<typeof TSchema>;
type _ = Assert<Equal<
  TInferred,
  {
    prop?: undefined | string,
  }
>>;

// Problem: `TInferred` is not assignable to `T`

// @ts-expect-error: Type '{ prop?: string | undefined; }' is not
// assignable to type 'T' with 'exactOptionalPropertyTypes: true'. Consider
// adding 'undefined' to the types of the target's properties.
const value: T = TSchema.parse({});
