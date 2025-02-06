```javascript
//Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("65354567")},{$inc:{counter:NaN}});
```