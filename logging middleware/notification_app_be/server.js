const log = require('../logging_middleware/logger');

const axios = require('axios');

const API_URL = "http://20.207.122.201/evaluation-service/notifications";

function getPriority(n) {
let weight = 0;

```
if (n.Type === "Placement") weight += 3;
else if (n.Type === "Result") weight += 2;
else weight += 1;

weight += new Date(n.Timestamp).getTime() / 1000000000000;

return weight;
```

}

async function main() {
const res = await axios.get(API_URL);
let notifications = res.data.notifications;

```
notifications.sort((a, b) => getPriority(b) - getPriority(a));


const top10 = notifications.slice(0, 10);

console.log(top10);
```
log("Fetching notifications");

}

main();
