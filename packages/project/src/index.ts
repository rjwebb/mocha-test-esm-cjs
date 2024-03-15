export function foobar() {
  return 10;
}

export async function somethingElse() {
  const { SIWESigner } = await import("@canvas-js/chain-ethereum");
  return SIWESigner.name;
}

export async function bazBar() {
  const { encode } = await import("@ipld/dag-json");
  return encode("hello world");
}

foobar()
somethingElse()
bazBar()
