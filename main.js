const startPanel = document.querySelector(".startPanel");
const btnLetsStart = document.querySelector(".slideToApp");
const cities = [...document.querySelectorAll(".choiceCity div")];

const choiceCityPanel = document.querySelector(".choiceCity");

const choiceApp = document.querySelector(".choiceApp");

const choiceOne = [...document.querySelectorAll(".choiceOne")];

const fruits = document.querySelector(".fruits");
const fruitsProducts = document.querySelector(".fruits ul");
const fruitsProductsLi = [...document.querySelectorAll(".UlFruits li")];

const vege = document.querySelector(".vege");
const vegeProducts = document.querySelector(".vege ul");
const vegeProductsLi = [...document.querySelectorAll(".UlVege li")];

const addnitional = document.querySelector(".addnitional");
const addnitionalProducts = document.querySelector(".addnitional ul");
const addnitionalProductsLi = [
  ...document.querySelectorAll(".UlAddnitional li"),
];

const checked = document.querySelector(".checked");
const checkedProducts = document.querySelector(".checked ul");
const checkedProductsLi = [...document.querySelectorAll(".UlChecked li")];

const closeBtn = document.querySelector("div.close");

// LOGIKA dodawanie produktów do cap
// przypisanie wartości tablicy ze skladnikami do kolumny oraz zwiekszanie inside w cap

const plusProduct = [...document.querySelectorAll(".choicer li .plus")];
const minusProduct = [...document.querySelectorAll(".choicer li .minus")];
const productsAdded = [];

const productsList = [...document.querySelectorAll(".productsList li")];

const insideGrow = document.querySelector(".Smoothie .inside .insideUP");
const tablicaMeserka = [];

// Dodawanie gotowych smoothie do koszyka
const addToBasketBtn = document.querySelector(".yourSmothie .AddToBasket");
const smoothieList = [
  ...document.querySelectorAll(".smoothieList .smoothieListOrder ul li p"),
];
const smoothieListSlide = [
  ...document.querySelectorAll(".smoothieList .smoothieListOrder ul li"),
];
const IconDeleteSmoothie = document.querySelector(
  ".smoothieList .smoothieListOrder ul li span"
);
const smoothieListProductsList = [
  ...document.querySelectorAll(".smoothieList .smoothieListOrder ul>p"),
];
const deleteAddedSmoothie = [
  ...document.querySelectorAll(".smoothieListOrder ul li span"),
];
let N = 0;
let P;
let PN = -1;
let o = 0;
const price = document.querySelector(".cena");

