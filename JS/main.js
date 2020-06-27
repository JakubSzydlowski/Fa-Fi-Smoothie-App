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
plusProduct.forEach((plusProductOne) =>
  plusProductOne.addEventListener("click", function () {
    if (productsAdded.length <= 4) {
      if (this.textContent.length >= 20) {
        const checkedProduct = this.textContent;
        const tablicaMeserka = checkedProduct.split(",");
        for (i = 0; i <= 4; i++) {
          productsAdded.push(tablicaMeserka[i]);
        }
      } else {
        productsAdded.push(this.textContent);
      }

      for (a = 0, b = 4; a <= 4, b >= 0; a++, b--) {
        productsList[b].textContent = productsAdded[a];
        productsList[b].textContent = productsAdded[a];
        productsList[b].textContent = productsAdded[a];
        productsList[b].textContent = productsAdded[a];
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
        productsList[4].textContent = productsAdded[0];
        productsList[3].textContent = productsAdded[1];
        productsList[2].textContent = productsAdded[2];
        productsList[1].textContent = productsAdded[3];
        productsList[0].textContent = productsAdded[4];
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
checked.addEventListener("click", function () {
  checkedProducts.classList.add("CheckedUlShow");
  vegeProducts.classList.remove("VegeUlShow");
  fruitsProducts.classList.remove("FruitUlShow");
  addnitionalProducts.classList.remove("AdnitionalUlShow");
  closeBtn.classList.replace("close", "closeShowed");
});

addnitional.addEventListener("click", function () {
  addnitionalProducts.classList.add("AdnitionalUlShow");
  vegeProducts.classList.remove("VegeUlShow");
  fruitsProducts.classList.remove("FruitUlShow");
  checkedProducts.classList.remove("CheckedUlShow");
  closeBtn.classList.replace("close", "closeShowed");
});

vege.addEventListener("click", function () {
  vegeProducts.classList.add("VegeUlShow");
  fruitsProducts.classList.remove("FruitUlShow");
  addnitionalProducts.classList.remove("AdnitionalUlShow");
  checkedProducts.classList.remove("CheckedUlShow");

  closeBtn.classList.replace("close", "closeShowed");
});

fruits.addEventListener("click", function () {
  fruitsProducts.classList.add("FruitUlShow");
  vegeProducts.classList.remove("VegeUlShow");
  addnitionalProducts.classList.remove("AdnitionalUlShow");
  checkedProducts.classList.remove("CheckedUlShow");
  closeBtn.classList.replace("close", "closeShowed");
});

closeBtn.addEventListener("click", function () {
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
