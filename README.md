# Rumbia POS User Guide

Dokumentasi resmi **Rumbia POS** dibangun menggunakan **MkDocs Material** dan
dapat diekspor sebagai HTML statis untuk distribusi web atau offline.

## Preview documentation locally

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Then open `http://127.0.0.1:8000`.

## Build HTML statis

```bash
mkdocs build
```

Perintah tersebut menghasilkan folder `site/` yang berisi seluruh halaman
HTML, aset, dan search index.

## Publish a documentation release

Push a semver tag in the form `vMAJOR.MINOR.PATCH` to build the user guide and
attach the generated HTML archive to the matching GitHub release:

```bash
git tag v1.0.0
git push origin v1.0.0
```