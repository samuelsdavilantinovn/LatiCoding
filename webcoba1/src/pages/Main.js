import { Outlet, Link } from "react-router-dom";

// function Main() {
//   return (
//     <>
//     <ul>
//       <li>
//         <Link to = "/">Beranda</Link>
//       </li>
//       <li>
//         <Link to = "/about">About</Link>
//       </li>
//     </ul>
//     <hr />
//     <Outlet></Outlet>

//     </>
//   )
// }

function Main() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ANotSoScaryStory</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Beranda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>Sampel Komik</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>

    </>
  )
}

export default Main;