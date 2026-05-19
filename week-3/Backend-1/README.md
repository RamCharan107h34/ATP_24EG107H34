### Steps to cretae backend
1. Generate package.json file
    npm init -y
2. Create HTTP Server
    - Install & Import express module
       npm install express
    - Import express in 
3. Create an API 
    app.METHOD(path,request handler)
4. Install nodemon to monter the update
    npm install -g nodemon

- post and put request should send data to the api as the body of the req
- get and delete do not support body so thses two request send req through id


MongoDB is doctument based 
database server -> database - collection -> 

1. create a database 
- use sampleleb2
Check database prestent
- show databases or show dbs

2. crete a collection 
db.createCollection("users")

3. Create / Save  doctoments
db.users.insertOne({}) 
or 
db.users.insertMany([{}])

4. Read / get doc from collection
db.users.findOne( condition )
# without cond it gives first doc
or
db.users.find()
# returns all doc
# if not found it returns null
5. Query operators

- db.collection-name.find({fild-name:{$eq:"ram"}})
| Operator | Meaning                 | Example Query                     |
| -------- | ----------------------- | --------------------------------- |
| **$eq**  | Equal to                | `{ age: { $eq: 25 } }`            |
| **$ne**  | Not equal to            | `{ age: { $ne: 25 } }`            |
| **$gt**  | Greater than            | `{ age: { $gt: 25 } }`            |
| **$gte** | Greater than or equal   | `{ age: { $gte: 25 } }`           |
| **$lt**  | Less than               | `{ age: { $lt: 25 } }`            |
| **$lte** | Less than or equal      | `{ age: { $lte: 25 } }`           |
| **$in**  | Match any value in list | `{ age: { $in: [20,25,30] } }`    |
| **$nin** | Not in list             | `{ age: { $nin: [20,25] } }`      |



   1.1 comparision
   db.users.find({city:{$in:["hyderabad","chenni"]}})
| Operator | Meaning                     | Example                                        |
| -------- | --------------------------- | ---------------------------------------------- |
| **$and** | All conditions must be true | `{ $and: [ {age:{$gt:20}}, {age:{$lt:30}} ] }` |
| **$or**  | Any one condition true      | `{ $or: [ {age:25}, {name:"John"} ] }`         |
| **$not** | Negates condition           | `{ age: { $not: { $gt:30 } } }`                |
| **$nor** | None of conditions true     | `{ $nor: [ {age:25}, {name:"John"} ] }`        |

   1.2 logical
   db.users.find({$and:[{age:{$gt:21}},{city:{$eq:"hyderabad"}}]})
6. update doc of collection 
- db.users.find({city:{$in:["hyderabad","chenni"]}})
7. delete doc 
- db.users.find({city:{$in:["hyderabad","chenni"]}})


8. Nested object acc 
- db.users.findOne({"address.city":"hyd"})
