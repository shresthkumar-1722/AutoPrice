function showCars() {

    let location = document.getElementById("location").value;

    let brand = document.getElementById("brand").value;


    if (location == "" || brand == "") {

        alert("Please select location and brand");

    }

    else {

        localStorage.setItem("location", location);

        localStorage.setItem("brand", brand);

        window.location.href = "brands.html";

    }

}



let selectedBrand = localStorage.getItem("brand");

let selectedLocation = localStorage.getItem("location");

// Location-wise price increase

let locationCharges = {

    Delhi: 0,

    Mumbai: 50000,

    Kolkata: 30000,

    Bangalore: 45000,

};

function getOnRoadPrice(exShowroomPrice) {

    let city = localStorage.getItem("location");

    let extra = locationCharges[city] || 0;

    let finalPrice = exShowroomPrice + extra;

    return "₹" + (finalPrice / 100000).toFixed(2) + " Lakh";

}



if (document.getElementById("brand-title")) {


    document.getElementById("brand-title").innerHTML =
        selectedBrand + " Cars in " + selectedLocation;



    let cars = "";



    if (selectedBrand == "Tata") {


        cars = `

<button onclick="showPrice('Tata Nexon')">
Tata Nexon
</button>


<button onclick="showPrice('Tata Punch')">
Tata Punch
</button>


<button onclick="showPrice('Tata Harrier')">
Tata Harrier
</button>


<button onclick="showPrice('Tata Safari')">
Tata Safari
</button>

`;

    }



    else if (selectedBrand == "Hyundai") {


        cars = `

<button onclick="showPrice('Hyundai Creta')">
Hyundai Creta
</button>


<button onclick="showPrice('Hyundai i20')">
Hyundai i20
</button>


<button onclick="showPrice('Hyundai Venue')">
Hyundai Venue
</button>

`;

    }



    else if (selectedBrand == "Maruti") {


        cars = `

<button onclick="showPrice('Maruti Swift')">
Maruti Swift
</button>


<button onclick="showPrice('Maruti Baleno')">
Maruti Baleno
</button>


<button onclick="showPrice('Maruti Brezza')">
Maruti Brezza
</button>

`;

    }



    else if (selectedBrand == "Mahindra") {


        cars = `

<button onclick="showPrice('Mahindra Scorpio')">
Mahindra Scorpio
</button>


<button onclick="showPrice('Mahindra XUV700')">
Mahindra XUV700
</button>

`;

    }



    document.getElementById("car-list").innerHTML = cars;


}




function showPrice(carName) {


    localStorage.setItem("car", carName);


    window.location = "price.html";


}





let selectedCar = localStorage.getItem("car");



