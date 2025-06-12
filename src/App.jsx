function App() {
  return (
    <div className="app">
      <div className="faq-container">
        <div className="faq-header">
          <img src="assets/images/icon-star.svg" alt="Star Icon" className="star-icon" />
          <h1>FAQs</h1>
        </div>
        <div className="faq-item">
          <div className="faq-item-header">
            <h2>First item header</h2>
            <img src="assets/images/icon-plus.svg" alt="Plus Icon" className="plus-icon" />
          </div>
          <p className="faq-item-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App