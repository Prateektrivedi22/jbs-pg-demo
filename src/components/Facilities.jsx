function Facilities() {

  const facilities = [
  {
    icon: "🛏",
    title: "Fully Furnished Rooms",
    desc: "Bed, Mattress, Study Table & Wardrobe"
  },
  {
    icon: "🍛",
    title: "Home-style Food",
    desc: "Fresh Breakfast, Lunch & Dinner"
  },
  {
    icon: "📶",
    title: "High-Speed WiFi",
    desc: "Unlimited Internet Access"
  },
  {
    icon: "🧹",
    title: "Daily Housekeeping",
    desc: "Clean Rooms Every Day"
  },
  {
    icon: "🔒",
    title: "24×7 Security",
    desc: "Safe & Secure Environment"
  },
  {
    icon: "📹",
    title: "CCTV Surveillance",
    desc: "24 Hours Camera Monitoring"
  },
  {
    icon: "💧",
    title: "RO Drinking Water",
    desc: "Pure Drinking Water"
  },
  {
    icon: "⚡",
    title: "Power Backup",
    desc: "Electricity Available 24×7"
  },
  {
    icon: "🚿",
    title: "Attached Bathroom",
    desc: "Clean & Modern Washrooms"
  },
  {
    icon: "🧺",
    title: "Laundry Service",
    desc: "Laundry Facility Available"
  },
  {
    icon: "🚪",
    title: "Spacious Rooms",
    desc: "Comfortable Living Space"
  },
  {
    icon: "📍",
    title: "Prime Location",
    desc: "Near Galgotias & NIU"
  }
];

  return (

  <section className="facilities" data-aos="zoom-in">

<div className="section-title">

<span>WHY CHOOSE US</span>

<h2>Everything Students Need</h2>

<p>

Premium facilities designed for comfortable student living.

</p>

</div>

<div className="facility-grid">

{

facilities.map((item)=>(

<div className="facility-card" key={item.title}>

<div className="facility-icon">

{item.icon}

</div>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

</div>

))

}

</div>

</section>

  );

}

export default Facilities;