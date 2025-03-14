# User Registration Endpoint Documentation

## Endpoint: `/user/register`

### Description
This endpoint allows new users to register to the application. It validates the provided information, creates a new user account, and returns a JWT for authentication.

### HTTP Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:

| Field | Type | Description | Required |
|---|---|---|---|
| `fullName.firstname` | String | The first name of the user.  Must be at least 3 characters. | Yes |
| `fullName.lastname` | String | The last name of the user. Must be at least 3 characters. | No |
| `email` | String | The email address of the user. Must be a valid email format. | Yes |
| `password` | String | The password for the user account. Must be at least 6 characters. | Yes |

#### Example Request Body
```json
{
    "fullName": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securePassword123"
}

Success Response (201 Created)
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "654321...",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
    }
}
Error Responses
{
    "errors": [
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        }
    ]
}
Example Usages
curl -X POST -H "Content-Type: application/json" -d '{
    "fullName": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securePassword123"
}' http://localhost:4000/user/register


```json
{
    "fileName": "Backend/README.md"
}