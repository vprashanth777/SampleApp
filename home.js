
fetch("https://api.instantwebtools.net/v1/airlines")
.then(response => response.json())
  .then(data =>  {

    data.sort((a,b) =>  {return a.established - b.established}
    );

    

   for(let a in data[0])
   {
        console.log(data[0][a]);
   }
      showMessage(data[0].name);
    

})
.catch(console.error);

