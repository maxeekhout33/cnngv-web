import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import rigoImage from "../../img/rigo-baby.jpg";


export const Navbar = () => {
	// const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	return (
		<nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">

			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src={rigoImage} alt="Party-Time" border="0" height="60px" style={{ marginTop: "-8px", marginBottom: "-8px" }} />
				</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto mb-2 mb-lg-0">
						<a className="nav-link active" aria-current="page" onClick={(e)=>{navigate("/categories")}}>Categor&iacute;as</a>
						<a className="nav-link active" aria-current="page" onClick={(e)=>{navigate("/ranking")}}>Ranking</a>
						<a className="nav-link active" aria-current="page" onClick={(e)=>{navigate("/peleadores")}}>Peleadores</a>
						<a className="nav-link active" aria-current="page" onClick={(e)=>{navigate("/redes")}}>Redes Sociales</a>
						{/* <div>
							{!store.token
								? <div>
									<Link to="/signin">
										<button className="nav-links nav-links-btn">Ingresar</button>
									</Link>
								</div>
								: <div>
									<Link to="/private">
										<i className="fa-solid fa-circle-user fa-2xl"></i>
									</Link>
									<button
										className="nav-links nav-links-btn"
										onClick={(e) => {
											actions.deleteToken()
											actions.deleteUser()
											history.push("/")
										}}
									>Salir</button>
								</div>
							}
						</div> */}
					</div>
				</div>
			</div>
		</nav>
	);
};
