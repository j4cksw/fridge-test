const request = require("request")

test("Adding item", function() {
    request
        .post({
            url: "http://localhost:3001/item",
            method: "POST",
            json: true,
            body: {
                name: "Pineapple"
            }
        }, 
        function(err, response, body){
            expect(response.statusCode).toBe(201)
        })
    
    request
        .get({
            url: "http://localhost:3001/items",
            method: "GET",
        },
        function(err, response, body){
            expect(response.statusCode).toBe(200)
            expect(JSON.parse(body)).toEqual([
                {
                    "id": 1,
                    "name": "Banana"
                },
                {
                    "id": 2,
                    "name": "Watermelon"
                },
                {
                    "id": 3,
                    "name": "Pineapple"
                }
            ])
        }
    )
})