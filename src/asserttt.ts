// Excerpt of: https://www.npmjs.com/package/asserttt

export type Assert<_T extends true> = void;
// Trick to trigger strict type equality. Source: https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
  ;
export type LooseEqual<X, Y> =
  [X] extends [Y]
  ? ([Y] extends [X] ? true : false)
  : false
  ;
export type Not<B extends boolean> =
  // `Equal` because want to avoid Not<any> being `false` or `true`
  Equal<B, true> extends true
    ? false
    : (Equal<B, false> extends true ? true : never)
  ;
export type Assignable<Target, Source> = [Source] extends [Target] ? true : false;
