  
const Express = require("express")
const app = Express()
const cors = require('cors')

//body parser stuffs
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//use cors
app.use(cors());

//imports
const projectHandler = require("./handlers/projechandlers")

const apiRoute = "/api/v1/";

//api health check
app.get(apiRoute+"/health",(req,res)=>{
    res.json({
        "status" : "ok"
    })
})

app.get(apiRoute+"project/",projectHandler.getProjects)

// /api/v1/users/
app.post(apiRoute+"project/",projectHandler.addProject)

// /api/v1/users/auth/
app.put(apiRoute+"project/:id",projectHandler.updateProject)

// /api/v1/project
app.delete(apiRoute+"project/:id",projectHandler.deleteProject)

// start server
const port = 3000;
app.listen(port,()=>{
    console.log("Server is listening on "+port);
})