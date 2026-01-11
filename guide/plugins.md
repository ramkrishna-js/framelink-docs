# Plugins

Framelink features a simple plugin system that allows you to extend the `LavalinkManager`.

## Using a Plugin

```typescript
import { LavalinkManager } from '@ramkrishna-js/framelink';
import { MyPlugin } from 'my-framelink-plugin';

const manager = new LavalinkManager({
    nodes: [/* ... */],
    plugins: [
        new MyPlugin()
    ],
    send: (guildId, payload) => { /* ... */ }
});
```

## Creating a Plugin

To create a plugin, extend the `Plugin` class:

```typescript
import { Plugin, LavalinkManager } from '@ramkrishna-js/framelink';

export class MyPlugin extends Plugin {
    public load(manager: LavalinkManager) {
        // Your logic here
        manager.on('trackStart', (player, track) => {
            console.log('Plugin detected track start!');
        });
    }
}
```
