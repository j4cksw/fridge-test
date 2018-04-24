const request = require("request")

test("Editing items", function() {
    request
        .put({
            url: "http://localhost:3001/item/id/1",
            json: true,
            body: {
                id: 1,
                name: "Orange"
            }
        }, 
        function(err, response, body){
            expect(response.statusCode).toBe(200)
        })
    
    // request
    //     .get({
    //         url: "http://localhost:3001/items",
    //         method: "GET",
    //     },
    //     function(err, response, body){
    //         expect(response.statusCode).toBe(200)
    //         expect(JSON.parse(body)).toEqual([
    //             {
    //                 "id": 1,
    //                 "name": "Orange"
    //             },
    //             {
    //                 "id": 2,
    //                 "name": "Watermelon"
    //             },
    //         ])
    //     }
    // )
})