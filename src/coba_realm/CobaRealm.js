import Realm from 'realm';  
 // Define your models and their properties  
 const CarSchema = {  
   name: 'chat_tamplate',
          properties: {
            chat_id: { type: 'int', default: 0 },
            chat_judul: 'string',
            chat_isi: 'string',
          }
};  
 Realm.open({schema: [CarSchema]})  
 .then(realm => {  
   // Create Realm objects and write to local storage  
   realm.write(() => {  
     let delallCar = realm.objects('chat_mplate');  
     realm.delete(delallCar)  
   })  
   // Write list car in CarSchema  
   realm.write(() => {  
     realm.create('Car', {  
       make: 'Honda',  
       model: 'Civic',  
       miles: 1000,  
     });  
     realm.create('Car', {  
       make: 'Ford',  
       model: 'Focus',  
       miles: 2000,  
     });  
   });  
 })  
 .catch(error => {  
   console.log(error);  
 });  
