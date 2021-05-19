import React from "react";

export default function Home() {
    return (
        <div className="container">
            <br />
            <h1>Welcome here.</h1>

            <br />

            <h5><i className="material-icons" data-feather="database"></i> A storage of past papers - by topic.</h5>

            <br />

            <p><i className="material-icons icon-small" data-feather="alert-octagon"></i> This is terrible web design. Web design in 2021.. but hey! Dark mode</p>

            <div className="row">
                <div className="col l6 s12">
                    <h5><i className="material-icons" data-feather="help-circle"></i> About</h5>

                    <p>An automated tool to sort past paper questions by topic to allow you to simply search by topic and get the mark scheme</p>

                    <br />

                    <h5><i className="material-icons" data-feather="zap"></i> How it works</h5>

                    <p>A <a href="https://nodejs.org/en/">Node.js</a> is used to scrap papers from <a href="https://papacambridge.com/home/index.html">PapaCambridge</a>, and downloaded</p>

                    <p><a href="https://github.com/microsoft/playwright">Playwright</a> is then used to automate multiple <a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a> instances in parallel to render and parse the PDFs using  <a href="https://github.com/mozilla/pdf.js">PDF.js</a></p>

                    <p>Javascript is injected into <a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a> instances to determine the position of text on the PDF, which is used to:

                        <ol>
                            <li>Locate the location of questions on the page</li>
                            <li>Using the above, to extract the text between two questions to guess the topic it is from</li>
                        </ol>
                    </p>

                    <p>The screenshots were cropped and saved according to the values returned from <a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a>, and as so may be inaccurate, but generally it has turned out well</p>

                    <p>Screenshots are grouped by topics, which is written into a database to be read from later (jk, it is just a JSON)</p>

                    <p>A <a href="https://www.python.org/">Python</a> script using <a href="https://github.com/opencv/opencv-python">OpenCV</a> is then used to remove unnecessary whitespace in between pages and working space in questions to make the image smaller</p>
                </div>

                <div className="col l6 s12">
                    <h5><i className="material-icons" data-feather="list"></i> Subjects</h5>
                    <ul>

                        <li><a href="<%- subject %>">TODO: Fix</a></li>

                    </ul>
                </div>
            </div>


            <div className="row">
                <div className="col l6 s12">
                    <h5 className="tooltipped" data-position="top" data-tooltip="(+ Free useless tooltip also included btw)"><i className="material-icons" data-feather="pie-chart"></i> Useless stats honestly no one cares about</h5>

                    <table>
                        <tbody>
                            <tr>
                                <td><i className="material-icons icon-small" data-feather="watch"></i> Time spent writing and running the code</td>
                                <td>Over 200 hours</td>
                            </tr>
                            <tr>
                                <td><i className="material-icons icon-small" data-feather="save"></i> Images saved in total</td>
                                <td>TODO: Fix</td>
                            </tr>
                            <tr>
                                <td><i className="material-icons icon-small" data-feather="aperture"></i> Time spent screenshotting</td>
                                <td>35 minutes 24 seconds</td>
                            </tr>
                            <tr>
                                <td><i className="material-icons icon-small" data-feather="hard-drive"></i> Size of entire project on disk</td>
                                <td>1.3 GiB</td>
                            </tr>
                            <tr>
                                <td><i className="material-icons icon-small" data-feather="slash"></i> Number of GOTOs in the code</td>
                                <td>Absolutely zero.</td>
                            </tr>
                            <tr>
                                <td><i className="material-icons icon-small" data-feather="cloud-drizzle"></i> Brain-cells lost making this</td>
                                <td>A lot</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col l6 s12">
                    <h5><i className="material-icons" data-feather="message-square"></i> "Testimonials"</h5>

                    <blockquote>
                        <b>You're gonna waste 100 hours to write a stupid script to screenshot it instead of doing it yourself in less time</b>
                    </blockquote>
                    - Anonymous.

                    <blockquote>
                        <b>Get a life lol</b>
                    </blockquote>
                    - Anonymous.

                    <blockquote>
                        <b>have a sleep and get back to it somewhat not dead in the morning</b>
                    </blockquote>
                    - Anonymous.

                    <blockquote>
                        <b>62.5% of a week spent on this <br /> you aren't making yourself look less insane btw</b>
                    </blockquote>
                    - Anonymous.
                    
                    <br />
                </div>
            </div>


            <div className="row">
                <h5><i className="material-icons" data-feather="code"></i> Resources and Technologies used</h5>

                <p>As with Javascript, there is (nearly) a library for everything. Just "<code>npm i [package]</code>" and you're good to go</p>

                <p>These packages, or libraries, made development of this much much easier. All of the heavy lifting was done with this, and manual work was as little as specifying keywords and experimenting with cropping (okay, yeah I did spend quite a lot of time writing the code, but it could've been way more difficult)</p>

                <br />

                <table>
                    <tbody>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="layers"></i> <a href="https://papacambridge.com/home/index.html">PapaCambridge</a> and <a href="https://xtremepape.rs/">XtremePapers</a></td>
                            <td>Providing CAIE past papers</td>
                        </tr>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="fast-forward"></i> <a href="https://railway.app">Railway</a> and <a href="https://www.docker.com/">Docker</a></td>
                            <td>Used to host this website in 2 minutes or less - as easy as <code>railway up</code></td>
                        </tr>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="hexagon"></i> <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://www.python.org/">Python</a> and <a href="https://docs.microsoft.com/en-us/dotnet/visual-basic/"><strike>Visual Basic</strike></a></td>
                            <td>Used to write all the scripts that powers this site and more. Both of the former have simple syntax and allowed me to <strike>waste my holidays</strike> write this page in little time. The latter was a pain, and still is a pain.</td>
                        </tr>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="paperclip"></i> <a href="https://github.com/microsoft/playwright">Playwright</a>, <a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a> and <a href="https://github.com/mozilla/pdf.js">PDF.js</a></td>
                            <td>Used to automate Firefox to render PDFs and detect location of text to guess the topic of questions and crop screenshots relatively decently</td>
                        </tr>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="server"></i> <a href="https://www.fastify.io/">Fastify</a> and <a href="https://ejs.co/">EJS</a></td>
                            <td>Speedy NodeJS server backend and templating engine, used to host this website, serve the images and the PDFs</td>
                        </tr>

                        <tr>
                            <td><i className="material-icons icon-small" data-feather="divide"></i> <a href="https://github.com/opencv/opencv-python">OpenCV Python</a></td>
                            <td>Used to remove empty horizontal rows of white-spaces in screenshots, and compress the PNGs to reduce the file sizes massively</td>
                        </tr>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="globe"></i> <a href="https://github.com/helperdiscord/petitio">Petitio</a> and <a href="https://github.com/cheeriojs/cheerio">Cheerio</a></td>
                            <td>Extremely fast HTTP library and a simple HTML querying library, used in NodeJS script to download and parse pages, and also to download PDFs</td>
                        </tr>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="layout"></i> <a href="https://github.com/Dogfalo/materialize">Materialize.css</a> and <a href="https://github.com/feathericons/feather">Feather Icons</a></td>
                            <td>All of the eye candy on this website is thanks to them</td>
                        </tr>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="git-pull-request"></i> <a href="https://visualstudio.microsoft.com/">Visual Studio</a> and <a href="https://code.visualstudio.com/">Visual Studio Code</a></td>
                            <td>IDE and Code editor used to program the Backend, Frontend of the website, and the Visual Basic.NET client.</td>
                        </tr>
                        <tr>
                            <td><i className="material-icons icon-small" data-feather="info"></i> <a href="https://www.figma.com/">Figma</a></td>
                            <td>Used to design the icon of this website in 5 minutes or less</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}
