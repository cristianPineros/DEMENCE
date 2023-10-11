export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "new",
      title: "New Collection",
    },
    {
      id: "log",
      title: "Log in",
    }
  ];


export const cardsInfo = [
    {
      id: 0,
      title : "gdrhgnehnbgishnblise",
      price : "",
      photo: "https://i.ebayimg.com/images/g/MQUAAOSwsl5kgC9H/s-l1200.jpg"
    },
    {
      id: 1,
      title : "hrdhdr",
      price : "",
      photo: "https://i.ebayimg.com/images/g/MQUAAOSwsl5kgC9H/s-l1200.jpg"
    },
    {
      id: 2,
      title : "",
      price : "",
      photo: "https://i.ebayimg.com/images/g/MQUAAOSwsl5kgC9H/s-l1200.jpg"
    },
    {
      id: 3,
      title : "",
      price : "",
      photo: "https://i.ebayimg.com/images/g/MQUAAOSwsl5kgC9H/s-l1200.jpg"
    },
    {
      id: 4,
      title : "",
      price : "",
      photo: "https://i.ebayimg.com/images/g/MQUAAOSwsl5kgC9H/s-l1200.jpg"
    },
    {
      id: 5,
      title : "",
      price : "",
      photo: "https://i.ebayimg.com/images/g/MQUAAOSwsl5kgC9H/s-l1200.jpg"
    }
  ]

  export function getProductInfo(id) {
    let productData = prodInfo.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productInfo;
}

  export const prodInfo = [
    {
      id: "p0",
      title : "Nike Invincible 3",
      price : "$ 199.00",
      description : "Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.",
      subDescription: "Special Sneaker",
      picture1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      picture2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      picture3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      picture4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    },
    {
      id: "p1",
      title : "njgiesgiosjeog",
      price : "$200000",
      description : "",
      subDescription: "",
      picture1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      picture2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      picture3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      picture4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    },
    {
      id: "p2",
      title : "",
      price : "",
      description : "",
      subDescription: "",
      picture1: "",
      picture2: "",
      picture3: "",
      picture4: ""
    },
    {
      id: "p3",
      title : "",
      price : "",
      description : "",
      subDescription: "",
      picture1: "",
      picture2: "",
      picture3: "",
      picture4: ""
    },
    {
      id: "p4",
      title : "",
      price : "",
      description : "",
      subDescription: "",
      picture1: "",
      picture2: "",
      picture3: "",
      picture4: ""
    },
    {
      id: "p5",
      title : "",
      price : "",
      description : "",
      subDescription: "",
      picture1: "",
      picture2: "",
      picture3: "",
      picture4: ""
    },
  ]
