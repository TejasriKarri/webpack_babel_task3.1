import React from "react";
import '../Main/Main.scss';
function Main(){
    return(
        <>
        <div className="second_header1">
            <b>Select Category:</b>
        </div>
        <div className="second_header2">
            <select name="selector" id="category" onchange="getoption()">
                <option value="Regular"></option>
                <option value="title_1">title one</option>
                <option value="title_2">title two</option>
                <option value="title_3">title three</option>
            </select>
            <h3>ALL NEWS</h3>
            <b>Subscribe</b>
            <input type="text" name="textbox"  placeholder="Email Adress"/>
            <button type="button">Subscribe</button>
            <hr width="98%;" color="black" size="2"/>
        </div>
        <div className="empty" id="empty_1">
        </div>
        <div className="title" id="title#1">
            <h2>Title One</h2>
            <sub>Published on 29 June,2019//Category:Category One</sub>
            <pre>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br>
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra<br></br>
                maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor<br></br>
                incididunt ut labore et dolore magna aliquaus ipsum suspendisse ultrices gravidasus commodo<br></br>
            </pre>
            <button type="button" onclick="NewTab1()">Continue Reading</button>
        
        </div>
        <div className="line1"></div>
       <div className="empty" id="empty_2">
        </div>
        <div className="title2" id="title#2">
            <h2>Title Two</h2>
            <sub>Published on 22 June,2019//Category:Category Two</sub>
            <pre>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br>
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra<br></br>
                maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor<br></br>
                incididunt ut labore et dolore magna aliquaus ipsum suspendisse ultrices gravidasus commodo<br></br>
            </pre>
            <button type="button" onclick="NewTab1()">Continue Reading</button>
        </div>
        <div className="line2"></div>
        <div className="empty" id="empty_3">
        </div>
        <div className="title3" id="title#3">
            <h2>Title Three</h2>
            <sub>Published on 20 June,2019//Category:Category Three</sub>
            <pre>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br>
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra<br></br>
                maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor<br></br>
                incididunt ut labore et dolore magna aliquaus ipsum suspendisse ultrices gravidasus commodo<br></br>
            </pre>
            <button type="button" onclick="NewTab1()">Continue Reading</button>
        </div>
        </>
        
)}
export default Main;