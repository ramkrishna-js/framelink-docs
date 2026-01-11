# Players

Players handle the playback for a specific guild.

## Creating a Player

```typescript
const player = manager.createPlayer({
    guildId: 'GUILD_ID',
    voiceChannelId: 'VOICE_CHANNEL_ID',
    textChannelId: 'TEXT_CHANNEL_ID',
    selfDeaf: true
});

player.connect();
```

## Playback Control

```typescript
// Play a track
await player.play(track);

// Skip
player.skip();

// Stop
player.stop();

// Seek
await player.seek(30000); // 30 seconds

// Volume
await player.setVolume(50);
```
