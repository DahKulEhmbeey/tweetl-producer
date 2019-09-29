module.exports = tweet => {
  // Takes a tweet object parameter
  // Returns a transformed object
  return {
    tweet_id: tweet.id_str,
    source: `https://twitter.com/${tweet.user.id_str}/status/${tweet.id_str}`,
    tweet: tweet.truncated ? tweet.extended_entities.full_text : tweet.text,
    retweeted: Boolean(tweet.retweeted),
    // retweeted: Boolean(tweet.retweeted_status),
    retweet_count: tweet.retweet_count,
    created_at: tweet.created_at,
    username: tweet.user.screen_name,
    profile_img_url: tweet.user.profile_image_url_https,
    followers: tweet.user.followers_count,
    user_id: tweet.user.id_str
  }
}
