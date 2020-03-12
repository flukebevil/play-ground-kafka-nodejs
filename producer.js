const kafka = require("kafka-node");
const client = new kafka.KafkaClient({ kafkaHost: "0.0.0.0:9092" });
const Producer = kafka.Producer;
const producer = new Producer(client);

const fuckingPayloads = [
  {
    topic: "message",
    messages: ["oh my fucking god"],
    key: "god",
    partition: 0,
    attributes: 0,
    timestamp: Date.now()
  },
  {
    topic: "message",
    messages: ["hello my nighbor"],
    key: "god",
    partition: 0,
    attributes: 0,
    timestamp: Date.now()
  }
];

producer.on("ready", _ =>
  producer.send(fuckingPayloads, data => console.log(data))
);

producer.on("err", err => console.log(err));
