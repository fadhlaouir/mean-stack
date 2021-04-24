const fs = require("fs");

if (fs.existsSync("./public")) {
    process.env.NODE_ENV = "production";
    process.env.databaseUri =
        "mongodb+srv://root:root@cluster0.etney.mongodb.net/cluster0?retryWrites=true&w=majority"; // Databse URI and database name
    process.env.databaseName = "production database: Cluster0"; // Database name
} else {
    process.env.NODE_ENV = "development";
    process.env.databaseUri =
        "mongodb+srv://root:root@cluster0.etney.mongodb.net/cluster0?retryWrites=true&w=majority"; // Databse URI and database name
    process.env.databaseName = "development database: Cluster0"; // Database name
}