deleteAddedSmoothie.forEach((deleteAddedSmoothieOne) =>
  deleteAddedSmoothieOne.addEventListener("click", function () {
    P = this.dataset.option;
    PN = Number(P);
    smoothieListSlide[PN - 1].style.left = "-110%";
    smoothieListProductsList[PN - 1].style.left = "-110%";
    smoothieListProductsList[PN - 1].textContent = "";
    smoothieList[PN - 1].textContent = "";

    if (N >= 0) {
      if (smoothieList[0].textContent == "") {
        N = 1;
      } else if (smoothieList[1].textContent == "") {
        N = 2;
      } else if (smoothieList[2].textContent == "") {
        N = 3;
      } else if (smoothieList[3].textContent == "") {
        N = 4;
      } else if (smoothieList[4].textContent == "") {
        N = 5;
      } else if (smoothieList[5].textContent == "") {
        N = 6;
      }
    }
    if (o >= 8) {
      o = o - 8;
    }

    price.textContent = o;
  })
);
addToBasketBtn.addEventListener("mouseover", function () {
  addToBasketBtn.textContent = "+";
});
addToBasketBtn.addEventListener("mouseout", function () {
  addToBasketBtn.textContent = "Dodaj smoothie";
});
addToBasketBtn.addEventListener("click", function () {
  if (productsAdded.length == 5) {
    if (N <= 5) {
      if (smoothieList[0].textContent == "") {
        N = 1;
      } else if (smoothieList[1].textContent == "") {
        N = 2;
      } else if (smoothieList[2].textContent == "") {
        N = 3;
      } else if (smoothieList[3].textContent == "") {
        N = 4;
      } else if (smoothieList[4].textContent == "") {
        N = 5;
      } else if (smoothieList[5].textContent == "") {
        N = 6;
      }

      smoothieList[N - 1].textContent = "Smoothie " + N;

      smoothieListProductsList[N - 1].textContent =
        productsList[0].textContent +
        ", " +
        productsList[1].textContent +
        ", " +
        productsList[2].textContent +
        ", " +
        productsList[3].textContent +
        ", " +
        productsList[4].textContent;

      productsAdded.splice(0, 5);
      smoothieListSlide[N - 1].style.left = "0";
      smoothieListProductsList[N - 1].style.left = "0";
      for (a = 0, b = 4; a <= 4, b >= 0; a++, b--) {
        productsList[b].textContent = productsAdded[a];

        productsAdded[0]
          ? (insideGrow.style.top = "80%")
          : (insideGrow.style.top = "100%");
        if (productsAdded[1]) {
          insideGrow.style.top = "60%";
        }
        if (productsAdded[2]) {
          insideGrow.style.top = "40%";
        }
        if (productsAdded[3]) {
          insideGrow.style.top = "20%";
        }
        if (productsAdded[4]) {
          insideGrow.style.top = "0%";
        }
      }
      o = o + 8;
      price.textContent = o;
    } else {
      alert(
        "Z racji dostaw realizowanych przez drony, maksymalna ilość Smoothies w zamówieniu to 6 sztuk. Aby zamówić więcej niż 6 sztuk dokonaj zamówienia ponowanie."
      );
    }
  } else {
    alert("Musisz wybrać 5 składników!");
  }
});

// Dodawanie gotowych smoothie do koszyka ENd

plusProduct.forEach((plusProductOne) =>
  plusProductOne.addEventListener("click", function () {
    if (productsAdded.length <= 4) {
      if (this.textContent.length >= 20 && productsAdded.length == 0) {
        const checkedProduct = this.textContent;
        const tablicaMeserka = checkedProduct.split(",");
        for (i = 0; i <= 4; i++) {
          productsAdded.push(tablicaMeserka[i]);
        }
      } else if (this.textContent.length <= 20) {
        productsAdded.push(this.textContent);
      } else {
        alert("Aby dodać polecone smoothie- usuń obecnie dodane skłaniki!");
      }

      for (a = 0, b = 4; a <= 4, b >= 0; a++, b--) {
        productsList[b].textContent = productsAdded[a];

        productsAdded[0]
          ? (insideGrow.style.top = "80%")
          : (insideGrow.style.top = "100%");
        if (productsAdded[1]) {
          insideGrow.style.top = "60%";
        }
        if (productsAdded[2]) {
          insideGrow.style.top = "40%";
        }
        if (productsAdded[3]) {
          insideGrow.style.top = "20%";
        }
        if (productsAdded[4]) {
          insideGrow.style.top = "0%";
        }
      }
    } else {
      alert("Dodałeś już maksymalną ilość składników na jedno Smoothie!");
    }
  })
);

minusProduct.forEach((minusProductOne) =>
  minusProductOne.addEventListener("click", function () {
    let b = productsAdded.indexOf(this.textContent);
    if (b >= 0 || this.textContent.length >= 20) {
      if (this.textContent.length >= 20) {
        const checkedProduct = this.textContent;
        const tablicaMeserka = checkedProduct.split(",");
        for (x = 0; x <= 4; x++) {
          if (tablicaMeserka[x] == productsAdded[x]) {
            for (i = 0; i <= 4; i++) {
              productsAdded.splice(tablicaMeserka, 5);
            }
          }
        }
      } else {
        productsAdded.splice(b, 1);
      }
      for (a = 0, b = 4; a <= 4, b >= 0; a++, b--) {
        productsList[b].textContent = productsAdded[a];
      }
      productsAdded[0]
        ? (insideGrow.style.top = "80%")
        : (insideGrow.style.top = "100%");

      if (productsAdded[1]) {
        insideGrow.style.top = "60%";
      }
      if (productsAdded[2]) {
        insideGrow.style.top = "40%";
      }
      if (productsAdded[3]) {
        insideGrow.style.top = "20%";
      }
      if (productsAdded[3]) {
        insideGrow.style.top = "20%";
      }
      if (productsAdded[4]) {
        insideGrow.style.top = "0%";
      }
    }
    // console.log(productsAdded);
  })
);

