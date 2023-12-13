import React from 'react';

function AboutUs() {
  return (
    <div>
      <div className="about-section bg-primary">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row">
        <div className="column" >
          <div className="card">
            <img
              src="../../images/jane.jpg"
              alt="Jane"
              style={{ width: '100%' }}
            />
            <div className="container">
              <h2> Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>doee@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="../../images/mike.jpg"
              alt="Mike"
              style={{ width: '100%' }}
            />
            <div className="container">
              <h2>Mikky Boss</h2>
              <p className="title">Art Director</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure ipsum saepe earum et nisi non iusto ex, officia molestias voluptatum harum dolore ipsa dolorem quasi blanditiis dignissimos aliquam ullam adipisci corporis aut omnis velit ipsam. Nulla similique saepe est aut ipsam impedit error id repellendus cumque. Non asperiores itaque iusto obcaecati provident atque sapiente tempora. Dolor aliquam ipsam velit sint voluptatum adipisci, voluptatem nam totam omnis laudantium temporibus deleniti, nostrum id ipsa ab aspernatur illum minima nesciunt, maxime libero praesentium sequi aperiam. Neque itaque deleniti esse temporibus. Odio eos id fugiat natus impedit consequatur consectetur, voluptatem mollitia placeat dolore!</p>
              <p>mikky@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="../../images/shivendra.jpg"
              alt="shivendra"
              style={{ width: '100%' }}
            />
            <div className="container">
              <h2>Shiv</h2>
              <p className="title">Designer</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas officiis, corporis necessitatibus voluptates quibusdam totam excepturi doloremque ab autem consequatur ipsam odio repudiandae aut doloribus id, nemo reprehenderit ullam ex distinctio praesentium hic cum, quia explicabo. Blanditiis illum adipisci voluptatum, atque vel repellat molestias ex. Doloribus consequatur repudiandae esse accusamus id, autem, culpa dolor reprehenderit earum quidem pariatur impedit delectus. Quod ex nihil voluptatum officiis itaque ratione at est, debitis adipisci, ipsam modi nobis. Tenetur voluptatum dignissimos culpa, vero et magnam. Quod cumque temporibus quas repellendus aperiam in nulla quia, neque, iste quos omnis possimus. Maiores sit fugit ipsam neque!</p>
              <p>Shivendra@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
