const request = require("request")

test("Deleting item", function() {
    request
        .delete({
            url: "http://localhost:3001/item/id/2",
        }, 
        function(err, response, body){
            expect(response.statusCode).toBe(204)
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
            ])
        }
    )
})