const { faker } = require('@faker-js/faker');
const express = require('express');

const app = express();
const port = 8000; 




const fakeUser = () => ( 
    {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    }
);
    
const fakeCompany = () => (
    {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
        }


    }
)

app.get("/api/users/new", (req, res) => {
    const newUser = fakeUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = fakeCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = fakeUser();
    const newCompany = fakeCompany(); 
    const newUserCompany = {
        newUser: newUser,
        newCompany: newCompany
    }
    res.json(newUserCompany);
});


app.listen(port, () => console.log('running on port 8000') );