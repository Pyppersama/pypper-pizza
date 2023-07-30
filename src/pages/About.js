import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
        <div className="aboutTop" 
            style={{backgroundImage: `url(${MultiplePizzas})`}}
        >
        </div>
        <div className="aboutBottom">
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dolor ab debitis perspiciatis odit quaerat 
                fugit, amet delectus quidem hic possimus ad nobis quia
                 aut blanditiis velit maxime esse atque exercitationem,
                  mollitia omnis sint cum dolore. Laboriosam quod 
                  commodi reiciendis! Perferendis ab, consequuntur 
                  accusamus qui repellendus quisquam sit pariatur 
                  beatae a velit reprehenderit, dolor tenetur 
                  inventore quae quo incidunt enim molestias earum 
                  perspiciatis repellat. Omnis quaerat quam mollitia, 
                  iure velit incidunt doloribus repudiandae distinctio
                   ducimus dignissimos dolorum eum reprehenderit 
                   aliquam veritatis neque voluptates sapiente quasi 
                   rerum nulla? Et in ex unde, deserunt nesciunt 
                   inventore, sed repellat nemo quasi sit, sequi magnam?
            </p>
        </div>
    </div>
  )
}

export default About;
