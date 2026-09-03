import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';

const CHANNEL_URL =
  'https://www.youtube.com/channel/UC4FqgUr66G2QfUGKey8iI6w/videos';

const YT_DLP =
  'C:\\Users\\Sheikh Mahi\\AppData\\Local\\Microsoft\\WinGet\\Packages\\yt-dlp.yt-dlp_Microsoft.Winget.Source_8wekyb3d8bbwe\\yt-dlp.exe';

const output = execFileSync(
  YT_DLP,
  [
    '--flat-playlist',
    '--playlist-end',
    '1',
    '--print',
    '%(id)s\t%(title)s',
    CHANNEL_URL,
  ],
  { encoding: 'utf8' }
).trim();

const [videoId, ...titleParts] = output.split('\t');
const title = titleParts.join('\t');

if (!videoId) {
  throw new Error('Could not find the latest YouTube video.');
}

const latestVideo = {
  title,
  videoId,
  thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  url: `https://www.youtube.com/watch?v=${videoId}`,
};

await fs.writeFile(
  'public/latest-video.json',
  JSON.stringify(latestVideo, null, 2) + '\n',
  'utf8'
);

console.log('Latest YouTube video updated:');
console.log(latestVideo);