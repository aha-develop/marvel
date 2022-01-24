import React from "react";
import { EmbeddedDesignAttribute } from "@aha-app/aha-develop-react";

aha.on("marvel", ({ record, fields }, { identifier }) => {
  const ensureEmbedFlags = async (url) => {
    if (url.includes('emb=1')) {
      return url;
    } else {
      return `${url}?emb=1&ios=false&frameless=false`;
    }
  };

  return (
    <EmbeddedDesignAttribute
      identifier={identifier}
      record={record}
      fields={fields}
      product="Marvel"
      placeholder="https://marvelapp.com/prototype/..."
      onLinkUpdated={ensureEmbedFlags}
    />
  );
});