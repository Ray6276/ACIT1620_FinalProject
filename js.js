$(document).ready(function(){
//                if the document is jQuery ready, them do the following function
    var displayDiv = document.getElementById("display");
    var logo = document.getElementById("logo");
    var Butprod = document.getElementById("product");
    var Butfeat = document.getElementById("feature");
    var Buthome = document.getElementById("home");
    
                
    $.ajax({
        url:"home.html",
        dataType:"html",
        success:function(resp){
            displayDiv.innerHTML = resp;
            var intro = document.getElementById("intro");
            intro.style.width = "100vw";
            
            
            
            Buthome.onclick = function(){
                
                $.ajax({
                    url:"home.html",
                    dataType:"html",
                    success:function(resp){
                        displayDiv.innerHTML = resp;
                        var intro = document.getElementById("intro");
                        intro.style.width = "100vw";
                    }
                });   
            }
            
            logo.onclick = function(){
                
                $.ajax({
                    url:"function.html",
                    dataType:"html",
                    success:function(resp){
                        displayDiv.innerHTML = resp;
                        var funt = document.getElementById("funt");
                        funt.style.width = "100vw";
                    }
                });   
            }
            
            Butprod.onclick = function(){
                
                $.ajax({
                    url:"product.html",
                    dataType:"html",
                    success:function(resp){
                        displayDiv.innerHTML = resp;
                        var prod = document.getElementById("prod");
                        prod.style.width = "700";
                        prod.style.height = "500px";
                        prod.style.margin = "0 0 0 -1px";
                        
                        var prod2 = document.getElementById("prod2");
                        prod2.style.width = "700px";
                        prod2.style.height = "500px";
                        prod2.style.margin = "0 0 0 -5px";
                    }
                });   
            }
            
            
            Butfeat.onclick = function(){
                
                $.ajax({
                    url:"feature.html",
                    dataType:"html",
                    success:function(resp){
                        displayDiv.innerHTML = resp;
                        var feat = document.getElementById("feat");
                        feat.style.width = "100vw";
                        feat.style.height = "440px";
                    }
                });   
            }
        
            
        }
    });  
});