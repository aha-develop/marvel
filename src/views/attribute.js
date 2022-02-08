import React from "react";
import { EmbeddedContentAttribute } from "@aha-app/aha-develop-react";
import { ensureEmbedFlags } from "../ensureEmbedFlags";

aha.on("marvelAttribute", ({ record, fields }, { identifier }) => {
  return (
    <EmbeddedContentAttribute
      identifier={identifier}
      record={record}
      fields={fields}
      product="Marvel"
      placeholder="https://marvelapp.com/prototype/..."
      onLinkUpdated={ensureEmbedFlags}
    />
  );
});