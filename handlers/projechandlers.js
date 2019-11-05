const Knex = require("knex");
const knexOptions = require(".././knexfile");
const knex = Knex(knexOptions);

//users handlers
function getProjects(req,res){
    knex
    .select("*")
    .from("project")
    .then(
        (data)=>{
            res.json(data)
        }
    )
    .catch(error => {
        res.json("fail","Error occured!")
    })
}

function addProject(req,res){

    var values = {
        name : req.body.name,
        description : req.body.description,
        priceInPound : req.body.price,
        userId : req.body.userId
    };

    knex("project")
    .insert(values)
    .then(
        ()=>{
            res.json("Project added.")
        }
    )
    .catch(error => {
        res.json("fail")
    })

}

function deleteProject(req,res){
    var id = req.params.id;
    knex('users')
    .where({ id: id })
    .delete()
    .then(
        ()=>{
            res.json("Project deleted!")
        }
    )
    .catch(error => {
        res.json("Error occured!")
    })
    
}

function updateProject(req,res){
    var updateValues = {
        name: req.body.name,
        description: req.body.description,
        priceInPound: req.body.price
    },
    id = req.params.id;

    knex('project')
    .where({ id: id })
    .update(updateValues)
    .then(
        ()=>{
            res.json("Project updated.")
        }
    )
    .catch(error => {
        res.json("Error occured!")
    })
}

module.exports = {
    getProjects : getProjects,
    addProject : addProject,
    deleteProject : deleteProject,
    updateProject : updateProject
};