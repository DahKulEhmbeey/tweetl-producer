require('dotenv').config();
const TStream = require('./lib/twitter-stream');
const Transformer = require('./lib/transformer');

let count = 0;

TStream.on('tweet', tweet => {
  console.log(`Found tweet ${count++}:`, tweet);
  const transformed_tweet = Transformer(tweet);
  console.log('Transformed to:', transformed_tweet);
  if (count == 3) {
    TStream.stop();
  }
});

process.on('SIGTERM', () => {
  TStream.stop();
});
