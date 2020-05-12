//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.urlencoded({extended: false}));



const port = 3050;

app.get('/', (req, res, next) => {
    //res.sendFile(__dirname  + "/signup.html");
    res.sendFile(`${__dirname}/signup.html`);
});

app.post('/', (req, res, next)=> {

    try {
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;

    const finalData = firstname + " " + lastname + " " + email;

    //res.send(firstname + lastname + email);

    if(res.statusCode === 200){
        console.log(finalData);        
          //res.send("Coungratulations! Successfully Subscribed!");
          res.sendFile(`${__dirname}/success.html`);
        } else{
         res.send("There was an error with signing up, please try again!!");
        }
    } catch (error) {
        //res.send("There was an error with signing up, please try again!!");
        res.sendFile(`${__dirname}/failure.html`);
        
    }
    

    // var data = {
    //     members: [
    //         {
    //             email_address: email,
    //             status: "subscribed",
    //             merge_feilds:{
    //                 FNAME: firstname ,
    //                 LNAME: lastname,
    //             }
    //         }
    //     ]
    // };

    // var jsonData = JSON.stringify(data);

    // var options ={
    //     url : "https://us18.api.mailchimp.com/3.0/lists/45ca04bce3",
    //     method: "POST",
    //     header: {
    //         "Authorization" : "Kamrul 1143209a2fe580568823df66f0d48225-us18"
    //     },
    //     body: jsonData,
    // };
    
    // request(options, (error, res, body)=>{

    //     //res.send("Seccessfully Sign up here")
    //     if(error){
    //         res.send("There was an error with signing up, please try again");
            
    //     } else{
    //         console.log(res.statusCode);        
    //     }
    // });


});

app.post("/failure", (req, res)=>{
    res.redirect("/");
});

app.post("/success", (req, res)=>{
    res.redirect("/");
});



app.listen(process.env.PORT || port, () =>{
    console.log(`This server is running on http://localhost:${port}`);
    
});


