import "./DropdownCollapse.scss";

const DropdownCollapse = () => {
  const handleCollapse = (e) => {
    const btn = e.currentTarget;
    btn.classList.toggle("active");
    var content = btn.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
  return (
    <>
      <button className="collapsible mt-3" onClick={(e) => handleCollapse(e)}>
        <div className="avatar_container"></div>
        <div className="content">
          <p className="username">User</p>
          <p className="subtext">Telecaller</p>
        </div>
      </button>
      <div className="collapsible_content">
        <p className="my-2">
          User Details:
          <br />
          <span className="subtext dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            dicta?
          </span>
        </p>
      </div>
      <hr className="collapsible_hr mt-0" />
    </>
  );
};

export default DropdownCollapse;
