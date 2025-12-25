---
title: MDBList Lists
---

# MDBList Lists

Agregarr uses the MDBList API, so you must supply an API key before creating collections.

## Prerequisites

1. Sign in at [mdblist.com/api](https://mdblist.com/api/) and generate an API key.
2. In Agregarr open **Settings → Sources → MDBList**, paste the key, test, and save.
3. The same key powers both MDBList collections and the [Network Originals](/docs/sources/originals) source.

## Sub-types

| Option | Description |
| --- | --- |
| Custom List | Mirrors any MDBList list URL |

## Custom Lists

Paste URLs such as `https://mdblist.com/lists/<user>/<list>` and press **Validate**. Agregarr fetches the list title, infers the media type (movies, TV, or mixed), and offers template presets that match the new naming scheme.
