//let btn=document.querySelector(".bannerbtn1");
//btn.addEventListener("click", () => {
//  let ime=prompt("kako se zoves?");
//    localStorage.setItem("ime", ime);
//    let user=document.querySelector(".acc_p");
//    user.textContent=localStorage.getItem("ime");
//})

let btn=document.querySelector(".bannerbtn1");
let panel=document.querySelector(".panel");
let acountname=document.querySelector(".acc_p");
let title=document.querySelector(".Title");
let fancytxt=document.querySelector(".fancytxt");
let theconsole=document.querySelector(".konzola");
let MyJson= '{"first" : "konzola","second" : "konzola2","third" : "konzola3"}'//sa MyJson-om je ideja da fetcujem sve jsone
let consoles=JSON.parse(MyJson);


btn.addEventListener("click", () => {
    setTimeout(createRegister1st, 500)
})

    //AddGlobalEventListener("click",'button', e=>{
        //console.log("radim")
      //  createRegister1st();
    //})

    function createRegister1st() {
        title.remove();
        fancytxt.remove();
        cl(theconsole);
        theconsole.className=consoles.second;
        
        alignmentdiv=document.createElement("div");
        theconsole.append(alignmentdiv);
        alignmentdiv.className="consolealigndiv";
        let tekst = document.createElement("p");
        theconsole.append(tekst);
        tekst.innerText="/*Attaboy! First, lets get your name and your super mega secret indentification code.*/";
         tekst.className="Attaboytekst";
    
         tekst = document.createElement("p");
         theconsole.append(tekst);
         tekst.innerText="Name:";
          tekst.className="Useernametekst";
          input= document.createElement("input");
          pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.innerText="=>";
            pomdiv.append(input);
          input.className="usernameinput";
          pomdiv.className="inputarrowdiv";
    
          tekst = document.createElement("p");
          theconsole.append(tekst);
          tekst.innerText="Password:";
          tekst.className="Passwordtekst";
          input= document.createElement("input");
          pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.innerText="=>";
            pomdiv.append(input);
          input.className="passwordinput";
          pomdiv.className="inputarrowdiv";

          dugme=document.createElement("button");
          dugme.innerText="Next"
          pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.append(dugme);
          dugme.className="Nextdugme1";
          pomdiv.className="Nextdugmediv1"
          //  
          dugme.addEventListener("click", () => {
             setTimeout(createRegister2nd, 500)
             dugme.remove();
             dugme.removeEventListener;
         })
    }
    function createRegister2nd() {
        tekst = document.createElement("p");
        theconsole.append(tekst);
        tekst.innerText="/*Now let us now where we can contact you:*/";
         tekst.className="Attaboytekst";
  
         tekst = document.createElement("p");
         theconsole.append(tekst);
         tekst.innerText="Email:";
          tekst.className="emailtekst";
          input= document.createElement("input");
          pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.innerText="=>";
            pomdiv.append(input);
          input.className="emailinput";
          pomdiv.className="inputarrowdiv";

          dugme=document.createElement("button");
          pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.append(dugme);
          dugme.className="Nextdugme2";
          pomdiv.className="Nextdugmediv2"
          dugme.innerText="Next"
          //  
          dugme.addEventListener("click", () => {
          setTimeout(createRegister3rd, 500)
          dugme.remove();
          dugme.removeEventListener;
          })
    }

    function createRegister3rd() {
        tekst = document.createElement("p");
        theconsole.append(tekst);
        tekst.innerText="/*We sent a code to your e-mail. Be kind and just type it in below*/";
         tekst.className="Attaboytekst";

        tekst = document.createElement("p");
        theconsole.append(tekst);
        tekst.innerText="verification code:";
         tekst.className="verificationcodetekst";
         input= document.createElement("input");
         pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.innerText="=>";
            pomdiv.append(input);
         input.className="verificationcodeinput";
         pomdiv.className="inputarrowdiv";

         dugme=document.createElement("button");
         pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.append(dugme);
         dugme.className="Nextdugme3";
         pomdiv.className="Nextdugmediv3"
         dugme.innerText="Next"
         //  
         dugme.addEventListener("click", () => {
            setTimeout(createRegister4th, 500)
            dugme.remove();
            dugme.removeEventListener;
            })
    }

    function createRegister4th() {
        tekst = document.createElement("p");
        theconsole.append(tekst);
        tekst.innerText="/*HA! We're onto you, you sneaky bot. Bet you can't type out the numbers you see on the pic below, cause you're stupid.*/";
         tekst.className="Attaboytekst";

         slika=document.createElement("div")
           theconsole.append(slika)
           //slika.style.backgroundimage='url("putslike")'

           tekst = document.createElement("p");
           theconsole.append(tekst);
           tekst.innerText="type here:";
            tekst.className="verificationtesttekst";
            input= document.createElement("input");
            pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.innerText="=>";
            pomdiv.append(input);
            input.className="verificationtestinput";
            pomdiv.className="inputarrowdiv";
            
            dugme=document.createElement("button");
            pomdiv=document.createElement("div")
            theconsole.append(pomdiv);
            pomdiv.append(dugme);
            dugme.className="Submitdugme";
            dugme.innerText="Submit";

    }
    function cl(node) {
    let deca=node.children;

    for (let i = 0; i < deca.length; i+1) {
        const element = deca[i];
        element.remove();
    }
}





function AddGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e=>{
        console.log("ja se pozovem")
        if(e.target.matches(selector)) callback(e)
    })
}

//PISMENI
let spanclick=document.querySelector(".licinabutton");
spanclick.addEventListener("click", e=>{
    document.querySelector(".pismeniparagraf").innerText=JSON.stringify(pismeniJson.d[0]);
    Pismenifunkcija(pismeniJson.d);
})

function Pismenifunkcija(Jsonpismeni) {
    console.log("pozvan sam");
    let divpismeni2=document.querySelector(".section4")
    for (let i = 0; i<Jsonpismeni.length; i++) {
        console.log("iteracija");
        const element = Jsonpismeni[i];
        let y= document.createElement("p")
        y.innerText=""+JSON.stringify(element);
        divpismeni2.append(y);
    }
}



let pismeniJson={

ime:"users", 
d:[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  }
  ]}
