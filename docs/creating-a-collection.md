---
sidebar_position: 3
title: Creating Your First Collection
---

# Creating Your First Collection

Now you can create your first Agregarr Collection

## Basic Setup

1. Click **+ Add Collection** to start creating a new collection
2. **Collection Type**: Choose the source for your collection (e.g., TMDB Lists, Trakt Lists, Custom Lists)
3. **Sub-Type**: Select the specific type of collection from your chosen source
4. **Libraries**: Select which Plex libraries this collection should appear in (Movies and/or TV)

## Collection Settings

### Title

Give your collection a name. Some collection types offer preset names, or you can enter your own custom title.

:::note Tip
If you name collections the same in both Movies and TV libraries, Plex will link them together when viewing. However, you should never have two collections with the same name in the same library, as Plex gets confused.
:::

### Visibility

Choose where the collection appears:
- **Users Home** - Main Plex Home screen for users (other than server owner)
- **Sever Owner Home** - Main Plex Home screen for Plex server owner
- **Recommended** - Library Recommended tab for everyone

:::note Tip
If users haven't pinned your Library to their Home screen, Library Recommended is the main section they will see when they view your server. It is recommended to always have your main Home content also included in the Library Recommended.
:::

Collections will always be visible in the Library and Collections Tabs.

:::note Warning
You need Plex Pass to promote Collections to the Home/Recommended screens
:::

### Max Items

How many items to show. Agregarr will try to fill the collection to this number from items further down the list. If new items get added, filled items will be removed from the collection on the next sync.

### Unwatched Only

Enable this to create a smart collection that only shows unwatched content. This uses labels to create a smart collection with the unwatched filter.

Each user viewing the collection sees their own unwatched items.

### Posters

- **Auto-Poster**: Generate from a poster template (create templates in Posters page or use Agregarr default)
- **Upload Custom**: Upload your own poster

### Time Restrictions

Schedule when the collection is visible:

- **Date ranges**: Oct 1 - Oct 31 for Halloween collections
- **Days of week**: Weekends only, specific days

When inactive, choose to either remove the collection entirely or just change its visibility.

### Custom Sync Schedule

This overrides the main sync schedule (default 12 hours), if you want the collection to be synced more or less frequently.

To configure the main sync schedule from the defualt 12 hours, go to Settings → Jobs.

## Download Settings

### Enable Auto-Download

If you want Agregarr to automatically grab missing items from this collection.

### Filters

Control what gets downloaded:

**Position Limit**: E.g. Only download top 10 items (prevents downloading entire lists)

**Release Year**: Only download items newer than this year

**Season Count** (TV only): Max number of seasons (e.g. set to 10 to avoid talk shows, or use genre filters below)

**Genre**: Exclude specific genres

**Country**: Exclude specific origin country

### Download Method

**Radarr/Sonarr**:
- Select which server (if you have multiple)
- Choose quality profile
- Choose root folder

**Overseerr**:
- Enable/disable auto-approve
- Manual approval lets you review before downloading

## Preview and Save

Before saving, click **Preview** to see:
- All items in the collection
- Which you already have
- Manually download individual items if you don't want to use auto-download

Click **Save**, on the next scheduled sync the collection will be created in Plex, or you can press the Sync COllections button to sync all collections now, or the red button next to the collection to sync just this collection to Plex now.

