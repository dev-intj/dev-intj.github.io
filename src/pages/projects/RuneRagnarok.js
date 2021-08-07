import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import projects_data from "../../websiteData/projects_data";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

//images
import RuneRagnarokimage1 from "../../assets/images/projects/runeragnarok/screenshot1.png";
import RuneRagnarokimage2 from "../../assets/images/projects/runeragnarok/whichgodareyou.png";
import RuneRagnarokimage3 from "../../assets/images/projects/runeragnarok/entertowinakey.png";

const RuneRagnarok = () => {
    return (
        <>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
           <div className="container">
                 <div className="navbar-end">
                    <div className="navbar-item">
                       <div className="buttons">
                        <a className="button is-white is-medium luxury btn-2" href="https://runeragnarok-fed2b.web.app" target="_blank">
                          <span>View Website</span>
                          </a>
                          
                          <Link to={'/work'} className="button is-white is-medium tooltip is-tooltip-bottom luxury btn-2">
                          <span className="icon is-small">
                          <IconContext.Provider value={{size: 24,className:"x-icons" }}>
                              <FaTimes />
                          </IconContext.Provider>
                          </span>
                          </Link>
                          
                       </div>
                    </div>
              </div>
           </div>
        </nav>
        <div className="section is-primary">
           <div className="container">
             <p></p>
              <div className="columns">
                 <div className="column is-one-third"></div>
                 <div className="column">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{projects_data.runeragnarok.title}</h1>
                    <h2 className="subtitle is-size-4-desktop">{projects_data.runeragnarok.description}</h2>
                 </div>
              </div>
           </div>
        </div>
        <div className="section is-white">
           <div className="container">
              <div className="columns">
                 <div className="column is-one-third">
                    <div className="columns ">
                       <div className="column">
                          <a className="button is-large is-fullwidth is-white luxury btn-1" href="https://runeragnarok-fed2b.web.app" target="_blank">
                          <span>View Website</span>
                          </a>
                       </div>
                    </div>
                    <div className="columns">
                       <div className="column">
                          <div className="box">
                             <div className="article media">
                                <div className="media-content">
                                   <div className="content">
                                      <p>
                                         <strong>RESPONSIBILITIES</strong>
                                         </p>
                                      <ul>
                                         
                                      {projects_data.runeragnarok.responsibilities.map((responsibilities, index) => (
                                         <li key={index}>{responsibilities}</li>
                                      ))}
                                         
                                      </ul>

                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="columns">
                       <div className="column ">
                          <div className="box">
                             <div className="article media">
                                <div className="media-content">
                                   <div className="content">
                                      <p>
                                         <strong>UPDATES</strong>
                                         </p>
                                      <ul>

                                      {projects_data.runeragnarok.updates.map((updates, index) => (
                                         <div key={index}>
                                             <li>{updates.date}</li>
                                             {updates.description}
                                         </div>
                                      ))}

                                      </ul>
 
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="column">
                    <h2 className="subtitle is-size-4-desktop">
                       Rune Ragnarok's Lead Developer approached me to develop an interactive and smooth front-end 
                       experience for their up and coming game, Rune Ragnarok. I was immediately 
                       interested in transforming the unique feel I got from the game to a website. 
                       With the company putting their full trust on me for creative decisions, I decided to go all 
                       out.
                    </h2>
                    <div className="box ">
                       <img src={RuneRagnarokimage1}/>
                    </div>
                    <h2 className="subtitle is-size-4-desktop">Human Head Studios announced that Rune Ragnarok was under development. 
                       in August 2017, their website was only a landing page with the game's logo and 3 buttons. Needless to say it wasn't much of a hit.
                       I got straight into work and started gathering information from the dev team and competitors in the same genre of the game.
                       Providing planned design and responsive front-end templates that I integrated into WordPress with
                       content management system and custom apis to retrieve data and push data to their game servers. 
                       My position might be UI/UX on paper, but I was full-stack and I loved it.</h2>
                    <p></p>
                    <h1 className="title is-size-3-desktop">Keeping the user happy.</h1>
                    <h2 className="subtitle is-size-4-desktop"> The goal of the whole re-modeling of the website was to 
                       increase users subscription to the mailing list and user interaction with the game. 
                       Through communication with the marketing department of the team, we created few marketing 
                       campaigns to keep the user engaged with the game's development. Various competitions, 
                       quizzes and social media accounts were created.
                       
                    </h2>
                    <img src={RuneRagnarokimage2}/>
                    <img src={RuneRagnarokimage3}/>
                    <p></p>
                    <h2 className="subtitle is-size-4-desktop">Once the new conversion flow was designed and prototyped, 
                       I created discussions groups and conducted moderated user testings,
                       Through data analysis, improvements were made and increased subscription rate up to 40%. 
                       I then added new features to keep user engagement such as a forum and a blog system.</h2>
                    
                    <p></p>
                    <h1 className="title is-size-3-desktop">Working with the team after the release of the new website</h1>
                    <h2 className="subtitle is-size-4-desktop">When the updated website got released, my involvement was typical 
                       of many other projects; I gave an estimate and time-scale for design and development and got 
                       the project live. Every once in a while, the dev team would return to me with additional tasks 
                       or new problems that needed solving and we'd work together on a solution. </h2>
                       <p></p>
                       <h2 className="subtitle is-size-4-desktop">From sketching with pencil and paper, to making high fidelity prototype versions in adobe XD,
                       translating them to HTML & CSS and the final step, integrating the designs into wordpress.
                       </h2>
                    <p></p>
                    <h1 className="title is-size-3-desktop">User Behaviour Research</h1>
                    <h2 className="subtitle is-size-4-desktop">
                       Analysing user behaviour was an important part of the improving of Rune Ragnarok's website. Tools such as Google 
                       Analytics and VWO gave insights into users so we could learn about how they behave 
                       and interact with the website.</h2>
                       <p></p>
                 </div>
              </div>
           </div>
        </div>
        <div className="section is-primary">
           <div className="container">
              <Link to="/contact" className="button is-large is-fullwidth is-white luxury btn-2">
              <span>Like what you see? Shoot me a message.</span>
              </Link>
           </div>
        </div>
        </>
    )
}
export default RuneRagnarok;