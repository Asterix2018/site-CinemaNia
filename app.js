const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  
  const itemNumber = movieLists[i].querySelectorAll("img").length;
 let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth/270);
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4-ratio) >= 0){
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value
      - 300}px)`;
    }else{
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
    
  });

  console.log(movieLists[i].querySelectorAll("img").length);
});

let suggestions = [
  "Avatar 2",
  "Dune 2",
  "Represalii",
  "Top Gun 2",
  "Venom",
  "The Marvels",
  "The Flash",
  "Napoleon",
  "Wonka",
  "Barbie",
  "Poor Things",
  "Parasite",
  "Champions",
  "Puppy Love",
  "Babylon",
  "Casa Gucci",
  "Love Again",
  "Let Love Grow",
  "Robots",
  "Maybe I Do",
  "Sweet On You",
  "Brooklyn",
  "After",
  "Katak",
  "Migration",
  "Wish",
  "Mummies",
  "Minions 2",
  "Lightyear",
  "Space Jam",
  "The Fall Guy",
  "Furiosa",
  "Deadpool 3",
  "Alien",
  "Beetlejuice 2",
  "Joker 2",
  "Gladiator 2",
];



const database = {
  "Dune 2": "Dune2",
  "Avatar 2": "Avatar2",
  "Represalii": "Represalii",
  "Top Gun 2": "TopGun2",
  "Venom": "Venom",
  "The Flash": "TheFlash",
  "The Marvels": "TheMarvels",
  "Napoleon": "Napoleon",
  "Wonka": "Wonka",
  "Barbie": "Barbie",
  "Poor Things": "Poor Things",
  "Parasite": "Parasite",
  "Champions": "Champions",
  "Puppy Love": "Puppy love",
  "Babylon": "Babylon",
  "Casa Gucci": "Casa Gucci",
  "Love Again": "Love Again",
  "Let Love Grow": "Let Love Grow",
  "Robots": "Robots",
  "Maybe I Do": "Maybe i Do",
  "Sweet On You": "Sweet On You",
  "Brooklyn": "Brooklyn",
  "After": "After",
  "Katak": "Katak",
  "Migration": "Migration",
  "Wish": "Wish",
  "Mummies": "Mummies",
  "Minions 2": "Minions2",
  "Lightyear": "Lightyear",
  "Space Jam": "Space Jam",
  "The Fall Guy": "The Fall Guy",
  "Furiosa": "Furiosa",
  "Deadpool 3": "Deadpool 3",
  "Alien": "Alien",
  "Beetlejuice 2": "Beetlejuice2",
  "Joker 2": "Joker2",
  "Gladiator 2": "Gladiator 2",

  
}

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;


inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
          
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); 
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); 
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `${database[selectData]}.html`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


const section = document.querySelector("section"),
        overlay = document.querySelector(".overlay"),
        showBtn = document.querySelector(".btn2"),
        closeBtn = document.querySelector(".close-btn");

       showBtn.addEventListener("click", () => section.classList.add("active"));

       overlay.addEventListener("click", () =>
        section.classList.remove("active")
      );

      closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
      );

      

     

    const plus0 = document.querySelector(".plus0"),
    minus0 = document.querySelector(".minus0"),
    num0 = document.querySelector(".num0"),
    price1 = document.querySelector(".price1");
    

      const ADULT_PRICE = 27
      const ELEV_PRICE = 22
      const STUDENT_PRICE = 22
      const COPIL = 18
      const VIP = 50

    updatePrice = () => {
      return ADULT_PRICE*a + ELEV_PRICE*b + STUDENT_PRICE*c + COPIL*d + VIP*e
    }
  
    let a = 0;
    
    plus0.addEventListener("click", ()=>{
      
      if(a <5){
        
      a++;
      a = (a < 10) ?  + a : a;
      num0.innerHTML = a;
      price1.innerHTML = updatePrice() + "Lei";
      
      

      }
    });
    minus0.addEventListener("click", ()=>{
      if(a > 0){
        
        a--;
        a = (a < 10) ?  + a : a;
        num0.innerHTML = a;
        price1.innerHTML = updatePrice() + "Lei";
        
        
      }
    });

    const plus1 = document.querySelector(".plus1"),
    minus1 = document.querySelector(".minus1"),
    num1 = document.querySelector(".num1");
    
    let b = 0;
    plus1.addEventListener("click", ()=>{
      
      if(b <5){
        
      b++;
      b = (b < 10) ?  + b : b;
      num1.innerHTML = b;
      price1.innerHTML= updatePrice() + "Lei";
      
      }
    });
    minus1.addEventListener("click", ()=>{
      if(b > 0){
        b--;
        b = (b < 10) ?  + b : b;
        num1.innerHTML = b;
        price1.innerHTML = updatePrice() + "Lei";
      }
    });


    const plus2 = document.querySelector(".plus2"),
    minus2 = document.querySelector(".minus2"),
    num2 = document.querySelector(".num2");
    let c = 0;
    plus2.addEventListener("click", ()=>{
      
      if(c <5){
        
      c++;
      c = (c < 10) ?  + c : c;
      num2.innerHTML = c;
      price1.innerHTML = updatePrice() + "Lei";
      }
    });
    minus2.addEventListener("click", ()=>{
      if(c > 0){
        c--;
        c = (b < 10) ?  + c : c;
        num2.innerHTML = c;
        price1.innerHTML = updatePrice() + "Lei";
      }
    });

    const plus3 = document.querySelector(".plus3"),
    minus3 = document.querySelector(".minus3"),
    num3 = document.querySelector(".num3");
    let d = 0;
    plus3.addEventListener("click", ()=>{
      
      if(d <5){
        
      d++;
      d = (d < 10) ?  + d : d;
      num3.innerHTML = d;
      price1.innerHTML = updatePrice() + "Lei";
      }
    });
    minus3.addEventListener("click", ()=>{
      if(d > 0){
        d--;
        d = (d < 10) ?  + d : d;
        num3.innerHTML = d;
        price1.innerHTML = updatePrice() + "Lei";
      }
    });

    const plus4 = document.querySelector(".plus4"),
    minus4 = document.querySelector(".minus4"),
    num4 = document.querySelector(".num4");
    let e = 0;
    plus4.addEventListener("click", ()=>{
      
      if(e <5){
        
      e++;
      e = (e < 10) ?  + e : e;
      num4.innerHTML = e;
      price1.innerHTML = updatePrice() + "Lei";
      }
    });
    minus4.addEventListener("click", ()=>{
      if(e > 0){
        e--;
        e = (e < 10) ?  + e : e;
        num4.innerHTML = e;
        price1.innerHTML = updatePrice() + "Lei";
      }
    });

    
      