const sentence = "hello there from lighthouse labs";
const sentenceWithLinebreak = sentence + '\n';
let timeBase = 0;

for (const char of sentenceWithLinebreak) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (timeBase += 100));
}