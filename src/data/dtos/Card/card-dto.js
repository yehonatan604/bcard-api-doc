const cardDto = () => {
    return {
        title: "New Card",
        subtitle: "a test value for new card",
        description: "a test value for new card\n".repeat(2),
        phone: "012-3211234",
        email: "business@gmail.com",
        web: "www.bing.com",
        image: {
            "url": "https://img.izismile.com/img/img13/20201030/640/you_have_never_seen_something_like_this_640_36.jpg",
            "alt": "image of something"
        },
        address: {
            "state": "IL",
            "country": "Israel",
            "city": "Arad",
            "street": "Shoham",
            "houseNumber": 5,
            "zip": 8920435
        }
    }
}

export default cardDto;
