"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contact_routes_1 = __importDefault(require("../src/features/contacts/infrastructure/routes/contact_routes"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Routes
app.use("/api", contact_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`);
});
