<!doctype html>
<html>
<title> assignment</title>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<style> 
  *{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
  }
  h1{
   text-transform: capitalize;
   text-align: center;
   font-size: 75%;
  }
  section{
    background-color: gray;
    border: 1px solid black;
    font-size: 25%;
    height: 60px;
    position:relative;
    float: left;  
    width:32%;
  }
  main {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

  #p1{
    background-color: hotpink;
    width: 30px;
    height: 10px;
    padding: .5px;
    border: 1px solid black;
    font-size: 200%;
    position: absolute;
    top:0px;
    right:0px;

  }
  #p3{
    background-color: limegreen;
    width: 20px;
    height: 10px;
    padding: .5px;
    border: 1px solid black;
    font-size: 200%;
    position: absolute;
    top:0px;
    right:0px;
  }
  #p5{
    background-color: greenyellow;
    width: 20px;
   height: 10px;
    padding: .5px;
    border: 1px solid black;
    font-size: 200%;
    position: absolute;
    top:0px;
    right:0px;
  }
  @media (min-width: 992px){
  .c, .b, .s {
    flex: 1 1 calc(33.333% - 1rem);
  }
  }
  @media (min-width: 768px) and (max-width: 991px) {
  .c, .b {
    flex: 1 1 calc(50% - 1rem);
  }

  #s3 {
    flex: 1 1 100%;
  }
}

/* Mobile view: 767px and below */
@media (max-width: 767px) {
  .c, .b, .s {
    flex: 1 1 100%;
  }
}
</style>
  
  <link rel="stylesheet" href="style.css">
<body>
  <h1> our menu </h1>
  <main>
  <section id="s1" class="c">
    <p id="p1">Chicken</p>
    <p id="p2"> ilove chicken</p></section>
    <section id="s2" class="b">
      <p id="p3"> Beef </p>
      <p id="p4"> i love beef </p></section>
      <section id="s3" class="s">
        <p id="p5"> Sushi </p>
        <p id="p6"> i love sushi </p></section>
</main>
</body></html>
