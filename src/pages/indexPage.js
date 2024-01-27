import React from 'react';
import '../styles/indexPage.scss'
import NavbarComponent from "../components/NavbarComponent";
import FrontSliderComponent from "../components/FrontSliderComponent";
import CategoryShortcutComponent from "../components/CategoryShortcutComponent";
import FrontFocusComponent from "../components/FrontFocusComponent";


function IndexPage(props) {
    return (
        <div>
            <NavbarComponent/>
            <FrontSliderComponent/>
            <CategoryShortcutComponent/>
            <FrontFocusComponent/>
        </div>
    );
}


export default IndexPage;