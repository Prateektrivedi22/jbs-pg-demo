import singleRoom from "../assets/images/single-seater.jpeg";
import doubleRoom from "../assets/images/double-seater.jpeg";
import tripleRoom from "../assets/images/triple-seater.jpeg";

function RoomTypes() {

  const rooms = [

    {
      title:"Single Seater",
      image:singleRoom,
      price:"Starting from ₹9,000 / month",
      badge:"Most Private",
      features:[
        "🛏 Comfortable Bed",
        "📚 Study Table",
        "📶 High-Speed WiFi",
        "🧹 Daily Cleaning",
        "🍛 Home-style Food"
      ]
    },

    {
      title:"Double Seater",
      image:doubleRoom,
      price:"Starting from ₹7,500 / month",
      badge:"Most Popular",
      features:[
        "🛏 Comfortable Bed",
        "👥 Shared Room",
        "📶 High-Speed WiFi",
        "🧹 Daily Cleaning",
        "🍛 Home-style Food"
      ]
    },

    {
      title:"Triple Seater",
      image:tripleRoom,
      price:"Starting from ₹6,500 / month",
      badge:"Budget Friendly",
      features:[
        "🛏 Spacious Room",
        "👥 Shared Stay",
        "📶 High-Speed WiFi",
        "🧹 Daily Cleaning",
        "🍛 Home-style Food"
      ]
    }

  ];

  return (

<section className="rooms" id = "rooms" data-aos="fade-up">
<div className="section-title">

<span>ROOM OPTIONS</span>

<h2>Choose Your Perfect Room</h2>

<p>

Comfortable accommodation near Galgotias University.

</p>

</div>

<div className="room-grid">

{

rooms.map((room)=>(

<div className="room-card" key={room.title}>

<img src={room.image} alt={room.title}/>

<div className="room-content">

<div className="room-badge">

{room.badge}

</div>

<h3>{room.title}</h3>

<h4 className="room-price">

{room.price}

</h4>

<ul>

{

room.features.map((item)=>(

<li key={item}>{item}</li>

))

}

</ul>

<a
href="https://wa.me/919350207464"
target="_blank"
rel="noreferrer"
className="room-btn"
>

Check Availability →

</a>

</div>

</div>

))

}

</div>

</section>

  );

}

export default RoomTypes;