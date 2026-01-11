# Audio Filters

Framelink v1.1.0 introduces a wide range of high-level audio filters to enhance the listening experience.

## High-Level Filters

You can enable or disable filters using simple boolean methods on the player:

### Bassboost
Increases the bass frequencies.
```typescript
player.setBassboost(true);
```

### Nightcore
Increases speed and pitch for that classic nightcore sound.
```typescript
player.setNightcore(true);
```

### Vaporwave
Slows down the track and lowers the pitch for a chilled-out vibe.
```typescript
player.setVaporwave(true);
```

### 8D Audio
Creates a rotating sound effect that moves around the listener.
```typescript
player.setEightD(true);
```

### Karaoke
Attempts to isolate vocals by filtering out common frequencies.
```typescript
player.setKaraoke(true);
```

## Advanced Control

### Speed, Pitch, and Rate
Fine-tune the playback speed and pitch individually:

```typescript
await player.setSpeed(1.2); // 120% speed
await player.setPitch(0.8); // Lower pitch
await player.setRate(1.0);  // Normal rate
```

### Resetting
To remove all active filters and return to normal playback:

```typescript
await player.clearFilters();
```
