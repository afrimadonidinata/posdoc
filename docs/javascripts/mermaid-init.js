import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11.12.0/+esm";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "strict"
});

document$.subscribe(() => {
  const diagrams = document.querySelectorAll(".mermaid:not([data-processed])");

  if (diagrams.length > 0) {
    mermaid.run({ nodes: diagrams });
  }
});
