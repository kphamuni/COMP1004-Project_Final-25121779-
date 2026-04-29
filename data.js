//DATA FOR ALL VEHICLES 
//Will use with template literals 
//Array BRANDS with vehicle brand names
//IDSs salso used for site navigation
export const BRANDS = ["Toyota", "Subaru", "Honda", "Porsche", "Ferrari", "Mazda", "Nissan", "BMW"];

//Vehicle class
export const VEHICLES = [
  //--------------------------------------------Toyota---------------------------------------------
  { 
    id: "toyota-gryaris", 
    brand: "Toyota", 
    model: "GR Yaris Rally1", 
    year: "2022",
    price: "N/A for consumer purchase",
    description: "The Toyota GR Yaris Rally1 is a high-performance, purpose-built, hybrid-powered World Rally Championship car developed by Toyota Gazoo Racing. It stands as the successor to the Yaris WRC. Still used today, it highlights the longetivity and strengths of the original and current model." ,
    bodystyle: "Hatchback",
    enginetype: "1.6L, turbocharged inline four-cylinder",
    power: "500 hp ",
    torque: "425 Nm",
    weight: "1,180 kg",
    zerotosixty: "2.0-4.0 seconds",
    topspeed: "approx. 125 mph",
    drivetype: "AWD",
    image1: "images/VehiclePages/yaris1.jpg",
    image2: "images/VehiclePages/yaris2.jpg"},
    
  { 
    id: "toyota-supra", 
    brand: "Toyota", 
    model: "Supra",
    year: "2024",
    price: "approx. £43,000",
    description: "The Toyota GR Supra is a high-performance sports coupe powered by a turbocharged inline-six engine. Built by Toyota Gazoo Racing in collaboration with BMW, the Supra sits on a speed-optimised platform providing it with a low centre of gravity, short wheelbase and wide track perfect for drivers with a need for speed.",
    bodystyle: "Coupe",
    enginetype: "3.0L, twin-scroll turbocharged inline six-cylinder",
    power: "382 hp",
    torque: "530 Nm",
    weight: "approx. 1,570 kg",
    zerotosixty: "approx. 3.9 seconds",
    topspeed: "155 mph",
    drivetype: "RWD",
    image1:"images/VehiclePages/supra1.jpg",
    image2:"images/VehiclePages/supra2.jpg"

  },

  //--------------------------------------------Subarus---------------------------------------------
  { 
    id: "subaru-wrx-sti", 
    brand: "Subaru", 
    model: "WRX STI",
    year:"2018",
    price:"approx. £32,000",
    description:"The Subaru WRX STI is made to be a sportier, more performance-orientated variant of the regular Subaru WRX based on the rally-made Impreza WRX. The WRX STI has also made many pop culture appearances, such as in the Fast & Furious franchise and Baby Driver",
    bodystyle:"Sedan",
    enginetype:"2.5L, turocharged flat-four boxer",
    power:"300 hp",
    torque:"407 Nm",
    weight:"1,599 kg",
    zerotosixty:"approx. 5.0 seconds",
    topspeed:"159 mph",
    drivetype:"AWD",
    image1:"images/VehiclePages/wrxsti1.jpg",
    image2:"images/VehiclePages/wrxsti2.jpg",
  },

  { 
    id: "subaru-impreza-wrc", 
    brand: "Subaru", 
    model: "Impreza WRC",
    year:"1993",
    price:"N/A for consumer purchase",
    description:"The Subaru Impreza WRC is the inspiration for the commercial Impreza WRX or 'World Rally eXperimental'. Built for the World Rally it debuted in 1993 going on to win 6 total world rally titles, its an original taste of Subaru which has inspired many of their modern vehicles designs produced today.",
    bodystyle:"Sedan",
    enginetype:"2.0L, turbocharged flat-four boxer",
    power:"300 hp",
    torque:"440 Nm",
    weight:"1,200 kg",
    zerotosixty:"4.4-6.4 seconds",
    topspeed:"approx. 143 mph",
    drivetype:"AWD",
    image1:"images/VehiclePages/impreza1.jpg",
    image2:"images/VehiclePages/impreza2.jpg" 
  },

  //--------------------------------------------Honda---------------------------------------------
  { id: "honda-prelude", 
    brand: "Honda", 
    model: "Prelude Type S",
    year:"1998",
    price:"approx. £15,000",
    description:"The fifth generation of Honda Preludes brought a Japanese-exclusive Type S. This was a high-performance model including stronger specs and revamped systems such as a more efficient air box, exhuast system, etc. All aimed to provide a superior driving experience in comparison to base models.",
    bodystyle:"Notchback coupe",
    enginetype:"2.2L, H22A DOHC VTEC inline four-cylinder",
    power:"217 hp",
    torque:"221 Nm",
    weight:"1,310 kg",
    zerotosixty:"6.5-7.0 seconds",
    topspeed:"approx. 150 mph",
    drivetype:"FWD",
    image1:"images/VehiclePages/prelude1.jpg",
    image2:"images/VehiclePages/prelude2.jpg"  
  },

  { 
    id: "honda-integra-type-r", 
    brand: "Honda", 
    model: "Integra Type R DC2",
    year:"1995",
    price:"approx. £22,500",
    description:"Among the generations of Integras, the DC2 is well-praised to be one of if not the best iteration. Originally, the JDM models came with 'bug-eye' lights, these were controverisal however which prompted a facelift where it recieved more conventional-style rectangle lights made it instantly more popular and combined with stonger specs and better handling than any of its siblings, it became a well-known top of the line JDM car. ",
    bodystyle:"Liftback coupe",
    enginetype:"1.8L, B18C DOHC VTEC inline four-cylinder",
    power:"197 hp",
    torque:"181 Nm",
    weight:"1,060 kg",
    zerotosixty:"6.5-7.0 seconds",
    topspeed:"approx. 145 mph",
    drivetype:"FWD",
    image1:"images/VehiclePages/integra1.jpg",
    image2:"images/VehiclePages/integra2.jpg"  
  },

  //--------------------------------------------Porsche---------------------------------------------
  { 
    id: "porsche-911-gt3rs", 
    brand: "Porsche", 
    model: "911 GT3RS",
    year:"1999",
    price:"£192,600",
    description:"The 911 GT3RS is racing and track-focused supercar. With direct links to motorsport competitions such as the 911 GT3 Cup. Based on the Porsche 911, the GT3RS (Racing series) boasts high-performance specs which make it very strong. With its aerodynamic shape and large rear wing, its built to be fast on straights and round bends and due to being both street-legal and track-ready, its considered highly valuable in both the street and competitive racing market",
    bodystyle:"Coupe",
    enginetype:"4.0L, six-cylinder",
    power:"518 hp",
    torque:"465 Nm",
    weight:"1,450 kg",
    zerotosixty:"2.9-3.2 seconds",
    topspeed:"184 mph",
    drivetype:"RWD",
    image1:"images/VehiclePages/9111.jpg",
    image2:"images/VehiclePages/9112.jpg"  
  },

  { 
    id: "porsche-taycan-turbos",
    brand: "Porsche",
    model: "Taycan Turbo S",
    year: "2023",
    price: "£140,000",
    description: "The Taycan Turbo S is a high-performance, luxury battery electric sports car offering a more modern but still Porsche take on super cars as highlighted with its digital-heavy interior and more sleek exterior. While being electric, the Taycan is a beast genrally able outperform many supercars with its monsterous specs.",
    bodystyle: "Saloon",
    enginetype: "Dual electric motors",
    power: "750 hp (overboost)",
    torque: "1,050 Nm",
    weight: "2,295 kg",
    zerotosixty: "2.6 seconds",
    topspeed: "161 mph",
    drivetype: "AWD",
    image1: "images/VehiclePages/taycan1.jpg",
    image2: "images/VehiclePages/taycan2.jpg"
  },

  //--------------------------------------------Mazda---------------------------------------------
  { 
    id: "mazda-rx7", 
    brand: "Mazda", 
    model: "RX-7 (FD)",
    year: "1991",
    price: "£38,000-£50,000",
    description: "The Mazda RX-7 FB (or third generation) was a big step up from the last the prior generations, with its release many fans deem it as 'objectively' the best RX-7 generation due to this better design. With the updated design it was also important to ensure the actual driving aspect of the car also improved and Mazda solved this by being one of the first companies to mass-produce sequential twin-turbocharger systems which were to be used in these vehicles.",
    bodystyle: "Coupe",
    enginetype: "1.3L, 13B-REW twin-rotor sequential twin-turbocharged rotary engine",
    power: "approx. 255 hp",
    torque: "294 Nm",
    weight: "1,260 kg",
    zerotosixty: "4.9-5.3 seconds",
    topspeed: "155-158 mph",
    drivetype: "RWD",
    image1: "images/VehiclePages/rx71.jpg",
    image2: "images/VehiclePages/rx72.jpg"
  },

  { 
    id: "mazda-rx8", 
    brand: "Mazda", 
    model: "RX-8",
    year: "1991",
    price: "£38,000-£50,000",
    description: "The Mazda RX-7 FB (or third generation) was a big step up from the last the prior generations, with its release many fans deem it as 'objectively' the best RX-7 generation due to this better design. With the updated design it was also important to ensure the actual driving aspect of the car also improved and Mazda solved this by being one of the first companies to mass-produce sequential twin-turbocharger systems which were to be used in these vehicles.",
    bodystyle: "Coupe",
    enginetype: "1.3L, 13B-REW twin-rotor sequential twin-turbocharged rotary engine",
    power: "approx. 255 hp",
    torque: "294 Nm",
    weight: "1,260 kg",
    zerotosixty: "4.9-5.3 seconds",
    topspeed: "155-158 mph",
    drivetype: "RWD",
    image1: "images/VehiclePages/rx71.jpg",
    image2: "images/VehiclePages/rx72.jpg"
  },

  //----------------------------------------------Nissan--------------------------------------------
  { 
    id: "nissan-gtr", 
    brand: "Nissan", 
    model: "R35 GT-R",
    year: "2017",
    price: "approx. £70,000-£85,000",
    description: "The Nissan R35 GT-R is known as one of the most popular GT-R models. In 2017, this was especially key as it recieved a new more modern design/ facelift featuring a V-grille, better aerodynamics and increase in said power, with other system upgrades, this allowed 2017+ models to perform even better. Not even taking into account general imrpovements to the interior materials, design and layout aswell.",
    bodystyle: "Coupe",
    enginetype: "3.8L, VR38DETT twin-turbocharged V6",
    power: "565 hp",
    torque: "633 Nm",
    weight: "1,780-1,785 kg",
    zerotosixty: "2.8-2.9 seconds",
    topspeed: "196 mph",
    drivetype: "AWD",
    image1: "images/VehiclePages/r351.jpg",
    image2: "images/VehiclePages/r352.jpg"
  },

  { 
    id: "nissan-skyline", 
    brand: "Nissan", 
    model: "Skyline R34 GT-R ",
    year: "1999",
    price: "approx. £90,000-£110,000",
    description: "The R34 Skyline is widely regared to as the most iconic JDM car, its highly praised and recognised for its renowned design, performance and appearances in pop culture, notably showing up in many movies from the Fast and Furious franchise. Rooted from Japanese racing origins, its a globally established staple for car enthusiasts.",
    bodystyle: "Coupe",
    enginetype: "2.6L, inline-six twin-turbo",
    power: "276 hp",
    torque: "392 Nm",
    weight: "approx. 1,550 kg",
    zerotosixty: "4.4-5.2 seconds",
    topspeed: "155 mph",
    drivetype: "AWD",
    image1: "images/VehiclePages/r341.jpg",
    image2: "images/VehiclePages/r342.jpg"
  },

  //----------------------------------------------BMW----------------------------------------------
  {
    id: "bmw-m3", 
    brand: "BMW", 
    model: "M3 E46",
    year: "2005",
    price: "approx. £20,000-£40,000",
    description: "The BMW M3 E46, is a powerful, sports coupe known especially in European markets for its good handling and strong performance. With its signiture BMW design and grill, its well-recognisable by car lovers and is highly sought after as both a performance and daily-driver.",
    bodystyle: "Coupe",
    enginetype: "3.2L inline-six (naturally aspirated)",
    power: "343 hp",
    torque: "365 Nm",
    weight: "approx. 1,495 kg",
    zerotosixty: "4.8-5.1 seconds",
    topspeed: "155 mph",
    drivetype: "RWD",
    image1: "images/VehiclePages/m31.jpg",
    image2: "images/VehiclePages/m32.jpg"
  },

  {
    id: "bmw-m4", 
    brand: "BMW",
    model: "M4",
    year: "2021",
    price: "approx. £75,000-£90,000",
    description: "The BMW M4 is a more modern and higher performing take on the BMW 4 Series. With changes to many systems, the car is practically a stright upgrade both internally and externally. With changes to the engine, exhuast, suspension and even changing to a carbon fiber roof to reduce weight it provides a luxury as well as enthusiast driver experience. Similarly to the M3, the M4 is very and sought after as a primary staple of BMW's car brand.",
    bodystyle: "Coupe",
    enginetype: "3.0L inline-six twin-turbo",
    power: "473 hp",
    torque: "550 Nm",
    weight: "approx. 1,725 kg",
    zerotosixty: "3.8-4.1 seconds",
    topspeed: "155 mph",
    drivetype: "RWD",
    image1: "images/VehiclePages/m41.jpg",
    image2: "images/VehiclePages/m42.jpg"
  },

  //----------------------------------------------FERRARI----------------------------------------------
  {
    id: "ferrari-488", 
    brand: "Ferrari", 
    model:"488 GTB",
    year: "2015",
    price: "approx. £180,000-£220,000",
    description: "The Ferrari 488 was the successor to the 458, with its aggressive and expensive silhouette it's an eye-catcher thats instantly identifiable as Ferrari. Along with this, it's also a strong Italian powerhouse with the exterior boasting new, large and functional side air intakes and being designed to generate around 50% more downforce with the overall shape and 'blown' spoiler. One of the many reasons for its high topspeed.",
    bodystyle: "Coupe",
    enginetype: "3.9L, V8 twin-turbo",
    power: "661 hp",
    torque: "760 Nm",
    weight: "approx. 1,475 kg",
    zerotosixty: "3.0 seconds",
    topspeed: "205 mph",
    drivetype: "RWD",
    image1: "images/VehiclePages/488GTB1.jpg",
    image2: "images/VehiclePages/488GTB2.jpg"
  },

  {
    id: "ferrari-f40", 
    brand: "Ferrari", 
    model: "F40",
    year: "1987",
    price: "approx. £1,500,000-£2,500,000",
    description: "The F40 is a iconic legendary supercar made by Ferrari aimed to be a racing car for the road. It started production in 1987 to celebrate its 40th aniversary with only 1,311 units being made. Its highly exotic shape and 'clamshell' design featured a large rear spoiler aswell as being paired with the classic Ferrari 'racing red', made it extemely recognisable. Also, due to the limited production it's very valued by collectors and enthusiasts alike.",
    bodystyle: "Coupe",
    enginetype: "2.9L, V8 twin-turbo",
    power: "478 hp",
    torque: "577 Nm",
    weight: "approx. 1,100 kg",
    zerotosixty: "3.8-4.1 seconds",
    topspeed: "201 mph",
    drivetype: "RWD",
    image1: "images/VehiclePages/f401.jpg",
    image2: "images/VehiclePages/f402.jpg"
  }

];
