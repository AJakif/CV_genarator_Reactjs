import React from "react";
import "./cv.css"

function cv() {
  return (
    <div>
      <main className="main-content">
        <section className="left-section">
          <div className="left-content">
            <div className="profile">
              <div className="image">
                <img src="/avatar.jpg" alt />
              </div>
              <h2 className="name">Lorem Dola Ipsum</h2>
              <p className="career">Software Engineer</p>
            </div>
            <div className="contact-info">
              <h3 className="main-title">Contact Info</h3>
              <ul>
                <li>
                  <i className="fa fa-phone" />
                  07661892982
                </li>
                <li>
                  <i className="fa fa-fax" />
                  loremipsum@gmail.com
                </li>
                <li>
                  <i className="fa fa-globe" />
                  www.loremipsum.com
                </li>
                <li>
                  <i className="fa fa-facebook" />
                  www.facebook.com/lorem
                </li>
                <li>
                  <i className="fa fa-instagram" />
                  @loremipsum
                </li>
                <li>
                  <i className="fa fa-map-marker" />
                  37 Pramount St, London
                </li>
              </ul>
            </div>
            <div className="skills-section">
              <h3 className="main-title">Skills</h3>
              <p> Javascript, Ruby, C, C++</p>
            </div>
            <div className="references-section">
              <h3 className="main-title">References</h3>
              <div className="referee">
                <h6 className="sub-title">Michael Bowen</h6>
                <p className="sub-para">Product Manager</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
              <div className="referee">
                <h6 className="sub-title">Joseph Kumar</h6>
                <p className="sub-para">Senior Developer</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
              <div className="referee">
                <h6 className="sub-title">Rick Ross</h6>
                <p className="sub-para">Product Manager</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="right-section">
          <div className="right-main-content">
            <section className="about sect">
              <h2 className="right-title">About Me</h2>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam molestias facilis ullam dolorum, reprehenderit dolorem
                accusantium sit quo dolore nostrum assumenda obcaecati animi
                commodi nobis labore exercitationem corporis esse eveniet optio
                laudantium molestiae maiores pariatur nisi cumque. Distinctio
                et, totam, dicta autem nostrum doloribus ipsam vel rerum,
                molestiae soluta laboriosam. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto iusto porro suscipit. Nihil blanditiis cum voluptates
                odio recusandae deleniti, nulla repudiandae aliquam adipisci
                iusto reiciendis sequi labore quos ratione accusamus
                consectetur, libero ex assumenda pariatur commodi animi nobis,
                dolore id.
              </p>
            </section>
            <section className="experince sect">
              <h2 className="right-title">Experience</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Microsoft</h5>
                  <p className="para">2017 - 2019</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Junior Developer</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Google Inc</h5>
                  <p className="para">2019 - 2020</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Lead Web developer</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Google Inc</h5>
                  <p className="para">2019 - 2020</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Lead Web developer</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Apple</h5>
                  <p className="para">2020 - Present</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Senior Developer</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="education sect">
              <h2 className="right-title">education</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Cheney School</h5>
                  <p className="para">2015 - 2016</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Gcse's</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Cheney School</h5>
                  <p className="para">2016 - 2018</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">A - Levels</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">University of Sussex</h5>
                  <p className="para">2018 - Present</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Computer Science</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="awards sect">
              <h2 className="right-title">Awards</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Microsoft</h5>
                  <p className="para">June 2016</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Excellent Work</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Alphabet Inc</h5>
                  <p className="para">June 2016</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">The Star Employee</h5>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias cupiditate vitae voluptatem deleniti, laboriosam
                      odio nobis quae fugit facilis quo.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default cv;
