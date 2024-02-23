export function env(keyName: string, optional = false) {
  const value = process.env[keyName];

  if (!value && !optional)
    throw Error(`Environment variable ${keyName} is required`);
  return value as string;
}