// logika dodawanie produktów do cap END
// przypisanie wartości tablicy ze skladnikami do kolumny oraz zwiekszanie inside w cap END
// otwieranie i zamykanie okienka z wyborem produktów

// Pay and order przycisk
const PayAndOrderBtn = document.querySelector(".OrderAndPay");
const CoverPayAndOrderBtn = document.querySelector(".OrderAndPay div");
const payAndDeliverySection = document.querySelector(".payAndDelivery");
const totalAmound = document.querySelector(".yourTotalAmound");
let priceTotal;
const payingBtn = document.querySelector(".paying");
const startDelivery = document.querySelector(".droneStart");
const coverLastInfo = document.querySelector(".coverLastInfo");
const deliveryCode = document.querySelector(".deliveryCode span");

payingBtn.addEventListener("click", function () {
  payingBtn.textContent = "Zapłacone";
  payingBtn.style.backgroundColor = "rgb(188, 255, 149)";
  if (startDelivery.textContent != "Wystartowane!") {
    randomCode = Math.floor(Math.random() * 10000);
    console.log(randomCode);
    deliveryCode.textContent = randomCode;
  }
});
startDelivery.addEventListener("click", function () {
  if (payingBtn.textContent == "Zapłacone") {
    coverLastInfo.style.left = "50%";
    startDelivery.textContent = "Wystartowane!";
    startDelivery.style.backgroundColor = "rgb(188, 255, 149)";
  } else {
    alert("Zapłać!");
  }
});
PayAndOrderBtn.addEventListener("click", function () {
  if (price.textContent > 0) {
    E = price.textContent;
    priceTotal = Number(E);
    priceTotal2 = priceTotal + 8;
    console.log(priceTotal);
    totalAmound.textContent =
      "Całkowity koszt zamówienia: " + priceTotal2 + "zł";
    payAndDeliverySection.style.bottom = "0";
  } else {
    alert("Minimalna ilość zamówienia to 1 smoothie!");
  }
});

PayAndOrderBtn.addEventListener("mouseover", function () {
  CoverPayAndOrderBtn.style.left = "0%";
  CoverPayAndOrderBtn.style.bottom = "0%";
  CoverPayAndOrderBtn.style.transform = "rotate(0deg)";
  CoverPayAndOrderBtn.style.backgroundColor = "rgba(236, 236, 235, 0.999)";
});
PayAndOrderBtn.addEventListener("mouseout", function () {
  CoverPayAndOrderBtn.style.left = "60%";
  CoverPayAndOrderBtn.style.bottom = "160%";
  CoverPayAndOrderBtn.style.transform = "rotate(90deg)";
  CoverPayAndOrderBtn.style.backgroundColor = "rgba(78, 78, 76, 0.275)";
});
// Pay and order przycisk END

const LiFruits = [...document.querySelectorAll(".UlFruits li")];
const LiVege = [...document.querySelectorAll(".UlVege li")];
const LiAddnitional = [...document.querySelectorAll(".UlAddnitional li")];
const LiChecked = [...document.querySelectorAll(".UlChecked li")];

checked.addEventListener("click", function () {
  LiChecked.forEach((LiCheckedOne) => (LiCheckedOne.style.fontSize = "32px"));
  LiAddnitional.forEach(
    (LiAddnitionalOne) => (LiAddnitionalOne.style.fontSize = "0px")
  );
  LiVege.forEach((LiVegeOne) => (LiVegeOne.style.fontSize = "0px"));
  LiFruits.forEach((LiFruitsOne) => (LiFruitsOne.style.fontSize = "0px"));
  checkedProducts.classList.add("CheckedUlShow");
  vegeProducts.classList.remove("VegeUlShow");
  fruitsProducts.classList.remove("FruitUlShow");
  addnitionalProducts.classList.remove("AdnitionalUlShow");
  closeBtn.classList.replace("close", "closeShowed");
});

