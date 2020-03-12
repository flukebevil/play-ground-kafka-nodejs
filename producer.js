const kafka = require("kafka-node");
const client = new kafka.KafkaClient({ kafkaHost: "0.0.0.0:9092" });
const Producer = kafka.Producer;
const producer = new Producer(client);

const fuxkingPayloads = [
  {
    topic: "test-message",
    messages: ["hello"],
    key: "god",
    partition: 0,
    attributes: 0,
    timestamp: Date.now()
  },
  {
    topic: "test-message",
    messages: ["marius"],
    key: "god",
    partition: 0,
    attributes: 0,
    timestamp: Date.now()
  }
];

producer.on("ready", _ =>
  producer.send(fuxkingPayloads, data => console.log(data))
);

producer.on("err", err => console.log(err));
