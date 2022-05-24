
for (let i = 0; i < productsList.length; i++) {
      let crtr = document.createElement("div");
   crtr.setAttribute("class","col-md-3 col-sm-6 col-xs-6 col-lg-3 col-xl-3");
   crtr.innerHTML = `<div class="card text-center" style="max-height: 560px; width: 18rem;"> <img src="` + productsList[i].Resim + `" class="card-img-top" max alt="..."><div class="card-body"><h5 class="card-title text-center">` + productsList[i].UrunAdi + `</h5><p class="card-text text-center">` + productsList[i].Fiyat + ` TL</p>
   <a href="#" class=" btn btn-primary ">Sipariş ver!</a>
 </div>
 </div></div>`;
 document.querySelector('.kategoris').appendChild(crtr);
    }
    

    function elbise(){
        document.querySelector('.kategoris').innerHTML = ""
        for (let i = 0; i < productsList.length; i++) {
          if(productsList[i].Kategori == "Elbise"){
            let crtr = document.createElement("div");
         crtr.setAttribute("class","col-md-3 col-sm-6 col-xs-6 col-lg-3 col-xl-3");
         crtr.innerHTML = `<div class="card text-center" style="max-height: 560px; width: 18rem;"> <img src="` + productsList[i].Resim + `" class="card-img-top" max alt="..."><div class="card-body"><h5 class="card-title text-center">` + productsList[i].UrunAdi + `</h5><p class="card-text text-center">` + productsList[i].Fiyat + ` TL</p>
         <a href="#" class=" btn btn-primary ">Sipariş ver!</a>
       </div>
       </div></div>`;
       document.querySelector('.kategoris').appendChild(crtr);
          }
          
        }
      }

      function bluz(){
        document.querySelector('.kategoris').innerHTML = ""
        for (let i = 0; i < productsList.length; i++) {
          if(productsList[i].Kategori == "Bluz"){
            let crtr = document.createElement("div");
         crtr.setAttribute("class","col-md-3 col-sm-6 col-xs-6 col-lg-3 col-xl-3");
         crtr.innerHTML = `<div class="card text-center" style="max-height: 560px; width: 18rem;"> <img src="` + productsList[i].Resim + `" class="card-img-top" max alt="..."><div class="card-body"><h5 class="card-title text-center">` + productsList[i].UrunAdi + `</h5><p class="card-text text-center">` + productsList[i].Fiyat + ` TL</p>
         <a href="#" class=" btn btn-primary ">Sipariş ver!</a>
       </div>
       </div></div>`;
       document.querySelector('.kategoris').appendChild(crtr);
          }
          
        }
      }
