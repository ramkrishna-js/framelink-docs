# Lavalink Manager

The `LavalinkManager` is the primary entry point for the library. It manages node connections, player lifecycles, and search operations.

## Configuration Options

When creating a `LavalinkManager` instance, you can provide the following options:

| Option | Type | Description |
| --- | --- | --- |
| `nodes` | `NodeOptions[]` | Array of Lavalink nodes to connect to. |
| `send` | `Function` | A function to send voice payloads to Discord. |
| `autoResume` | `boolean` | Whether to automatically resume sessions on reconnect. |
| `plugins` | `Plugin[]` | Array of plugins to load. |

### Node Options

| Option | Type | Description |
| --- | --- | --- |
| `host` | `string` | The Lavalink server hostname. |
| `port` | `number` | The Lavalink server port. |
| `password` | `string` | The Lavalink server password. |
| `secure` | `boolean` | Use secure (WSS/HTTPS) connection. |
| `version` | `'v3' \| 'v4'` | The Lavalink version. |

## Methods

### `init(userId: string)`
Initializes the manager and connects to all configured nodes.

### `createPlayer(options: PlayerOptions)`
Creates a new player for a guild.
- `guildId`: Discord guild ID.
- `voiceChannelId`: The channel to join.
- `textChannelId`: The channel for notifications.
- `autoplay`: Enable automatic recommendations.

### `use(plugin: Plugin)`
Injects a plugin into the manager. Can be called at any time.

### `destroy()`
Gracefully shuts down all node connections and destroys all active players.

## Events

The manager is an `EventEmitter`:

```typescript
manager.on('trackStart', (player, track) => {
    console.log(`Now playing: ${track.info.title}`);
});

manager.on('nodeConnect', (node) => {
    console.log(`Node ${node.options.host} is online.`);
});

manager.on('nodeError', (node, error) => {
    console.error(`Node ${node.options.host} failed: ${error.message}`);
});

manager.on('playerDestroy', (player) => {
    console.log(`Player destroyed for guild ${player.guildId}`);
});
```