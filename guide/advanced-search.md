# Advanced Search

Framelink simplifies the complex track loading response from Lavalink.

## Load Types

When you call `manager.search()`, the result contains a `loadType`:

| Load Type | Description |
| --- | --- |
| `TRACK_LOADED` | A single track was loaded. |
| `PLAYLIST_LOADED` | A playlist was loaded. |
| `SEARCH_RESULT` | Multiple tracks were found for a search query. |
| `NO_MATCHES` | No tracks were found. |
| `LOAD_FAILED` | Lavalink encountered an error loading the track. |

## Handling Results

```typescript
const res = await manager.search('Lo-fi hip hop', 'yt');

if (res.loadType === 'SEARCH_RESULT' || res.loadType === 'TRACK_LOADED') {
    player.queue.add(res.tracks[0]);
} else if (res.loadType === 'PLAYLIST_LOADED') {
    player.queue.add(res.tracks);
    console.log(`Loaded playlist: ${res.playlistInfo.name}`);
}
```

## Track Normalization

Framelink automatically normalizes track objects to include useful properties:
- `track`: The encoded track string (required for playback).
- `info`: Metadata like `title`, `author`, `uri`, `length`.
- `displayThumbnail`: A helper property providing the highest quality thumbnail URL available.
