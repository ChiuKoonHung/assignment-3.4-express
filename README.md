# Expres & Middleware: Assignment

## Brief

Setup a Node.js project with Express and complete the following endpoints.

| Task # | Path                 | Verb | Request Body                                      | Response Body                                     | Description                                                                                              |
|--------|----------------------|------|---------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| 1      | /vehicle             | GET  | Nil                                               | An array of vehicles                              |                                                                                                          |
| 2      | /vehicle             | POST | JSON:  { "type":"Taxi", "carPlateNo":"SHA1111Z" } | JSON:  { "type":"Taxi", "carPlateNo":"SHA1111Z" } | Create an object and store it in an array call `vehicles`.  Car plate number must be unique.             |
| 3      | /vehicle/:carPlateNo | PUT  | JSON:  { "type":"Truck" }                         |                                                   | Return status 200 and success message if successful. Return status 404 if car plate number is not found. |
| 4      | /garage              | POST | JSON: { garageNo:1, address:"Address 1" }         | JSON: { garageNo:1, address:"Address 1" }         | Just return status 200 for success. Store this object in an array `garages`.                             |
| 5      | /garage/:garageNo    | GET  | Nil                                               | JSON: { garageNo:1, address:"Address 1" }         | Only return the object with matching `garageNo`.                                                         |

Additional Code Challenge: 
1. Since there are two entities, use [express.Router](https://expressjs.com/en/guide/routing.html) to group `garage` and `vehicle` into two different routing path. 
2. Write the routing code for `vehicle` in `./routes/vehicle.js` and `garage` in `./routes/garage.js`.

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
