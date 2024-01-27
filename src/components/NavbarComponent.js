import React from 'react';
import {Link} from "react-router-dom";
import "../styles/NavbarComponent.scss"
import ButtonComponent from "./ButtonComponent";


function NavbarComponent(props) {
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="nav-left">
                    <Link to={'/'}>
                        <img className="logo" src={process.env.PUBLIC_URL + '/artineerLogo.svg'}/>
                    </Link>
                    <div className="gnb">
                        <Link className={'nav-link'} to={'/about'}>ABOUT</Link>
                        <Link className={'nav-link'} to={'/notice'}>NOTICE</Link>
                        <Link className={'nav-link'} to={'/activity'}>ACTIVITY</Link>
                        <Link className={'nav-link'} to={'/note'}>NOTE</Link>
                    </div>
                </div>
                <div className="nav-right">
                    <ButtonComponent to="/login" title="로그인"/>
                    <ButtonComponent to="/register" title="회원가입"/>
                    {/*<img className="alarm" src={process.env.PUBLIC_URL + '/bell1.svg'}/>*/}
                    {/*<img className="avatar" src={process.env.PUBLIC_URL + '/logo192.png'}/>*/}
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;