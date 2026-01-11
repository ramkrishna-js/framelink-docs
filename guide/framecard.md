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

## Customization Options

You can customize almost every aspect of the card:

| Method | Description |
| --- | --- |
| `setTitle(string)` | Sets the track title. |
| `setAuthor(string)` | Sets the author name. |
| `setThumbnail(string)` | Sets the thumbnail URL (supports local paths too). |
| `setColor(string)` | Sets the theme color (Hex). |
| `setProgress(number)` | Sets progress bar percentage (0-100). |
| `setStartTime(string)` | Sets the current time string. |
| `setEndTime(string)` | Sets the total duration string. |
| `setBrightness(number)` | Adjusts background brightness (0-100). |

## Full Example

```typescript
const card = new ClassicCard()
    .setTitle('Track Title')
    .setAuthor('Artist')
    .setThumbnail('https://example.com/thumb.jpg')
    .setColor('#ff0000')
    .setProgress(50)
    .setStartTime('1:30')
    .setEndTime('3:00')
    .setBrightness(40);

const buffer = await card.build();
```
