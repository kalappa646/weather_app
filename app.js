const express=require('express')
const path=require('path')
const hbs=require('hbs')
// const geocode=require('./geocode')
// const forecast=require('./forecast')



const app=express()

const pathfor=path.join(__dirname,'/html')
const partialpath=path.join(__dirname,"/partials")

app.set('view engine','hbs')
hbs.registerPartials(partialpath)

app.use(express.static(pathfor))

app.get('',(req,res)=>{
   res.render('index',{
      title:'weather',
      name:'GOWTHAM'

   })
})

 app.get('/help',(req,res)=>{

    res.render('help',{
       title:'Help me out',
       name: "god"

    })
 })

 app.get('/about',(req,res)=>{
    res.render('about',{
       name:'Kalappa Gowtham K N'
    })

 })

app.get('/weather', (req,res)=>{
   if (!req.query.address){
      return res.send({
         error: 'enter the address'
      })
   }
//    geocode(req.query.address,(error,{lat,long})=>{
//       if(error){
//          return res.send(error)
//       }

//       forecast({lat,long},(error,fdata)=>{
//          if(error){
//             return res.send(error)
//          }
//       })
      res.send({
         forecast: "fdata",
         location:"location",
         address: req.query.address
   
      })

//    })
   
 })

 app.listen(3000,()=>{
    console.log('printing')
 })