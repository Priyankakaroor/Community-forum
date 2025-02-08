import React, { useState } from "react";
import "./styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [content, setContent] = useState("");

  const handleSend = () => {
    console.log("Thread posted:", content);
    setContent("");
    setShowInput(false);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Community Forum</div>
        
        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#">Mentor</a></li>
            <li><a href="#">Knowledge Hub</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </nav>

     
      </header>
      <div className="search-login">
          <input type="text" className="search-bar" placeholder="Search Topics" />
          <button className="login-button">Search</button>
        </div>
      <section className="categories">
  <h2>Categories</h2>
  <div className="category-cards">
    {["Funding", "Scaling", "Product Development", "Marketing"].map((name, index) => (
      <div key={index} className="card">
        <img
          src={`/images/${name.toLowerCase().replace(" ", "-")}.jpeg`}
          alt={name}
          onError={(e) => {
            e.target.src = "/images/placeholder.jpeg"; // Fallback image
          
            e.target.onerror = () => {
              e.target.src = "/images/placeholder.png";
            };
          }}
        />
        <p>{name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Filters */}
      <section className="filters">
        <button>Most Popular</button>
        <button>Highest Votes</button>
        <button>Latest Thread</button>
        <button onClick={() => setShowInput(!showInput)} className="write-thread">Write New Thread</button>
      
      </section>

      {/* Write New Thread */}
      {showInput && (
        <div className="write-section">
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your thread here..."/>
          <button onClick={handleSend}>Send</button>
        </div>
      )}

      {/* Main Content - Threads and Trending Topics */}
      <section className="content-section">
      <div className="trending-topics">
          <h2>Top Trending Topics</h2>
          <ul>
            {["Venture Capital Trends", "Startup Funding 101", "Angel Investors vs. VCs", "Crowdfunding Success Stories"].map((topic, index) => (
              <li key={index}>#{index + 1} {topic}</li>
            ))}
          </ul>
        </div>
           <div>
         <h2 className="threadh2">Threads & Discussions</h2>
        {/* Threads */}
        {/* <div className="threads">
      
          {[
            { votes: 32, title: "Is Investing in Renewable Energy the Future?", user: "green_thinker", time: "5 Hours Ago", content: "The renewable energy sector is booming. What are the key challenges?" },
            { votes: 30, title: "Tips for Scaling a Small E-Commerce Business", user: "ella_trends", time: "7 Hours Ago", content: "Scaling an e-commerce business is challenging. Share your tips!" },
            { votes: 30, title: "Tips for Scaling a Small E-Commerce Business", user: "ella_trends", time: "7 Hours Ago", content: "Scaling an e-commerce business is challenging. Share your tips!" },
            { votes: 30, title: "Tips for Scaling a Small E-Commerce Business", user: "ella_trends", time: "7 Hours Ago", content: "Scaling an e-commerce business is challenging. Share your tips!" },
            { votes: 30, title: "Tips for Scaling a Small E-Commerce Business", user: "ella_trends", time: "7 Hours Ago", content: "Scaling an e-commerce business is challenging. Share your tips!" },
            { votes: 30, title: "Tips for Scaling a Small E-Commerce Business", user: "ella_trends", time: "7 Hours Ago", content: "Scaling an e-commerce business is challenging. Share your tips!" }
          ].map((thread, index) => (
            <div key={index} className="thread">
              <div className="votes">{thread.votes}</div>
              <div className="thread-content">
                <h3>{thread.title}</h3>
                <span>Posted by {thread.user} · {thread.time}</span>
                <p>{thread.content}</p>
              </div>
            </div>
          ))}
        </div>
 </div> */}
<div className="threads">
  {[
    {
      votes: 25,
      replies: 3,
      user: "Noah Pierre",
      time: "58 minutes ago",
      content: "I'm a bit unclear about how condensation forms in the water cycle. Can someone break it down?",
      profilePic: "images/discussion-img.png",

    },
    {
      votes: 32,
      replies: 5,
      user: "green_thinker",
      time: "5 hours ago",
      content: "The renewable energy sector is booming. What are the key challenges?",
      profilePic: "images/discussion-img.png",

    },
    {
      votes: 30,
      replies: 4,
      user: "ella_trends",
      time: "7 hours ago",
      content: "Scaling an e-commerce business is challenging. Share your tips!",
      profilePic: "images/discussion-img.png",

    },
  ].map((thread, index) => (
    <div key={index} className="thread">
      <div className="thread-header">
        <div className="user-info">
          <img 
            src={thread.profilePic}
            alt={`${thread.user}'s Avatar`}
            className="avatar"
          />
          <div>
            <h1 className="user">{thread.user}</h1>
            <span className="time"> · {thread.time}</span>
          </div>
        </div>
      </div>
      <p className="thread-content">{thread.content}</p>
      <div className="thread-footer">
        <button className="vote-button">👍 {thread.votes}</button>
        <button className="reply-button">💬 {thread.replies} Replies</button>
      </div>
    </div>
  ))}
</div>
</div>


        {/* Trending Topics */}
        {/* <div className="trending-topics">
          <h2>Top Trending Topics</h2>
          <ul>
            {["Venture Capital Trends", "Startup Funding 101", "Angel Investors vs. VCs", "Crowdfunding Success Stories"].map((topic, index) => (
              <li key={index}>#{index + 1} {topic}</li>
            ))}
          </ul>
        </div> */}
      </section>
    </div>
  );
}

export default App;
