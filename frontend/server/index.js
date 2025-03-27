const express = require("express");
const services = require("./services.json");
const users = require("./users.json");
const path = require("path");
const Parcel = require("@parcel/core").default;
const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = 4001;
const devPort = 4000;

// Development Server Settings
const frontEndDevServerOptions = {
  defaultConfig: require.resolve("@parcel/config-default"),
  entries: path.join(__dirname, "../src/index.html"),
  serveOptions: {
    port: devPort,
  },
  hmrOptions: {
    port: devPort,
  },
};

function initFrontend() {
  const frontendDevServer = new Parcel(frontEndDevServerOptions);
  return frontendDevServer.watch((error) => {
    if (error) {
      console.log(error);
    }
  });
}

initFrontend().then((r) => {
  const app = express();

  app.get("/services.json", (req, res) => {
    res.json(services);
  });

  app.get("/users.json", (req, res) => {
    let filteredUsers = users.map((user, i) => {
      const id = i + 1;
      return {
        id,
        avatar_url: `https://eu.ui-avatars.com/api/?name=${user.name}`,
        ...user,
      };
    });

    if (req.query.service_id) {
      filteredUsers = filteredUsers.filter((u) =>
        u.service_ids.includes(parseInt(req.query.service_id))
      );
    }

    res.json(filteredUsers);
  });

  app.use(express.static("server/public"));

  const parcelMiddleware = createProxyMiddleware({
    target: `http://localhost:${devPort}/`,
    changeOrigin: true,
    ws: true,
  });
  app.use("/", parcelMiddleware);

  app.listen(PORT, () => {
    // Clear console
    process.stdout.write(
      process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
    );

    console.log("\x1b[32m%s\x1b[0m", "App started successfully!");
    console.log();
    console.log("You can now view it in your browser.");
    console.log();
    console.log(`  http://localhost:${PORT}`);
    console.log();
    console.log("You'll find more instruction in the README file.");
  });
});
