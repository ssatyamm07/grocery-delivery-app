import React from 'react';

function Header() {
    return (
        <header>
            <div className="container">
                <h1>Grocery Delivery</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Specials</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
