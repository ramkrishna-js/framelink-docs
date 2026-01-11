# Lavalink Manager

The `LavalinkManager` is the heart of your music bot. It handles node connections, player creation, and event dispatching.

## Initialization

```typescript
import { LavalinkManager } from '@ramkrishna-js/framelink';
import { Client } from 'discord.js';

const client = new Client({ /* ... */ });

const manager = new LavalinkManager({
    nodes: [
        {
            host: 'localhost',
            port: 2333,
            password: 'youshallnotpass',
            secure: false,
            version: 'v4'
        }
    ],
    send: (guildId, payload) => {
        const guild = client.guilds.cache.get(guildId);
        if (guild) guild.shard.send(payload);
    }
});

// Initialize after bot is ready
client.on('ready', () => {
    manager.init(client.user.id);
});

// Handle voice updates
client.on('raw', (d) => manager.handleVoiceUpdate(d));
```

## Events

The manager emits various events:

- `nodeConnect`: When a node connects.
- `nodeError`: When a node encounters an error.
- `trackStart`: When a track begins playing.
- `queueEnd`: When the queue is empty.
- `playerDestroy`: When a player is destroyed.
