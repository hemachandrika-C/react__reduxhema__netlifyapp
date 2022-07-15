const INITIAL_STATE = {
    womensections: [
    {
    title: "lehenga",
    imageUrl: "assest/projectimages/homePageWomen1.jpg",
    id: 1,
    linkUrl: "shop/lehenga",
    },
    {
    title: "kurti",
    imageUrl: "assest/projectimages/homePageWomen2.jpg",
    id: 2,
    linkUrl: "shop/kurti",
    },
    {
    title: "saree",
    imageUrl: "assest/projectimages/homePageWomen3.jpg",
    id: 3,
    linkUrl: "shop/saree",
    },
    {
    title: "chudimaterial",
    imageUrl: "assest/projectimages/homePageWomen4.jpg",
    id: 4,
    linkUrl: "shop/chudimaterial",
    },
    {
    title: "dupatta",
    imageUrl: "assest/projectimages/homePageWomen5.jpg",
    id: 5,
    linkUrl: "shop/dupatta",
    },
    {
    title: "office wear",
    imageUrl: "assest/projectimages/homePageWomen6.jpg",
    id: 6,
    linkUrl: "shop/officewear",
    },
    {
    title: "Tops",
    imageUrl: "assest/projectimages/homePageWomen7.jpg",
    id: 7,
    linkUrl: "shop/tops",
    },
    {
    title: "skirts",
    imageUrl: "assest/projectimages/homePageWomen8.jpg",
    id: 8,
    linkUrl: "shop/skirts",
    },
    ],
    };
    const womendirectoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    default:
    return state;
    }
    };
    export default womendirectoryReducer;