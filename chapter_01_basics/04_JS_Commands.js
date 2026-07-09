const platform = process.platform;
console.log('Node.js process.platform:', platform);

if (platform === 'win32') {
  console.log('Running on Windows');
} else if (platform === 'darwin') {
  console.log('Running on macOS');
} else if (platform === 'linux') {
  console.log('Running on Linux');
} else {
  console.log('Running on an unsupported or unknown platform');
}
