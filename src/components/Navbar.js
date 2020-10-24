import React from "react"

function Navbar(){
    return <div>

        <nav class="navbar fixed-top navbar-expand-lg navbar-light">
            <div class="d-flex flex-grow-1">
                <span class="w-100 d-lg-none d-block"></span>
                {/* hidden spacer to center brand on mobile */}
                <a class="navbar-brand" href="#">
                    Logo
                </a>
                <div class="w-100 text-right">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div class="collapse navbar-collapse flex-grow-1 text-right">
                <ul class="navbar-nav ml-auto flex-nowrap">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Art</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Design</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Books</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
}

export default Navbar;