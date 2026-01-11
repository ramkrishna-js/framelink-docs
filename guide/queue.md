# Queue

Every player has its own queue.

## Adding Tracks

```typescript
// Add a single track
player.queue.add(track);

// Add multiple tracks
player.queue.add([track1, track2]);
```

## Queue Helpers (v1.1.0+)

New utility properties were added for easier queue state checking:

```typescript
// Check if the queue is empty
if (player.queue.isEmpty) {
    console.log('Nothing next!');
}

// Get the first track in the queue (without removing it)
const nextUp = player.queue.first;

// Get the last track in the queue
const finalTrack = player.queue.last;

// Get the total number of tracks
console.log(`Queue size: ${player.queue.size}`);
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
