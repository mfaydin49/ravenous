const apiKey =
  "dNh2LuaiuBWiFdzHyrot-dbSJtn40YK9c8hVDs2bXMcqpo0pYwteVxASRC0OxNDf9d14CpickRee7ieCbkJwl2mRfIfBqgc4aBZhDXT3sS0XifVMd6KQbeeKNwLpXnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              phone: business.phone,
            };
          });
        }
      });
  },
};

export default Yelp;
