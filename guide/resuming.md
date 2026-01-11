# Session Resuming

Framelink supports session resuming for both Lavalink v3 and v4. This ensures that playback is not interrupted if the bot's WebSocket connection to Lavalink is briefly lost.

## Configuration

To enable resuming, you must provide a `resumeKey` in your node options:

```typescript
const manager = new LavalinkManager({
    nodes: [
        {
            host: 'localhost',
            port: 2333,
            password: 'youshallnotpass',
            version: 'v4',
            resumeKey: 'my-secret-key',
            resumeTimeout: 60 // Time in seconds to wait for a reconnect
        }
    ],
    // ...
});
```

## How it Works

1. **v3**: The manager sends a `configureResuming` op code to Lavalink immediately upon connection.
2. **v4**: The manager uses the REST API to patch the session configuration once the `ready` event (which provides the `sessionId`) is received.

### Benefits
- Players will continue playing while the bot is reconnecting.
- Once reconnected, the bot will take over the existing players without audio gaps.
- The `nodeConnect` event will still fire, but the players will persist.
