// Header.js
import React from "react";

const Header = () => {
	return (
		<header className="header">
			<h1>Admin Dashboard</h1>
			<div className="user-info">
				<span>Welcome, Admin</span>
				<button>Logout</button>
			</div>
		</header>
	);
};

export default Header;
