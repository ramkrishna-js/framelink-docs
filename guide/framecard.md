# Framecard Integration

Framecard is the perfect companion for Framelink to generate beautiful music cards.

## Setup

First, install framecard:

```bash
npm install @ramkrishna-js/framecard
```

## Implementation

Use it within your `trackStart` event:

```typescript
import { ClassicCard } from '@ramkrishna-js/framecard';
import { AttachmentBuilder } from 'discord.js';

manager.on('trackStart', async (player, track) => {
    const channel = client.channels.cache.get(player.textChannelId);
    
    const card = new ClassicCard()
        .setTitle(track.info.title)
        .setAuthor(track.info.author)
        .setThumbnail(track.displayThumbnail)
        .setColor('#6fb8ff')
        .setStartTime('0:00')
        .setEndTime(formatTime(track.info.length));

    const buffer = await card.build();
    const attachment = new AttachmentBuilder(buffer, { name: 'card.png' });

    channel.send({ files: [attachment] });
});
```
