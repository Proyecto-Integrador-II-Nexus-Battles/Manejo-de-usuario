import path from "path";
import { fileURLToPath } from "url";

export const defaultR = (req, res) => {
    //const __filename = fileURLToPath(import.meta.url);
    //const __dirname = path.dirname(__filename);
    res.render("login");
};

export const defaultR2 = (req, res) => {
    res.render("admin_main_page");
};

export const defaultR3 = (req, res) => {
    res.render("user_review");
};

