import React from "react";
import { useNavigate } from "react-router";
import "../../styles/categories.css"

export const Categories = () => {
    const navigate = useNavigate()
    return(
        <div>
            <div className="py-5" id="bg-categories">
                <div>
                    <h2 id='categories-title'>CATEGOR&Iacute;AS</h2>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom pluma" onClick={(e)=>{navigate("/pluma")}}>
                        <a id='anchor-categories'><h1 className="center">PLUMA</h1></a>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom" onClick={(e)=>{navigate("/pena")}}>
                        <a id='anchor-categories'><h1 className="center">PENA</h1></a>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom"  onClick={(e)=>{navigate("/leve")}}>
                        <a id='anchor-categories'><h1 className="center">LEVE</h1></a>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom"  onClick={(e)=>{navigate("/medio")}}>
                        <a id='anchor-categories'><h1 className="center">MEDIO</h1></a>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom"  onClick={(e)=>{navigate("/medio-pesado")}}>
                        <a id='anchor-categories'><h1 className="center">MEDIO-PESADO</h1></a>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom"  onClick={(e)=>{navigate("/pesado")}}>
                        <a id='anchor-categories'><h1 className="center">PESADO</h1></a>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom"  onClick={(e)=>{navigate("/ultra-pesado")}}>
                        <a id='anchor-categories'><h1 className="center">ULTRA-PESADO</h1></a>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom"  onClick={(e)=>{navigate("/absoluto")}}>
                        <a id='anchor-categories'><h1 className="center">ABSOLUTO</h1></a>
                    </div>
                </div>
            </div>       
        </div>
    )
}

