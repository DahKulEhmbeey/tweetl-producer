const { KafkaClient, Producer } = require('kafka-node');

const { KAFKA_HOST = "", KAFKA_TOPIC = "" } = process.env;

/**
 * Takes in a JSON message to push to a kafka topic.
 * Topic name, and kafka host details to be fed in from env variable
 *
 * @param {string} [message]
 */

const publishMessage = message => {
  // Create a new producer from a client
  const client = new KafkaClient({kafkaHost: KAFKA_HOST});
  const producer = new Producer(client);

  producer.on('ready', () => {
    // Send the message to the topic specified
    producer.send([{ topic: KAFKA_TOPIC, messages: message }], (err, data) => {
      if (err) {
        // Log error to logger or console
        console.error('PRODUCER: Error publishing message:\n', err);
      }
      // Close the producer connection after message is sent
      producer.close();
    });
  });

  producer.on('error', err => {
    // Log error to logger or console
    console.error('PRODUCER: An error occurred:\n', err);
  });
}


module.exports = publishMessage;
