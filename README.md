# posdoc

This repository now includes end-user documentation built with **MkDocs Material**.

## Preview documentation locally

```bash
pip install mkdocs-material
mkdocs serve
```

Then open `http://127.0.0.1:8000`.

## Publish a documentation release

Push a semver tag in the form `vMAJOR.MINOR.PATCH` to build the user guide and
attach the generated HTML archive to the matching GitHub release:

```bash
git tag v1.0.0
git push origin v1.0.0
```