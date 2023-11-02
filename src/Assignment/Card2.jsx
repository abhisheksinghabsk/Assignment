import "./Card2.css";

export default function Card2() {
  return (
    <div>
      <div>
        <p>Group & Follower Details</p>
      </div>
      <br></br>
      <div>
        <span>Groups</span>
        <span>Following</span>
        <span>Followers</span>
      </div>
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
