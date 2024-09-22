const jsonServer= require('json-server')

const taskManager = jsonServer.create()
 const middleWare = jsonServer.defaults()
 const route = jsonServer.router('db.json')
 const PORT = 3000 ||  process.env.PORT
 taskManager.use(middleWare)
 taskManager.use(route);
 
 taskManager.listen(PORT,()=>{
    console.log("task manager server running on port " + PORT);
 })