import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Car.css"
function Car() {
    return (
     <div>
       <body>
<header>
	
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">

          <div className="carousel-item active" >
            <div className="img1">
              <img src="ls.jpg" width="100%" height="50%"/>
            <div className="caption">
          
              <h1>Create and share your whatever</h1>
              <h2>Make it easy for you to do whatever this thing does.</h2>
            </div>
            </div>
           
          </div>

          <div className="carousel-item">
            <img src="ls2.jpg"/>
            <div className="caption">
              <h1>Something and share your whatever</h1>
              <h2>Else it easy for you to do whatever this thing does.</h2>

              <a className="big-button" href="" title="">Create Project</a>
              <div className="clear"></div>
              <a className="view-demo" href="" title="">View Demo</a>
            </div>
          </div>
          
          <div className="carousel-item" >
          <img src="ls3.jpg" width="100%" height="100%"/>
            <div className="caption">
              <h1>Create and share your whatever</h1>
              <h2>Make it easy for you to do whatever this thing does.</h2>
            </div>
          </div>

        </div>
        
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </header>
</body>
     </div>
      
        
/* <div id="myCarousel" classNameName="carousel slide" data-ride="carousel">
    <ol classNameName="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" classNameName="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div classNameName="carousel-inner">
      <div classNameName="item bg bg1 active">
        <div classNameName="container">
          <div classNameName="carousel-caption">
            <h1>Example headline.</h1>
            <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
            <p><a classNameName="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div classNameName="item bg bg2">
        <div classNameName="container">
          <div classNameName="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p><a classNameName="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
          </div>
        </div>
      </div>
      <div classNameName="item bg bg3">
        <div classNameName="container">
          <div classNameName="carousel-caption">
            <h1>One more for good measure.</h1>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p><a classNameName="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <a classNameName="left carousel-control" href="#myCarousel" data-slide="prev"><span classNameName="glyphicon glyphicon-chevron-left"></span></a>
    <a classNameName="right carousel-control" href="#myCarousel" data-slide="next"><span classNameName="glyphicon glyphicon-chevron-right"></span></a>
  </div>
          */
                   
    )
}

export default Car
