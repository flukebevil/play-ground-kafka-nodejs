const kafka = require("kafka-node");
const client = new kafka.KafkaClient({kafkaHost: "0.0.0.0:9092"});
const topic = [
  {
    topic: "message"
  }
];
const options = { autoCommit: false };
const consumer = new kafka.Consumer(client, topic, options);

consumer.on("message", message => console.log(message));
