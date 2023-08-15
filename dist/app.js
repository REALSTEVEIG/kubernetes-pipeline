"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/home", (req, res) => {
    console.log("Home page!");
    return res.status(200).json({
        success: true,
        message: "Home page!"
    });
});
app.get("/about", (req, res) => {
    console.log("About page!");
    return res.status(200).json({
        success: true,
        message: "About page!"
    });
});
app.get("/contact", (req, res) => {
    console.log("Contact page!");
    return res.status(200).json({
        success: true,
        message: "Contact page!"
    });
});
app.get("*", (req, res) => {
    console.log("Page not found!");
    return res.status(404).json({
        success: false,
        message: "Page not found"
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
