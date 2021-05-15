const app = require("./server");
const PORT = process.env.PORT || 8080;

// connecting to Mongo Atlas
const connectDB = require("./config/db");
connectDB();

app.listen(PORT, console.log(`Server is running at Port: ${PORT}`));
