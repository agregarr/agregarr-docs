---
sidebar_position: 1
title: Collection Sources
---

# Collection Sources

Every collection in Agregarr begins by choosing a source. Some providers work instantly, others need API keys or service credentials. Use the table below to see what each source offers and whether you must configure anything under **Settings** before building a collection. Once you pick a source, tailor the collection with the options covered in the [Collection Options](/docs/options/overview) section.

| Source | Requires Setup? | Highlights | Documentation |
| --- | --- | --- | --- |
| TMDB Lists | No | Trending, popular, top-rated, custom and random TMDB collections | [TMDB Lists](/docs/sources/tmdb) |
| IMDb Lists | No | IMDb Top 250, popularity, box office, custom and random lists | [IMDb Lists](/docs/sources/imdb) |
| Letterboxd Lists | No | Public Letterboxd lists with optional random rotation | [Letterboxd Lists](/docs/sources/letterboxd) |
| AniList | No | Trending, popular, top-rated, and custom AniList lists | [AniList](/docs/sources/anilist) |
| Network Top 10 | No | Daily streaming charts by country and platform (FlixPatrol) | [Network Top 10](/docs/sources/networks) |
| Trakt Lists | Trakt Client ID | Trending, popularity, time-period charts, custom and random lists | [Trakt Lists](/docs/sources/trakt) |
| MDBList Lists | MDBList API key | Community curated MDBList lists (also powers Network Originals) | [MDBList Lists](/docs/sources/mdblist) |
| Network Originals | MDBList API key | Netflix, Disney+, Prime Video, HBO Max, etc. originals | [Network Originals](/docs/sources/originals) |
| MyAnimeList | MyAnimeList Client ID | Official MAL charts (top, airing, movies, OVA, specials) | [MyAnimeList](/docs/sources/myanimelist) |
| Overseerr Requests | Overseerr host + API key | Global, server-owner, or per-user request collections | [Overseerr Requests](/docs/sources/overseerr) |
| Tautulli Statistics | Tautulli host + API key | Most popular by play count or watch duration | [Tautulli Statistics](/docs/sources/tautulli) |
| Radarr & Sonarr Tags | Radarr/Sonarr servers | Mirror tagged items from Radarr or Sonarr | [Radarr & Sonarr Tags](/docs/sources/radarr-sonarr-tags) |
| Coming Soon | Radarr/Sonarr and/or Trakt | Upcoming releases with placeholders, overlays, trailers | [Coming Soon](/docs/sources/coming-soon) |
| Multi-source Collections | Depends on chosen sources | Combine multiple feeds with interleaving, cycling, or randomisation | [Multi-source Collections](/docs/sources/multi-source) |

## Validation & Random Lists

Many sources support **Custom Lists**. Paste a public URL and click **Validate** so Agregarr can fetch the list title and detect media types.

Several providers also expose **Random Lists** sub-types. Enable them by editing the matching file under `/config/random-lists/<source>.txt` and setting `enabled=true`, or rely on Agregarr discovery which refreshes cached lists roughly every 30 days.
