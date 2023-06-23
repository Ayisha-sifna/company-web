function Header() {
  return (
    <header>
      <video src="/video.mp4" loop autoPlay muted></video>
      <h1>Open Source Website</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Hire a Freelancers
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Join as a Freelancer
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
