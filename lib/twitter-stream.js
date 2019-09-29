const Twit = require('twit');

const {
  T_CONSUMER_API_KEY,
  T_CONSUMER_API_SECRET_KEY,
  T_ACCESS_TOKEN,
  T_ACCESS_TOKEN_SECRET
} = process.env;

const T = new Twit({
  consumer_key:         T_CONSUMER_API_KEY,
  consumer_secret:      T_CONSUMER_API_SECRET_KEY,
  access_token:         T_ACCESS_TOKEN,
  access_token_secret:  T_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000  // optional HTTP request timeout to apply to all requests.
});

let stream = T.stream('statuses/filter', {
  track: ['Nigeria', 'Buhari', 'Lagos']
});

module.exports = stream;
