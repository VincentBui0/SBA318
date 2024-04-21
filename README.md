To use this application that involves posting, getting, updating and deleting usernames and ages using Postman:
1. Use the terminal and type in npm start
2. Type in http://localhost:5000/people in the URL bar to get actual results
3. Within the Postman extension in VS Code, hit New HTTP Request
4. Go to Body, then raw and change Text to JSON
5. Type in information in body as shown  
    {
        "username": "Jane Douglass",
        "age": 29,
        "id": "6fa758e6-194d-4f8a-a75b-f7877d45818e"
    }
6. Feel free to use GET, POST, PATCH and DELETE requests using Postman

One minor error encountered includes hitting SEND that makes "Sending request" in the body, however the request never finishes
![Screenshot (45)](https://github.com/VincentBui0/SBA318/assets/107823093/2825deb0-104d-46f0-8fdc-2616f01e1868)
