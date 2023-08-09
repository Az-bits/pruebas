<template>
    <header class="main-header">
        <div class="site-navigation " id="mainmenu-area">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="assets/images/logo-light.png" alt="BookHunt" class="img-fluid">
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                        aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars"></span>
                    </button>

                    <!-- Collapse -->
                    <div class="collapse navbar-collapse" id="navbarMenu">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbar2" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home<i class="fa fa-angle-down"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbar2">
                                    <router-link class="dropdown-item" to="/">Home 1</router-link>
                                    <router-link class="dropdown-item" to="/index2">Home dark</router-link>
                                </div>
                            </li>
                            <li class="nav-item ">
                                <a href="#about" class="nav-link js-scroll-trigger">
                                    About
                                </a>
                            </li>

                            <li class="nav-item ">
                                <a href="#chapters" class="nav-link js-scroll-trigger">
                                    Chapters
                                </a>
                            </li>

                            <li class="nav-item ">
                                <a href="#testimonial" class="nav-link js-scroll-trigger">
                                    Reviews
                                </a>
                            </li>

                            <li class="nav-item ">
                                <a href="#author" class="nav-link js-scroll-trigger">
                                    Author
                                </a>
                            </li>

                            <li class="nav-item ">
                                <a href="#pricing" class="nav-link js-scroll-trigger">
                                    Pricing
                                </a>
                            </li>

                            <li class="nav-item ">
                                <a href="#contact" class="nav-link js-scroll-trigger">
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div> <!-- / .navbar-collapse -->

                    <div class="header-right-info d-none d-lg-block">
                        <ul class="header-socials">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div> <!-- / .container -->
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    created() {
        document.querySelector('body').setAttribute('data-background', 'dark')
        document.querySelector('body').setAttribute('class', 'dark-theme')
    }
}
</script>