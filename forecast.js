const request=require('postman-request')

const forecast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=16333282779081f3151664e90df5316d41f&query='+lat+','+long

    request({url:url,json:true},(error,response)=>{
        if(error){
           callback('low level error',undefined)
        }
        else if(response.body.error){
            callback('cordinate error',undefined)
        }
        else{
            callback(undefined,'success'+'humidity is '+response.body.current[11])
        }
    })
}

module.exports=forecast