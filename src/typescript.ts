// https://www.typescriptlang.org/play/?exactOptionalPropertyTypes=true#code/PTAEFMA8EMGMBcDyAHeBLA9gO2gGwAoBOGy4h8AngCoWkDOAXAFBOWmhUCMoAvKAN5NQoZMWQB+BqDrxCaLAHMANEwC+rWuA4AmXgKEixk0AFcsAE3AAzeeHOgAPtNnzlajewD6egNoGQoIAy5Bzc0BY6oNCEWrDYdGiW0fYycgi4FBAAjiZ4BgCCdHRk8AA8AKLZeCUGwlxKOgYAfI0qwgFckeFUulFaWBjwoLFY8Yl2oLgYGEXpWTm4+YXFJQByAyUAMlNFFfPVwrWc9d1Nza2g7bpodKD9g9CFaAo4AEa4WvAYIYtF5KvrBXiz2gb3A+wOdQawmaLX8YA610ij2BoNAnyhoEBy0BT1e73BtW0x04pxUAF0ANwsNhaLF-TxUCCQeDgCw3WQmcCNPQANwwCSp7VSAGs0V8XAoFGRnKlBjS5ng0JQAHSgADKGBMhFg4CkAAt4PBkIwQAolXqTC9lbEALbAACyaFgxDoGCs8GANFIaudaFQwGudE5dGA2gA7AAGbQAFgAxIHObabaz4ABaaPaTgAVm0AE4AGxZiMeLS7KoADXqAE1uTwDAAKEpURr1gCUvG5jKgLLZoHLoHEoG4Um07e7rPMdAbTZb7Z4naZPcnoCrA6HoBH7cHHK0UiseCKBip8q203AZdwJUrK9rBh85bJi4nNx8VbJBkH9dfj-Hvfvj+3QhOQ3UB91wIpWwMPcD3AI8S1ANZSgAISfXsXimd4wlvNowAAAwvXDQBecBYGgEwilAAB3MI5S+aA+QSBD1jCChuWI1xQFwsCikIjBCE4ndcIMC8SiQ+od25X9lx3Go1242CDhA+sRLE0CYMk5lnzRICtEA4CpCwcAeTISDhGPTRMWRPEwSoKIpXgeoNS1HVa1AHwnO1cAf00v9bMIeyAO0-S1PA8AqSAA

import type { Assert, Equal, Not, Assignable, LooseEqual } from './asserttt.ts';

// exactOptionalPropertyTypes:

type T1 = {
  prop?: string,
}
type T2 = {
  prop?: undefined | string,
}
type _ = [
  // ❌ T1 and T2 are considered strictly equal
  Assert<Equal<
    T1, T2
  >>,
  // T2 is not assignable to T1
  Assert<Not<Assignable<
    T1, T2
  >>>,
  // T1 is assignable to T2
  Assert<Assignable<
    T2, T1
  >>,
  // T1 and T2 are not considered loosely equal
  Assert<Not<LooseEqual<
    T1, T2
  >>>,
];
