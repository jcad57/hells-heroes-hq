import menuIcon from "../assets/menu-icon.png";

export default function PageHeader() {
  return (
    <div className="page-header__wrapper dashboard-card">
      <img className="menu-icon" src={menuIcon} />
      <h1 className="page-header__text">COMMAND CENTER</h1>

      {
        /* Modal for mobile screens */
        // <div className="mobile-modal">
        //   <button className="mobile-modal__btn">Create New Post</button>
        // </div>
      }
    </div>
  );
}
