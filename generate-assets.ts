import { createCanvas } from '@napi-rs/canvas';
import { writeFileSync } from 'fs';

async function generate() {
    // 1. Generate Logo (512x512)
    const logoSize = 512;
    const logoCanvas = createCanvas(logoSize, logoSize);
    const lctx = logoCanvas.getContext('2d');

    // Gradient Background
    const lgrad = lctx.createLinearGradient(0, 0, logoSize, logoSize);
    lgrad.addColorStop(0, '#3eaf7c');
    lgrad.addColorStop(1, '#4facfe');
    
    lctx.fillStyle = lgrad;
    lctx.beginPath();
    lctx.arc(logoSize/2, logoSize/2, logoSize/2, 0, Math.PI * 2);
    lctx.fill();

    // Text "FL"
    lctx.fillStyle = '#ffffff';
    lctx.font = 'bold 220px sans-serif';
    lctx.textAlign = 'center';
    lctx.textBaseline = 'middle';
    lctx.fillText('FL', logoSize/2, logoSize/2);

    writeFileSync('logo.png', logoCanvas.toBuffer('image/png'));
    console.log('✅ Logo generated: logo.png');

    // 2. Generate Banner (1200x400)
    const bw = 1200;
    const bh = 400;
    const bannerCanvas = createCanvas(bw, bh);
    const bctx = bannerCanvas.getContext('2d');

    // Dark Background
    bctx.fillStyle = '#1b1b1f';
    bctx.fillRect(0, 0, bw, bh);

    // Accent Gradient
    const bgrad = bctx.createLinearGradient(0, 0, bw, 0);
    bgrad.addColorStop(0, 'rgba(62, 175, 124, 0.2)');
    bgrad.addColorStop(1, 'rgba(79, 172, 254, 0.2)');
    bctx.fillStyle = bgrad;
    bctx.fillRect(0, 0, bw, bh);

    // Main Text
    bctx.fillStyle = '#ffffff';
    bctx.font = 'bold 80px sans-serif';
    bctx.textAlign = 'center';
    bctx.fillText('Framelink', bw/2, bh/2 - 20);

    // Tagline
    bctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    bctx.font = '32px sans-serif';
    bctx.fillText('Modern Lavalink Client for Node.js', bw/2, bh/2 + 50);

    // Decorative Line
    const lineGrad = bctx.createLinearGradient(bw/2 - 200, 0, bw/2 + 200, 0);
    lineGrad.addColorStop(0, 'transparent');
    lineGrad.addColorStop(0.5, '#3eaf7c');
    lineGrad.addColorStop(1, 'transparent');
    bctx.fillStyle = lineGrad;
    bctx.fillRect(bw/2 - 200, bh/2 + 80, 400, 4);

    writeFileSync('banner.png', bannerCanvas.toBuffer('image/png'));
    console.log('✅ Banner generated: banner.png');
}

generate();
