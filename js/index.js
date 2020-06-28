const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const bodyParser=require('body-parser');
const {check,validationResult}=require('express-validator');
const http=require('http');

let urlencoded=bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
app.use(urlencoded);
app.use(express.static(__dirname + '/public'));

app.get('/',(request,response)=>{response.sendFile(path.join(__dirname + '/index.html'))});

app.post('/formData', [
    check('name')
    .not().isEmpty().withMessage("Numele nu poate fi gol")
   .isLength({
        min:3
    }).withMessage("Numele trebuie sa aiba cel putin 3 caractere.")
    .isAlpha().withMessage("Numele nu poate contine cifre"),
    check('email')
    .isEmail(),
    check('phone1')
    .not().isEmpty().withMessage("Numarul nu poate fi gol")
    .isInt().withMessage("Numarul trebuie sa contina doar cifre")
   .isLength({
         min:4,max:4
   }).withMessage("Numarul 1 trebuie sa aiba 4 cifre"),
   check('phone2')
    .not().isEmpty().withMessage("Numarul 2 nu poate fi gol")
    .isInt().withMessage("Numarul 2 trebuie sa contina doar cifre")
   .isLength({
         min:3,max:3
   }).withMessage("Numarul 2 trebuie sa aiba 3 cifre"),
   check('phone3')
    .not().isEmpty().withMessage("Numarul 3 nu poate fi gol")
    .isInt().withMessage("Numarul 3 trebuie sa contina doar cifre")
   .isLength({
         min:3,max:3
   }).withMessage("Numarul 3 trebuie sa aiba 3 cifre"),
   check('zipCode')
   .not().isEmpty().withMessage("Codul postal nu poate fi gol")
   .isInt().withMessage("Codul postal trebuie sa contina doar cifre")
   

] , (request,response)=>
{
    if(request.body.age!=='No' && request.body.age!=='Yes')
        return response.status(422).json({
            errors:[{msg:"Nu ati selectat varsta"}]
        })
   const errors=validationResult(request);
   if(!errors.isEmpty())
   {
       return response.status(422).json({
           errors:errors.array()
       });
   }
   response.status(202).json({
       succces:'Ok'
   })
})
app.listen(port, ()=>console.log('Server runing'));