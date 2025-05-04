"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routers/user.routes"));
const auth_route_1 = __importDefault(require("./routers/auth.route"));
const appPassword_route_1 = __importDefault(require("./routers/appPassword.route"));
const mailTemplate_router_1 = __importDefault(require("./routers/mailTemplate.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/user", user_routes_1.default);
app.use("/api/v1/auth", auth_route_1.default);
app.use("/api/v1/appPassword", appPassword_route_1.default);
app.use("/api/v1/mailTemplate", mailTemplate_router_1.default);
app.get("/", (req, res) => {
    res.send('<html><style>.text{color:red; display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 3rem}</style><body><div class="text">404! Page Not Found</div></body></html>');
});
app.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        return;
    }
    console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map