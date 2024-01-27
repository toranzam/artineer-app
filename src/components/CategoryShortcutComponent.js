import React from 'react';
import {Link} from "react-router-dom";
import "../styles/CategoryShortcutComponent.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faFile, faHandshake} from "@fortawesome/free-regular-svg-icons";
import {faBullhorn, faCode} from "@fortawesome/free-solid-svg-icons";


function CategoryShortcutComponent(props) {
    return (
        <div className="category-shortcut">
            <div className="category-shortcut-inner">
                <div className="category-shortcut-items">
                    <Link className="category-shortcut-item">
                        <em><FontAwesomeIcon icon={faCalendar} size={"lg"} /></em>
                        <span>동아리일정</span>
                    </Link>
                    <Link className="category-shortcut-item">
                        <em><FontAwesomeIcon icon={faCode} size={"lg"} /></em>
                        <span>프로그래밍 강좌</span>
                    </Link>
                    <Link className="category-shortcut-item">
                        <em><FontAwesomeIcon icon={faFile} size={"lg"} /></em>
                        <span>프로젝트</span>
                    </Link>
                    <Link className="category-shortcut-item">
                        <em><FontAwesomeIcon icon={faBullhorn} size={"lg"} /></em>
                        <span>공지사항</span>
                    </Link>
                    <Link className="category-shortcut-item">
                        <em><FontAwesomeIcon icon={faHandshake} size={"lg"} /></em>
                        <span>회의록</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryShortcutComponent;