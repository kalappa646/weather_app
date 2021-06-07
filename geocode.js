const request=require('postman-request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZ293dGhhbTY0NiIsImEiOiJja3BleHNpcDQyMjBuMnBubDV5bDE0NWUxIn0.pRCanzSUSTQyRGEF3ZhRhQ'
    request({url:url, json:true},(error,response)=>{

        if(error){
            callback('url invalid',undefined)
        }
        else if(response.error){
            callback('status unavailable',undefined)
          
        }
        else{
           callback(undefined,{
               lat=response.body.features[0].center[1],
               long=response.body.features[0].center[0]
           }) 
        }
    
    })

}

module.exports=geocode