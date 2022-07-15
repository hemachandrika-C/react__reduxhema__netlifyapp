const INITIAL_STATE = {

mensections: [
    {
    title: "shirts",
    imageUrl: "assest/projectimages/homeImageMen1.jpg",
    id: 1,
    linkUrl: "shop/shirts",
    },
    {
    title: "coatsuit",
    imageUrl: "assest/projectimages/homeImageMen2.jpg",
    id: 2,
    linkUrl: "shop/coatsuit",
    },
    ],

};

const mendirectoryReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        default:
          return state; 
       }
};
export default mendirectoryReducer;