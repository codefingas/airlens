new Vue ({
    el : "#vue-app",
    data : {
        siteInfo : {
                    siteLogo : "../assets/img/royal-foods/Transparent (1).png",
                   siteLogoAlt : "Royal Foods"
        },
        cartArea : {
           
        }
    },
    methods: {
       closeCart : function () {//this function closes the cart area 
           let cartArea = document.getElementById("cart-area");
           cartArea.style.width = "0px";//this sets the wiidth of the cart area to zero

       }
    },
    computed: {

        
    }
});