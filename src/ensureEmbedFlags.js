export const ensureEmbedFlags = (url) => {
  if (url.includes('emb=1')) {
    return url;
  } else {
    return `${url}?emb=1&ios=false&frameless=false`;
  }
};