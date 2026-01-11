# Voice Updates

To ensure smooth playback, Framelink needs to handle raw voice state and server updates from Discord.

## Implementation

If you are using `discord.js`, you can simply pass the raw gateway data to the manager:

```typescript
client.on('raw', (data) => {
    manager.handleVoiceUpdate(data);
});
```

### Manual Handling

If you prefer more control, you can filter for the specific events:

```typescript
client.on('raw', (packet) => {
    if (!['VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE'].includes(packet.t)) return;
    manager.handleVoiceUpdate(packet);
});
```

## Moving Channels

Framelink automatically handles players moving between voice channels. When a move is detected, the `playerMove` event is emitted:

```typescript
manager.on('playerMove', (player, oldChannelId, newChannelId) => {
    console.log(`Player moved from ${oldChannelId} to ${newChannelId}`);
});
```
