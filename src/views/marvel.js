import React from "react";

const LINK_FIELD = 'marvelLink'

const AspectRatio = ({ width, height, children }) => (
  <div style={{ position: "relative", paddingTop: `${100 * height / width}%` }} >
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      {children}
    </div>
  </div>
)
const MarvelInput = ({ identifier, record }) => {
  const setLink = (e) => {
    const value = e.target.value
    record.setExtensionField(identifier, LINK_FIELD, value)
  }

  return (
    <aha-field label="Marvel link">
      <input onBlur={setLink} placeholder="https://marvelapp.com/prototype/..." />
    </aha-field>
  )
}

const MarvelEmbed = ({ src }) => (
  <AspectRatio width="16" height="9">
    <iframe
      src={`${src}?emb=1&iosapp=false&frameless=false`}
      width="100%"
      height="100%"
      allowTransparency={true}
      frameborder="0"
      style={{ "-webkit-clip-path": "inset(2px 2px)", "clip-path": "inset(2px 2px);" }}
    >
    </iframe>
  </AspectRatio>
)

const MarvelAttribute = ({ identifier, record, src }) => {
  const removeLink = () => {
    record.clearExtensionField(identifier, LINK_FIELD)
  }

  if (!src) {
    return <MarvelInput identifier={identifier} record={record} />
  }

  if (src) {
    return (
      <>
        <MarvelEmbed src={src} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <aha-button kind="secondary" size="small" href={src} target="_blank" noreferrer>
            View in Marvel
          </aha-button>
          <aha-button kind="secondary" size="small" onClick={removeLink}>
            Remove
          </aha-button>
        </div>
      </>
    )
  }
}

aha.on("marvel", ({ record, fields, onUnmounted }, { identifier, settings }) => {
  return <MarvelAttribute identifier={identifier} record={record} src={fields.marvelLink} />
});