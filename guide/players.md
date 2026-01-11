# Players

Players represent a connection to a voice channel in a guild.

## Advanced Controls

### Volume Management
Framelink supports volume levels from 0 to 1000.
```typescript
player.setVolume(100); // Set to 100%
```

### Seeking
Seek to any position (in milliseconds):
```typescript
await player.seek(60000); // Go to 1 minute
```

### Repeat Modes
You can toggle between different repeat modes:
```typescript
player.setRepeatMode('off');   // No loop
player.setRepeatMode('track'); // Loop current song
player.setRepeatMode('queue'); // Loop entire queue
```

## Audio Filters

Framelink includes high-level methods for popular filters:

### Bassboost
```typescript
player.setBassboost(true);
```

### Nightcore
```typescript
player.setNightcore(true);
```

### Custom Filters
You can apply any raw Lavalink filters:
```typescript
await player.setFilters({
    timescale: { speed: 1.2 },
    vibrato: { frequency: 2, depth: 0.5 }
});
```

## State Properties

You can check the current state of a player anytime:
- `player.isPlaying`: Boolean indicating if a track is active.
- `player.paused`: Boolean indicating if playback is paused.
- `player.position`: Current playback position in ms.
- `player.volume`: Current volume level.