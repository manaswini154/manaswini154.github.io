<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food, LLC</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
        /* Custom Styles */
        body {
            margin: 0;
            padding: 0;
        }
        .navbar {
            margin-bottom: 0;
        }
        .dropdown-menu {
            width: 100%; /* Take full width */
            background-color: #f8f9fa; /* Distinguishable background */
        }
        .menu-section {
            height: 1000px; /* Tall section for scrolling */
            background-color: #f4f4f4; /* Distinguishable background */
            padding: 20px;
        }
        .section {
            height: 700px; /* Optional large sections */
            text-align: center;
            padding: 20px;
            background-color: #eaeaea;
            margin: 10px 0;
        }
        .back-to-top {
            display: block;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu" aria-expanded="false">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Food, LLC</a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-menu">
                <ul class="nav navbar-nav visible-xs">
                    <li><a href="#chicken">Chicken</a></li>
                    <li><a href="#beef">Beef</a></li>
                    <li><a href="#sushi">Sushi</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Page Heading -->
    <div class="container text-center">
        <h1 class="text-center">Our Menu</h1>
    </div>

    <div class="container">
        <div class="row">
            <div id="chicken" class="col-md-4 col-sm-6 col-xs-12 section">
                <h3>Chicken</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#top" class="back-to-top">Back to Top</a>
            </div>
            <div id="beef" class="col-md-4 col-sm-6 col-xs-12 section">
                <h3>Beef</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#top" class="back-to-top">Back to Top</a>
            </div>
            <div id="sushi" class="col-md-4 col-sm-12 col-xs-12 section">
                <h3>Sushi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#top" class="back-to-top">Back to Top</a>
            </div>
        </div>
    </div>

    <!-- Bootstrap JavaScript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
