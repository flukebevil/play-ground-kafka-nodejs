const kafka = require("kafka-node");
const client = new kafka.KafkaClient("0.0.0.0:2181");
const topic = [
  {
    topic: "test-node"
  }
];
const options = { autoCommit: false };
const consumer = new kafka.Consumer(client, topic, options);

consumer.on("message", message => console.log(message));
