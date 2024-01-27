import React from 'react';
import {Link} from "react-router-dom";
import "../styles/FrontFocusComponent.scss"
import thum from "../assets/thum.png"
import profileImg from "../assets/profileImg.png"

function FrontFocusComponent(props) {
    return (
        <div className="main-focus">
            <div className="main-focus-inner">
                <div className="main-focus-content">

                    <div className="main-focus-header">
                        <h2>동아리 활동 사진</h2>
                        <Link className="main-focus-link">전체 게시글보기</Link>
                    </div>
                    <div className="main-focus-items">

                        <div className="main-focus-item">
                            <div className="thum">
                                <img src={thum}/>
                            </div>
                            <div className="desc">
                                <div className="profile-img">
                                    <img src={profileImg}/>
                                </div>
                                <div className="desc-detail">
                                    <h3>23년 1학기 MT</h3>
                                    <p>이재용</p>
                                </div>
                            </div>
                        </div>

                        <div className="main-focus-item">
                            <div className="thum">
                                <img src={thum}/>
                            </div>
                            <div className="desc">
                                <div className="profile-img">
                                    <img src={profileImg}/>
                                </div>
                                <div className="desc-detail">
                                    <h3>23년 1학기 MT</h3>
                                    <p>이재용</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-focus-item">
                            <div className="thum">
                                <img src={thum}/>
                            </div>
                            <div className="desc">
                                <div className="profile-img">
                                    <img src={profileImg}/>
                                </div>
                                <div className="desc-detail">
                                    <h3>23년 1학기 MT</h3>
                                    <p>이재용</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-focus-item">
                            <div className="thum">
                                <img src={thum}/>
                            </div>
                            <div className="desc">
                                <div className="profile-img">
                                    <img src={profileImg}/>
                                </div>
                                <div className="desc-detail">
                                    <h3>23년 1학기 MT</h3>
                                    <p>이재용</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="main-focus-header">
                        <h2>동아리 가입인사</h2>
                        <Link className="main-focus-link">전체 게시글보기</Link>
                    </div>
                    <div className="main-focus-items">

                        <div className="main-focus-item">
                            <div className="thum">
                                <img src={thum}/>
                            </div>
                            <div className="desc">
                                <div className="profile-img">
                                    <img src={profileImg}/>
                                </div>
                                <div className="desc-detail">
                                    <h3>23년 1학기 MT</h3>
                                    <p>이재용</p>
                                </div>
                            </div>
                        </div>

                        <div className="main-focus-item">
                            <div className="thum">
                                <img src={thum}/>
                            </div>
                            <div className="desc">
                                <div className="profile-img">
                                    <img src={profileImg}/>
                                </div>
                                <div className="desc-detail">
                                    <h3>23년 1학기 MT</h3>
                                    <p>이재용</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-focus-item">
                            <div className="thum">
                                <img src={thum}/>
                            </div>
                            <div className="desc">
                                <div className="profile-img">
                                    <img src={profileImg}/>
                                </div>
                                <div className="desc-detail">
                                    <h3>23년 1학기 MT</h3>
                                    <p>이재용</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-focus-item">
                            <div className="thum">
                                <img src={thum}/>
                            </div>
                            <div className="desc">
                                <div className="profile-img">
                                    <img src={profileImg}/>
                                </div>
                                <div className="desc-detail">
                                    <h3>23년 1학기 MT</h3>
                                    <p>이재용</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
}

export default FrontFocusComponent;