if (document.getElementById("car-name")) {


    let variants = "";

    let city = localStorage.getItem("location");



    if (selectedCar == "Maruti Brezza") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/breeza1.png">

<div class="variant-info">

<h2>
Maruti Brezza LXi Petrol
</h2>

<p>
Ex-showroom Price:
₹8.69 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(869000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/breeza2.png">

<div class="variant-info">

<h2>
Maruti Brezza VXi Petrol
</h2>

<p>
Ex-showroom Price:
₹9.80 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(980000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/breeza3.webp">

<div class="variant-info">

<h2>
Maruti Brezza ZXi Petrol
</h2>

<p>
Ex-showroom Price:
₹11.30 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1130000)}
</p>

</div>

</div>

`;
    }

    else if (selectedCar == "Tata Nexon") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/nexon1.png">

<div class="variant-info">

<h2>
Tata Nexon Smart Petrol
</h2>

<p>
Ex-showroom Price:
₹8 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(800000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/nexon2.jpeg">

<div class="variant-info">

<h2>
Tata Nexon Pure Petrol
</h2>

<p>
Ex-showroom Price:
₹9.50 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(950000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/nexon3.jpg">

<div class="variant-info">

<h2>
Tata Nexon Creative Petrol
</h2>

<p>
Ex-showroom Price:
₹11 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1100000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Tata Punch") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/punch1.webp">

<div class="variant-info">

<h2>
Tata Punch Pure Petrol
</h2>

<p>
Ex-showroom Price:
₹6.20 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(620000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/punch2.png">

<div class="variant-info">

<h2>
Tata Punch Adventure Petrol
</h2>

<p>
Ex-showroom Price:
₹7.50 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(750000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/punch3.webp">

<div class="variant-info">

<h2>
Tata Punch Accomplished
</h2>

<p>
Ex-showroom Price:
₹9 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(900000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Tata Harrier") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/harrier1.png">

<div class="variant-info">

<h2>
Tata Harrier Smart Diesel
</h2>

<p>
Ex-showroom Price:
₹15.49 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1549000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/harrier2.webp">

<div class="variant-info">

<h2>
Tata Harrier Pure Diesel
</h2>

<p>
Ex-showroom Price:
₹17.99 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1799000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/harrier3.webp">

<div class="variant-info">

<h2>
Tata Harrier Fearless Diesel
</h2>

<p>
Ex-showroom Price:
₹22 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(2200000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Tata Safari") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/safari1.webp">

<div class="variant-info">

<h2>
Tata Safari Smart Diesel
</h2>

<p>
Ex-showroom Price:
₹15.49 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1549000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/safari2.jpg">

<div class="variant-info">

<h2>
Tata Safari Pure Diesel
</h2>

<p>
Ex-showroom Price:
₹18 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1800000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/safari3.png">

<div class="variant-info">

<h2>
Tata Safari Accomplished Diesel
</h2>

<p>
Ex-showroom Price:
₹23 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(2300000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Hyundai Creta") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/creta1.webp">

<div class="variant-info">

<h2>
Hyundai Creta E Petrol
</h2>

<p>
Ex-showroom Price:
₹11 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1100000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/creta2.png">

<div class="variant-info">

<h2>
Hyundai Creta S Petrol
</h2>

<p>
Ex-showroom Price:
₹13 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1300000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/creta3.webp">

<div class="variant-info">

<h2>
Hyundai Creta SX Petrol
</h2>

<p>
Ex-showroom Price:
₹17 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1700000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Hyundai i20") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/i201.jpg">

<div class="variant-info">

<h2>
Hyundai i20 Magna Petrol
</h2>

<p>
Ex-showroom Price:
₹7 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(700000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/i202.jpg">

<div class="variant-info">

<h2>
Hyundai i20 Sportz Petrol
</h2>

<p>
Ex-showroom Price:
₹8 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(800000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/i203.png">

<div class="variant-info">

<h2>
Hyundai i20 Asta Petrol
</h2>

<p>
Ex-showroom Price:
₹9 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(900000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Hyundai Venue") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/venue1.jpg">

<div class="variant-info">

<h2>
Hyundai Venue E Petrol
</h2>

<p>
Ex-showroom Price:
₹7.94 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(794000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/venue2.webp">

<div class="variant-info">

<h2>
Hyundai Venue S Petrol
</h2>

<p>
Ex-showroom Price:
₹9 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(900000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/venue3.webp">

<div class="variant-info">

<h2>
Hyundai Venue SX Petrol
</h2>

<p>
Ex-showroom Price:
₹11.50 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1150000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Maruti Swift") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/swift1.jpg">

<div class="variant-info">

<h2>
Maruti Swift LXi Petrol
</h2>

<p>
Ex-showroom Price:
₹6.49 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(649000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/swift2.jpg">

<div class="variant-info">

<h2>
Maruti Swift VXi Petrol
</h2>

<p>
Ex-showroom Price:
₹7.30 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(730000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/swift3.webp">

<div class="variant-info">

<h2>
Maruti Swift ZXi Petrol
</h2>

<p>
Ex-showroom Price:
₹8.80 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(880000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Maruti Baleno") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/baleno1.jpg">

<div class="variant-info">

<h2>
Maruti Baleno Sigma Petrol
</h2>

<p>
Ex-showroom Price:
₹6.66 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(666000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/baleno2.jpg">

<div class="variant-info">

<h2>
Maruti Baleno Delta Petrol
</h2>

<p>
Ex-showroom Price:
₹7.50 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(750000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/baleno3.jpg">

<div class="variant-info">

<h2>
Maruti Baleno Alpha Petrol
</h2>

<p>
Ex-showroom Price:
₹9 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(900000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Mahindra Scorpio") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/scorpio1.png">

<div class="variant-info">

<h2>
Mahindra Scorpio S Diesel
</h2>

<p>
Ex-showroom Price:
₹13.62 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1362000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/scorpio2.png">

<div class="variant-info">

<h2>
Mahindra Scorpio S11 Diesel
</h2>

<p>
Ex-showroom Price:
₹17 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1700000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/scorpio3.png">

<div class="variant-info">

<h2>
Mahindra Scorpio N Z8
</h2>

<p>
Ex-showroom Price:
₹20 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(2000000)}
</p>

</div>

</div>

`;

    }

    else if (selectedCar == "Mahindra XUV700") {

        variants = `

<div class="variant-card">

<img src="Images/Cars/xuv7001.jpeg">

<div class="variant-info">

<h2>
Mahindra XUV700 MX Petrol
</h2>

<p>
Ex-showroom Price:
₹14 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1400000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/xuv7002.png">

<div class="variant-info">

<h2>
Mahindra XUV700 AX5 Petrol
</h2>

<p>
Ex-showroom Price:
₹18 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(1800000)}
</p>

</div>

</div>



<div class="variant-card">

<img src="Images/Cars/xuv7003.webp">

<div class="variant-info">

<h2>
Mahindra XUV700 AX7 Diesel
</h2>

<p>
Ex-showroom Price:
₹24 Lakh
</p>

<p>
On-road Price (${city}):
${getOnRoadPrice(2400000)}
</p>

</div>

</div>

`;

    }

    document.getElementById("car-name").innerHTML = selectedCar;


    document.getElementById("variant-container").innerHTML = variants;


    document.getElementById("location-name").innerHTML =
        "Location: " + city;


}