---
sidebar_position: 6
title: Placeholder Docker Volumes
---

# Placeholders - Docker Volume Requirements

The **Placeholder creation** option creates placeholder files in your media directories so they appear in Plex before content is actually released for the **Coming Soon** collections, or for any content unavailable on your server from any list. This requires Agregarr to have filesystem access to the same media folders that Plex can scan.

Without proper volume mounting, Agregarr cannot write to your media folders and the Placeholder creation feature will not work.

You first need to mount your volumes in your docker-compose.yml file, replacing the paths to your actual paths (see below).

It is recommended to use separate folders for placeholder files, and add these to your Plex Library, but not to Radarr/Sonarr.

```yaml title="docker-compose.yaml"
services:
  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    volumes:
      # Config path
      - /path/to/config:/app/config # Change /path/to/config to your actual config path

      // highlight-start
      # Placeholder paths
      # Linux/Mac: 
      - /path/to/placeholders/movies:/data/movies # Change /path/to/placeholders/movies to your actual placeholders movies folder path
      - /path/to/placeholders/tv:/data/tv # Change /path/to/placeholders/tv to your actual placeholders tv folder path

      # Windows:
      - E:\media\placeholders\movies:/data/movies # Change E:\media\placeholders\movies to your actual placeholders movies folder path
      - E:\media\placeholders\tv:/data/tv # Change E:\media\placeholders\tv to your actual placeholders tv folder path
      // highlight-end
    environment:
      - TZ=Pacific/Auckland # Set to your local timezone for accurate poster overlay release dates/countdowns - see 'TZ Identifier' column here https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    ports:
      - 7171:7171
    restart: unless-stopped
```

Then, under `Settings > Downloads > Placeholder Root Folders`, select the container path you created above, `/data/movies` for Movies, and `/data/tv` for TV Shows. That's it! Placeholders can now be created in Plex to show unreleased/unavailable content.

## Example Final Setup

Plex has your normal media folders `E:\media\movies` and `E:\media\tv`. You create new folders `E:\media\placeholders\movies` and `E:\media\placeholders\tv`, and add these to Plex. You do NOT add these to Radarr/Sonarr.

In your docker compose you add these lines to your volumes

```yaml
      volumes:
      # - C:\existing\config\path:/app/config
        - E:\media\placeholders\movies:/data/movies
        - E:\media\placeholders\tv:/data/tv
```

Then in Agregarr you would select `/data/movies` and `/data/tv` as your root folders.

## Understanding Docker Volumes

Docker fundamentally runs each app in 'containers', this is an isolated environment and for it to see anything outside of its container, you must give it specific access. 

We do this by mounting 'volumes'. A volume in your `docker-compose.yml` file looks like

`- /mnt/media/placeholders/movies:data/movies`  
  or for Windows  
`- E:\media\placeholders\movies:data/movies`  

Where it is made up of two parts divided by the `:`

The first part `E:\media\placeholders\movies` is your actual path in your local machine, this is what you would normally browse to in your computers file explorer. 

The second part `data/movies` is the containers path, which is what the container can see. When we mount a volume, all we are doing is telling the container that `/data/movies` is actually `E:\media\placeholders\movies`. You can name the second part anything you want, for example

`- E:\media\placeholders\movies:/banana`  
`- E:\media\placeholders\tv:/orange/house`

is perfectly valid. You would then in Agregarr under Settings -> Downloads -> Placeholders Root Folder select `/banana` as your movies folder, and `/orange/house` as your tv folder.
