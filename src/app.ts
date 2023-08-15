import express, {Request, Response} from "express"

const app = express();

const port = 3000;

app.get("/home", (req: Request, res: Response) => {
    console.log("Home page!")
    return res.status(200).json({
        success: true,
        message: "Home page!"
    })
})

app.get("/about", (req: Request, res: Response) => {
    console.log("About page!")
    return res.status(200).json({
        success: true,
        message: "About page!"
    })
})

app.get("/contact", (req: Request, res: Response) => {
    console.log("Contact page!")
    return res.status(200).json({
        success: true,
        message: "Contact page!"
    })
})

app.get("*", (req: Request, res: Response) => {
    console.log("Page not found!")
    return res.status(404).json({
        success: false,
        message: "Page not found"
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})