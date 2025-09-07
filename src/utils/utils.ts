export function randomId() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let id = "";

  for (let i = 0; i < 5; i++) {
    const rnd = Math.floor(Math.random() * chars.length);
    id += chars[rnd];
  }

  return id;
}
