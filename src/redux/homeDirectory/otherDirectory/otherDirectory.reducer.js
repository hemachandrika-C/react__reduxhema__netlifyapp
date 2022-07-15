const INITIAL_STATE = {
    othersections: [
    {
    title: "glasses",
    imageUrl: "assest/projectimages/otherImage1.jpg",
    id: 1,
    linkUrl: "shop/glasses",
    },
    {
    title: "watches",
    imageUrl: "assest/projectimages/otherImage2.jpg",
    id: 2,
    linkUrl: "shop/watches",
    },
    {
    title: "perfumes",
    imageUrl: "assest/projectimages/otherImage3.jpg",
    id: 3,
    linkUrl: "shop/perfumes",
    },
    {
    title: "Makeup",
    imageUrl: "assest/projectimages/otherImage4.jpg",
    id: 4,
    linkUrl: "shop/makeup",
    },
    ],
    };
  
    const otherdirectoryReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
              default:
              return state;
           }
    };
    export default otherdirectoryReducer;