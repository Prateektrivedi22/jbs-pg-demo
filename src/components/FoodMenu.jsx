function FoodMenu() {

const menu = [

{
day:"Monday",
breakfast:"Mooli Paratha + Tea",
lunch:"Rice + Roti + Aloo Patta Gobhi + Masoor Dal",
snacks:"Chowmein + Tea",
dinner:"Rice + Roti + Dal Tadka + Aloo Methi"
},

{
day:"Tuesday",
breakfast:"Sandwich + Aloo Paratha + Tea",
lunch:"Rice + Roti + Aloo Chana + Masoor Dal",
snacks:"Fried Rice + Tea",
dinner:"Rice + Poori + Aloo Tamatar + Kheer/Halwa"
},

{
day:"Wednesday",
breakfast:"Aloo Paratha + Tea",
lunch:"Rice + Roti + Aloo + Kabuli Chana",
snacks:"Pasta + Tea",
dinner:"Rice + Roti + Aloo Gobhi + Dal"
},

{
day:"Thursday",
breakfast:"Methi Paratha + Tea",
lunch:"Rice + Roti + Seasonal Veg + Rajma",
snacks:"Poha + Tea",
dinner:"Rice + Roti + Palak Paneer + Mix Dal"
},

{
day:"Friday",
breakfast:"Plain Paratha + Tea",
lunch:"Rice + Roti + Aloo Matar + Dal",
snacks:"Macaroni + Tea",
dinner:"Rice + Roti + Mix Veg + Dal"
},

{
day:"Saturday",
breakfast:"Mix Paratha + Tea",
lunch:"Rice + Roti + Dal + Seasonal Veg",
snacks:"Fried Rice + Tea",
dinner:"Rice + Roti + Chole Poori / Bhature"
},

{
day:"Sunday",
breakfast:"Poha + Tea",
lunch:"Veg Biryani + Raita + Chutney",
snacks:"Papdi + Tea",
dinner:"Rice + Roti + Matar Paneer / Shahi Paneer"
}

];

return(

<section className="food-menu" id="food" data-aos="fade-left">
  <h2>Weekly Food Menu</h2>

<p className="menu-subtitle">
Fresh Home-style Meals Served Every Day
</p>

<div className="menu-grid">

{menu.map((item)=>(

<div className="menu-card" key={item.day}>

<h3>{item.day}</h3>

<div className="meal">
<span>🍳 Breakfast</span>
<p>{item.breakfast}</p>
</div>

<div className="meal">
<span>🥘 Lunch</span>
<p>{item.lunch}</p>
</div>

<div className="meal">
<span>☕ Snacks</span>
<p>{item.snacks}</p>
</div>

<div className="meal">
<span>🍽 Dinner</span>
<p>{item.dinner}</p>
</div>

</div>

))}

</div>

</section>

)

}

export default FoodMenu;