addnitional.addEventListener("click", function () {
  LiAddnitional.forEach(
    (LiAddnitionalOne) => (LiAddnitionalOne.style.fontSize = "32px")
  );
  LiChecked.forEach((LiCheckedOne) => (LiCheckedOne.style.fontSize = "0px"));
  LiVege.forEach((LiVegeOne) => (LiVegeOne.style.fontSize = "0px"));
  LiFruits.forEach((LiFruitsOne) => (LiFruitsOne.style.fontSize = "0px"));
  addnitionalProducts.classList.add("AdnitionalUlShow");
  vegeProducts.classList.remove("VegeUlShow");
  fruitsProducts.classList.remove("FruitUlShow");
  checkedProducts.classList.remove("CheckedUlShow");
  closeBtn.classList.replace("close", "closeShowed");
});

vege.addEventListener("click", function () {
  LiVege.forEach((LiVegeOne) => (LiVegeOne.style.fontSize = "32px"));
  LiChecked.forEach((LiCheckedOne) => (LiCheckedOne.style.fontSize = "0px"));
  LiAddnitional.forEach(
    (LiAddnitionalOne) => (LiAddnitionalOne.style.fontSize = "0px")
  );
  LiFruits.forEach((LiFruitsOne) => (LiFruitsOne.style.fontSize = "0px"));
  vegeProducts.classList.add("VegeUlShow");
  fruitsProducts.classList.remove("FruitUlShow");
  addnitionalProducts.classList.remove("AdnitionalUlShow");
  checkedProducts.classList.remove("CheckedUlShow");

  closeBtn.classList.replace("close", "closeShowed");
});

fruits.addEventListener("click", function () {
  LiFruits.forEach((LiFruitsOne) => (LiFruitsOne.style.fontSize = "32px"));
  LiChecked.forEach((LiCheckedOne) => (LiCheckedOne.style.fontSize = "0px"));
  LiAddnitional.forEach(
    (LiAddnitionalOne) => (LiAddnitionalOne.style.fontSize = "0px")
  );
  LiVege.forEach((LiVegeOne) => (LiVegeOne.style.fontSize = "0px"));
  fruitsProducts.classList.add("FruitUlShow");
  vegeProducts.classList.remove("VegeUlShow");
  addnitionalProducts.classList.remove("AdnitionalUlShow");
  checkedProducts.classList.remove("CheckedUlShow");
  closeBtn.classList.replace("close", "closeShowed");
});

closeBtn.addEventListener("click", function () {
  LiChecked.forEach((LiCheckedOne) => (LiCheckedOne.style.fontSize = "0px"));
  LiAddnitional.forEach(
    (LiAddnitionalOne) => (LiAddnitionalOne.style.fontSize = "0px")
  );
  LiVege.forEach((LiVegeOne) => (LiVegeOne.style.fontSize = "0px"));
  LiFruits.forEach((LiFruitsOne) => (LiFruitsOne.style.fontSize = "0px"));
  vegeProducts.classList.remove("VegeUlShow");
  addnitionalProducts.classList.remove("AdnitionalUlShow");
  checkedProducts.classList.remove("CheckedUlShow");
  fruitsProducts.classList.remove("FruitUlShow");
  closeBtn.classList.replace("closeShowed", "close");
});
// otwieranie i zamykanie okienka z wyborem produktów END

// przelaczneie pierwszego panelu i wybór miasta
btnLetsStart.addEventListener("click", function () {
  startPanel.classList.add("panel");
  choiceCityPanel.classList.add("city");
});

cities.forEach((city) =>
  city.addEventListener("click", function () {
    choiceApp.style.right = "0";
    choiceCityPanel.style.right = "100%";
  })
);
// przelaczneie pierwszego panelu i wybór miasta END
