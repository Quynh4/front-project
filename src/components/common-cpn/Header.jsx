/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/logo.png";
import expandMore from "../../assets/images/expand_more.svg";

function Header() {
	return (
		<nav className="navbar">
			<div className="logo">
				<a href="/">
					<img src={logo} alt="3D Motion Lab" />
				</a>
			</div>
			<nav>
				<ul className="menu">
					<li className="menu-item">
						<a href="/dich-vu">
							Dịch vụ
							<span className="dropdown-arrow">
								<img src={expandMore} alt="Expand" />
							</span>
						</a>
						{/* <ul className="dropdown">
							<li>
								<a href="#">Dịch vụ 1</a>
							</li>
							<li>
								<a href="#">Dịch vụ 2</a>
							</li>
							<li>
								<a href="#">Dịch vụ 3</a>
							</li>
						</ul> */}
					</li>
					<li className="menu-item">
						<a href="/bao-gia">
							Báo giá
							<span className="dropdown-arrow">
								<img src={expandMore} alt="Expand" />
							</span>
						</a>
						{/* <ul className="dropdown">
							<li>
								<a href="#">Gói 1</a>
							</li>
							<li>
								<a href="#">Gói 2</a>
							</li>
							<li>
								<a href="#">Gói 3</a>
							</li>
						</ul> */}
					</li>
					<li className="menu-item">
						<a href="/ve-chung-toi">Về chúng tôi</a>
					</li>
				</ul>
			</nav>
		</nav>
	);
}

export default Header;