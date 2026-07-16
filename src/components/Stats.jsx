function Stats() {
  const stats = [
    { number: "150+", title: "Happy Students" },
    { number: "24×7", title: "Security" },
    { number: "WiFi", title: "High-Speed Internet" },
    { number: "Fresh", title: "Home-style Food" },
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;