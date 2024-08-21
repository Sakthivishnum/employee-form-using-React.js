import Myimage from './rape.png';
import Myimage2 from './news1.png';
import Myimage3 from './news2.png';
import Myimage4 from './news3.png';
import { FaPlay } from "react-icons/fa";
function Content(){
    return (<div className="content">
        <div class="container">
  <div class="row ">
    <div class="col">
      <h1 className="title">NEWS</h1>
    </div>
  </div>
  <hr></hr>
</div>
</div>)
}
function Content1(){
    return (<div className="content">
    <div class="container text-center">
  <div class="row">
    <div class="col-4">
    <h4 className="para">Rape cases in India: Doctor's murder in 
    Kolkata exposes our ongoing struggle
     with sexual violence</h4>
     <p className="para1">In recent years, reports of rapes have become a daily occurrence,
         with 2022 seeing an average of 86 reported cases per day.</p>
    </div>
    <div class="col-4">
      <img src={Myimage}></img>
    </div>
    <div class="col-4">
      <p className="para2">A 31-year-old doctor at Kolkata's RG Kar Medical College was 
        brutally attacked and killed after retiring to a seminar room for rest.
         Her body, found with multiple injuries, 
        was confirmed to be the victim of sexual assault and homicide.</p>
        <p className="para2">Sanjay Roy, a "civic volunteer" at the hospital, was arrested in connection with the crime, 
            sparking public outrage and leading the Calcutta High Court to order the hospital's former head, Dr Sandip Ghosh, 
            to take a long leave. The case has spotlighted 
            the systemic failures in protecting women in India, even in professional spaces.</p>
    </div>
  </div>
</div>
</div>
)
}
function Content2(){
    return(<div className="content">
        <div class="container text-center">
            <div class="row">
                <div class="col-3">
                    <img src={Myimage2}></img>
                    <h5>No. 1, 82-0 Record: The Rival Vinesh Beat In 50kg Wrestling At Olympics</h5>
                    <p>Vinesh Phogat beat reigning Olympic gold medalist Yui Susaki,
                         who boasted an 82-0 international record prior to the match.</p>
                </div>
                <div class="col-3">
                    <img src={Myimage3}></img>
                    <h5>Neeraj Chopra vs Arshad Nadeem Javelin Series? Ex-Pakistan Star Says It'll Be Bigger Than...</h5>
                    <p>Former Pakistan cricket team star Basit Ali believes that India and 
                        Pakistan should play bilateral series of hockey, javelin or kabaddi if BCCI and PCB fail to agree on a cricket series.</p>
                </div>
                <div class="col-3">
                    <img src={Myimage4}></img>
                    <h5>Google Pixel 8 Series, Pixel 7a Get Price Cuts in India After Launch of Pixel 9 Series</h5>
                    <p>Pixel 8 Pro, which is Google's previous generation flagship smartphone, has received a price cut of Rs. 7,000 and now retails for Rs. 99,999.</p>
                </div>
                <div class="col-3">
                    <h5>Pianist's Melbourne show cancelled over Gaza remarks</h5>
                    <p>Jayson Gillham dedicated a piece of music to journalists killed in Gaza</p>
                    <h5>US soldier pleads guilty to selling secrets to China</h5>
                    <p>Sgt Korbein Schullz was allegedly paid $42,000 in exchange for dozens of sensitive security data.</p>
                    <h5>Thai court dismisses PM for violating constitution</h5>
                    <p>The 67-year-old Srettha,who has been in power for less than a year, is the third PM in 16 years to be removed by the same court.</p>
                </div>
            </div>
        <hr></hr>
        </div>
    </div>)
}
function Content3(){
    return(<div className="content1">
      <div class="container text-center">
        <h1>Most Read</h1>
        <div className="row">
          <div className="col-2">
          <h5><a>1</a> <FaPlay /> driverless cars wake residents with nighttime honking</h5>
          </div>
          <div className="col-2">
            <h5><a>2</a> <FaPlay /> Watch:The Northern Lights seen from space</h5>
          </div>
          <div className="col-2">
            <h5><a>3</a> <FaPlay /> Moment boy alerts police to mother trapped in sinking car</h5>
          </div>
          <div className="col-2">
            <h5><a>4</a> <FaPlay /> BBC Verify analyses footage of Ukraine's incursion into Russia</h5>
          </div>
          <div className="col-2">
            <h5><a>5</a> <FaPlay /> Ukrainian TV films inside Russia as flag removed</h5>
          </div>
          <div className="col-2">
            <h5><a>6</a> <FaPlay /> WHO declares mpox global health emergency</h5>
          </div>
        </div>
        {/* <hr></hr> */}
      </div>
    </div>)
}
export default function Contentjoins(){
    return(<div className="contentjoins">
        <Content />
        <Content1 />
        <Content2 />
        <Content3 />
    </div>
    )
}