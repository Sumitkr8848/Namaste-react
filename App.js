import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?w=900&t=st=1703128500~exp=1703129100~hmac=4529ad6e31a07b3b998e6e135d77024ed335c9fae1444165ddfaaf6ee1595b75"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    );
};

const styleCard={
    backgroundColor:"#f0f0f0"
};
const resObj=[{
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "260968",
          "name": "Chowman",
          "cloudinaryImageId": "06d12ec700e4118d159fab6c3a7256dd",
          "locality": "Sai Durga Enclave",
          "areaName": "Bellandur",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Chinese",
            "Asian",
            "Thai",
            "Oriental",
            "Burmese",
            "Tibetan"
          ],
          "avgRating": 4.2,
          "parentId": "266",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=9811771~p=1~eid=0000018c-8cb1-1330-0692-0d1d00ac0135~srvts=1703167464240~90964",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-21 23:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                "shortDescription": "Kids Favourite options",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                      "description": "",
                      "shortDescription": "Kids Favourite options",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=260968",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "315774",
          "name": "Leon's - Burgers & Wings (Leon Grill)",
          "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
          "locality": "Bellandur",
          "areaName": "Bellandur",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental"
          ],
          "avgRating": 4.4,
          "parentId": "371281",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-22 01:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹499",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=315774",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "12394",
          "name": "Byg Brewski Brewing Company",
          "cloudinaryImageId": "dc2886690c60a7f3935ee4f58059ab3f",
          "locality": "Hennur",
          "areaName": "Sarjapur Road",
          "costForTwo": "₹850 for two",
          "cuisines": [
            "Pizzas",
            "Burgers",
            "Pan-Asian",
            "North Indian",
            "Pastas",
            "Grill",
            "Biryani",
            "Mexican"
          ],
          "avgRating": 4.3,
          "parentId": "7382",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=10034943~p=2~eid=0000018c-8cb1-1330-0692-0d1e00ac0213~srvts=1703167464240~90964",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 0.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-22 00:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                "shortDescription": "Kids Favourite options",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                      "description": "",
                      "shortDescription": "Kids Favourite options",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=12394",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "389992",
          "name": "Nandhana Palace",
          "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
          "locality": "Daddakanahalli",
          "areaName": "Sarjapur Road",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Andhra",
            "Biryani",
            "North Indian",
            "Chinese",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "2120",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 0.8,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "0.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-21 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹175 OFF",
            "subHeader": "ABOVE ₹449",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=389992",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "52145",
          "name": "Aromas of Biryani",
          "cloudinaryImageId": "7d83016d319aebcb90ac3c9c106987a3",
          "locality": "Daddakanahalli",
          "areaName": "Sarjapur Road",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Tandoor"
          ],
          "avgRating": 4.2,
          "parentId": "36155",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=10036008~p=3~eid=0000018c-8cb1-1330-0692-0d1f00ac035e~srvts=1703167464240~90964",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-21 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹599",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=52145",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "722462",
          "name": "Cheesecake & co.",
          "cloudinaryImageId": "fc10df377b9a35bafcd0254d5a1206f2",
          "locality": "Sarjapur Road",
          "areaName": "Bellandur Sarjapur",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Indian",
            "Bakery"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "387417",
          "avgRatingString": "4.5",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 0.9,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "0.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-22 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                "shortDescription": "Kids Favourite options",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "fontColor": "#7E808C",
                      "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                      "description": "",
                      "shortDescription": "Kids Favourite options"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=722462",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "276123",
          "name": "A2B - Adyar Ananda Bhavan",
          "cloudinaryImageId": "wyye51803rxhfllt2dmm",
          "locality": "Daddakanahalli",
          "areaName": "Sarjapur Road",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Sweets",
            "Chinese"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "22",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=10031393~p=4~eid=0000018c-8cb1-1330-0692-0d2000ac0422~srvts=1703167464240~90964",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-21 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=276123",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "394626",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "ntlp9znkk0htmyw0bvjv",
          "locality": "Sarjapur - Marathahalli Rd",
          "areaName": "Bellandur",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "parentId": "4961",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.9,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-22 03:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                "shortDescription": "Kids Favourite options",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                      "description": "",
                      "shortDescription": "Kids Favourite options",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=394626",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "345504",
          "name": "Sharief Bhai",
          "cloudinaryImageId": "9ca4ac15ca5cdee1e71efe15909d465f",
          "locality": "Sarjapur Road",
          "areaName": "Sarjapur Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Arabian",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "parentId": "5734",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=9931636~p=6~eid=0000018c-8cb1-1330-0692-0d2200ac062c~srvts=1703167464240~90964",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-21 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹749",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=345504",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "23690",
          "name": "McDonald's",
          "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
          "locality": "ORR Central Mall",
          "areaName": "Bellandur",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "630",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-22 03:45:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹1000",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=23690",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "67535",
          "name": "Sri Vishnu Grand",
          "cloudinaryImageId": "vxxrkw6cv9mlmpu6lfbk",
          "locality": "Kasavanahalli",
          "areaName": "Sarjapur Road",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Chinese",
            "South Indian",
            "North Indian",
            "Punjabi"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "5697",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=10036015~p=7~eid=0000018c-8cb1-1330-0692-0d2300ac0743~srvts=1703167464240~90964",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-21 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=67535",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "779491",
          "name": "Tandoori Merchant",
          "cloudinaryImageId": "48623bc4e9bc293cd5e5a969da68e355",
          "locality": "Mahadevapura",
          "areaName": "Bellandur Sarjapur",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Tandoor",
            "Chinese",
            "North Indian",
            "Biryani"
          ],
          "avgRating": 3.4,
          "parentId": "21570",
          "avgRatingString": "3.4",
          "totalRatingsString": "9",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-22 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=779491",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
      }
    }
  }]
const RestaurantCard=(props)=>{
    const {resData}=props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.card.card.info;
    return(
        <div className="res-card" style={styleCard} >
            
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>

        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {
                resObj.map((restaurant)=>(
                    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
    )
    
}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
