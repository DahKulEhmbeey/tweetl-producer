require('dotenv').config();

/**
 * Module dependencies.
 */

const TStream = require('./lib/twitter-stream');
const Transformer = require('./lib/transformer');
const publishMessage = require('./lib/kafka-producer');


// When a tweet comes in from the stream, transform it
// and publish to Kafka
TStream.on('tweet', tweet => {
  const transformed_tweet = Transformer(tweet);
  publishMessage(JSON.stringify(transformed_tweet));
});
