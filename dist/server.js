"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = __importDefault(require("./routes/user.router"));
const moment_1 = __importDefault(require("moment"));
const app = (0, express_1.default)();
const port = 5000;
// Middleware
app.use((0, cors_1.default)());
// Routes
app.use("/api", user_router_1.default);
app.get("/", (_, res) => {
    return res.send(`
    <div>
      <h2>Hello World!</h2>
      <h4>Version: ${(0, moment_1.default)(1718617399 * 1000)
        .utcOffset(0) // Corrected to UTC offset 0
        .format("DD/MM/YYYY - (HH:mm)")}</h4>
    </div>
  `);
});
// Start server
app.listen(port, () => {
    console.log(`Express server started on port: ${port}`);
});
exports.default = app;
