const menu = [
    {
      id: 1,
      title: "Espresso",
      category: "coffee",
      price: 44.99,
      img: "https://i.pinimg.com/564x/6d/f5/72/6df5720eb7fbe45bff5cc8d5739e8d56.jpg",
      desc: `Espresso is a type of coffee in which finely ground coffee is quickly brewed with compressive power. It was discovered in Italy in the 1900s. It is prepared using an electric espresso machine. It is a coffee of dense consistency, served in small portions of 30 ml. `,
    },
    {
      id: 2,
      title: "Latte",
      category: "coffee",
      price: 54.99,
      img: "https://i.pinimg.com/736x/10/93/99/109399bd50d646366f05b5d626aacf0a.jpg",
      desc: `
      Latte can be expressed as a type of coffee with milk and foam. Latte is known as a coffee variety that is highly preferred by milk coffee lovers. `,
    },
    {
      id: 3,
      title: "Turkish Coffee",
      category: "coffee",
      price: 39.99,
      img: "https://i.pinimg.com/564x/a8/b5/86/a8b58607aa3e85f35bf4498255de2105.jpg",
      desc: `It has a unique identity and tradition with its unique taste, foam, smell and the way it is presented. It is the only type of coffee served with grounds.`,
    },
    {
      id: 4,
      title: "Caramel Macchiato",
      category: "coffee",
      price: 59.99,
      img: "https://i.pinimg.com/736x/4c/52/30/4c5230451f1316fb44b204c8e8b6bcd7.jpg",
      desc: `Due to the proportions of coffee and milk added to it, one of them has a small milk that softens the dense coffee, while the other feels a coffee aroma coming from behind the dense milk. Caramel macchiato, prepared with caramel, is among the most popular coffee varieties with its sugary taste `,
    },
    {
      id: 5,
      title: "Filter Coffee",
      category: "coffee",
      price: 62.99,
      img: "https://i.pinimg.com/736x/ba/4f/85/ba4f85726d965ea52a0a83de47b44fa8.jpg",
      desc: `It is a type of coffee obtained by combining ground coffee beans with hot water and brewing. The brewed coffee is filtered through a paper or metal filter, separated from its pulp and ready to serve. `,
    },
    {
      id: 6,
      title: "White Chocalate Mocha",
      category: "coffee",
      price: 64.99,
      img: "https://i.pinimg.com/564x/22/08/21/2208214ac0d5ad24dcc7bed4c8d6a1b9.jpg",
      desc: `
      White chocolate mocha is a sweet and creamy drink prepared with espresso, milk and white chocolate. Unlike other coffee drinks, white chocolate mocha has a sweeter and creamier flavor and is often used in cold coffee drinks as well.`,
    },
    {
      id: 7,
      title: "Tea",
      category: "tea",
      price: 25.99,
      img: "https://i.pinimg.com/564x/6e/30/3d/6e303d820e24705f4481b4c8a5dab1b5.jpg",
      desc: `Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to East Asia which probably originated in the borderlands of southwestern China and northern Myanmar. `,
    },
    {
      id: 8,
      title: "Green Tea",
      category: "tea",
      price: 34.99,
      img: "https://i.pinimg.com/564x/51/c3/81/51c381d5cf78ade73bb2f07e0ce7c431.jpg",
      desc: `Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas. `,
    },
    {
      id: 9,
      title: "Sage Tea",
      category: "tea",
      price: 35.99,
      img: "https://i.pinimg.com/736x/2b/a7/e7/2ba7e7177fee9007634f077a9510e3f8.jpg",
      desc: `Sage tea is an aromatic infusion made from the leaves of common sage (Salvia officinalis), an herb in the same family as mint.`,
    },
    {
      id: 10,
      title: "Linden Tea",
      category: "tea",
      price: 28.99,
      img: "https://i.pinimg.com/564x/88/ea/fc/88eafc06633348f763e5409bb2386cb3.jpg",
      desc: `Linden tea has been used in folk medicine across cultures to relieve high blood pressure, calm anxiety, and soothe digestion.

      To create this herbal infusion, flowers, leaves, and bark are boiled and steeped. Separately, these components have been used for different medicinal purposes`,
    },
    {
      id: 11,
      title: "RoseShip Tea",
      category: "tea",
      price: 35.99,
      img: "https://i.pinimg.com/564x/3e/1e/e7/3e1ee76942cbd2bbec070d846493a41b.jpg",
      desc: `Rosehip tea is an herbal tea made from the pseudo-fruits of the rose plant.
      It has a delicate, floral flavor that’s slightly sweet with a distinct tart aftertaste.
      Found just below the rose petals, rose hips are small, round, and typically red or orange.`,
    },
    {
      id: 12,
      title: "Soda",
      category: "soda",
      price: 22.99,
      img: "https://i.pinimg.com/564x/ee/67/c8/ee67c805e6b3f5e35af11070cae79326.jpg",
      desc: `Carbonated water is water containing dissolved carbon dioxide gas, either artificially injected under pressure or occurring due to natural geological processes.`,
    },
    {
      id: 13,
      title: "Cupcake",
      category: "dessert",
      price: 84.99,
      img: "https://i.pinimg.com/736x/83/24/4e/83244efc3538d9a69dcbbbe2de6c7336.jpg",
      desc: `A cupcake is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup. As with larger cakes, frosting and other cake decorations such as fruit and candy may be applied.`,
    },
    {
      id: 14,
      title: "Chocolate brownie",
      category: "dessert",
      price: 84.99,
      img: "https://i.pinimg.com/564x/bf/48/7d/bf487d95b05cd0822f3c7b5915ce5450.jpg",
      desc: `A chocolate brownie, or simply a brownie, is a chocolate baked confection. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density. Brownies often, but not always, have a glossy "skin" on their upper crust.`,
    },
    {
      id: 15,
      title: "Doughnut",
      category: "dessert",
      price: 74.99,
      img: "https://i.pinimg.com/564x/66/03/1c/66031c94edede7cc8205dfca27b7f16a.jpg",
      desc: `A doughnut or donut is a type of food made from leavened fried dough. It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors`,
    },
    {
      id: 16,
      title: "Cookies",
      category: "dessert",
      price: 79.99,
      img: "https://i.pinimg.com/564x/7c/50/c0/7c50c0f803096d73c83a5c71c8640c2a.jpg",
      desc: `One of the most beautiful things you can put in front of a chocolaholic is undoubtedly these cookies! While it makes you want to eat madly even when it is in the form of raw dough, its structure that disintegrates in the mouth after cooking, the taste left on the palate by the melted chocolate chips in it.. It can be the definition of happiness`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }