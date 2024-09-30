const express = require('express');
const app = express();
const port = 3000;

app.get( '/hello', (req, res) => {
    res.send('<h1>Hello World</h>');
}
);
//localhost:3000/user/John/Doe
app.get('/user' , (req, res) => {
   const firstname= req.query.firstname;
    const lastname= req.query.lastname;
    res.send(`User: ${firstname} ${lastname}`);
}
);

//localhost:3000/user?firstname=John&lastname=Doe
app.post('/user' , (req, res) => {
   const firstname= req.query.firstname;
    const lastname= req.query.lastname;
    res.send(`User: ${firstname} ${lastname}`);
}   );



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
