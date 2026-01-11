# Queue

Every player has its own queue.

## Adding Tracks

```typescript
// Add a single track
player.queue.add(track);

// Add multiple tracks
player.queue.add([track1, track2]);
```

## Managing the Queue

```typescript
// Get current track
const current = player.queue.current;

// Get tracks in queue
const tracks = player.queue.tracks;

// Shuffle
player.queue.shuffle();

// Clear
player.queue.clear();

// Remove a track
player.queue.remove(0);
```
