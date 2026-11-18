import fs from 'node:fs';
import path from 'node:path';

const assets = [
  {
    url: 'https://www.figma.com/api/mcp/asset/ffb7777b-f7dc-4a83-84d3-58b5f06b0ac5.png',
    dest: 'public/images/hero/bun_dau_plate.png',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/0c2ab543-13bf-424e-9431-c9d60ea51759.png',
    dest: 'public/images/combos/met_bun_dau.png',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/1298c828-a1c0-4530-b443-2713db094441.png',
    dest: 'public/images/decors/ot_xanh.png',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/c35ebc27-41dd-4d10-9163-016862852232.png',
    dest: 'public/images/decors/la_chuoi.png',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/b3290c78-9ca0-4b88-912a-b23c0d4628c4.png',
    dest: 'public/images/decors/ot_2.png',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/a974c757-6d40-4d42-819c-4ebf858c9ace.png',
    dest: 'public/images/decors/ot_1.png',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/b7421f27-c727-4c5b-80c3-1eea8d5491e9.png',
    dest: 'public/images/decors/ot_do.png',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/6f407ff8-23e4-4311-af34-895ae63c7db5.png',
    dest: 'public/images/decors/hung_que.png',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/a995269e-5d8d-4401-8522-9901276fe5ba.svg',
    dest: 'public/icons/shopping_cart.svg',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/c18886f7-3aec-49b5-8a83-87b65e780ec4.svg',
    dest: 'public/icons/droplet.svg',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/8ef90f50-28b5-48f2-b6de-c85e8e822776.svg',
    dest: 'public/icons/shield_check.svg',
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/f83ab6e8-b438-4ef6-99ab-8059af34ae85.svg',
    dest: 'public/icons/package_delivered.svg',
  },
];

async function download() {
  for (const item of assets) {
    const dir = path.dirname(item.dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    console.log(`Downloading ${item.dest}...`);
    const res = await fetch(item.url);
    if (!res.ok) {
      console.error(`Failed to download ${item.url}: ${res.statusText}`);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(item.dest, buffer);
    console.log(`Saved ${item.dest} (${buffer.length} bytes)`);
  }
}

download();
