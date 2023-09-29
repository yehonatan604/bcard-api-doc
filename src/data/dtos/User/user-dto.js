const userDto = () => {
    return {
        name: {
            "first": "Moe",
            "middle": "",
            "last": "Doe"
        },
        phone: "0512345567",
        email: "moe@email.com",
        password: "Abc!123Abc",
        image: {
            "url": "",
            "alt": ""
        },
        address: {
            "state": "IL",
            "country": "Israel",
            "city": "Arad",
            "street": "Shoham",
            "houseNumber": 5,
            "zip": 8920435
        },
        isBusiness: false
    }
}

export default userDto;
