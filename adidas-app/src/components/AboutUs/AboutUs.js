import React from 'react';
import './AboutUs.css';
import { Typography } from '@material-ui/core';

const aboutUs = (props) => {
    return (
        <section className="aboutus">
            <article>
                <Typography style={{fontWeight: "bold"}} variant="subtitle1" gutterBottom>
                    STORIES, STYLE, AND SPORTING GOODS AT ADIDAS, SINCE 1949
                </Typography>
                <Typography variant="subtitle2">
                    Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. Athletes inspire us. They help us to get up and get moving. And sporting goods featuring the latest technologies help us beat our personal best. adidas is home to the runner, the basketball player, the soccer kid, the fitness enthusiast, the yogi. And even the weekend hiker looking to escape the city. The 3-Stripes are everywhere and anywhere. In sports. In music. On life’s stages. Before the whistle blows, during the race, and at the finish line. We’re here to support creators. To improve their game. To live their lives. And to change the world.
                </Typography>
            </article>
            <article>
                <Typography style={{fontWeight: "bold"}} variant="subtitle1" gutterBottom>
                    WORKOUT CLOTHES, FOR ANY SPORT
                </Typography>
                <Typography variant="subtitle2">
                    Adidas designs for athletes of all kinds. Creators who love to change the game. People who challenge conventions, break the rules, and define new ones. Then break them all over again. We design sports apparel that gets you moving, winning, and living life to the fullest. We create bras and tights for female athletes who play just as hard as the men. We design, innovate and iterate. We test new technologies in action. On the field, the track, the court, and in the pool. We’re inspired by retro workout clothes, creating new streetwear essentials. From NMD to our Firebird tracksuits. From Stan Smith to Superstar. Classic sports models are brought back to life on the streets and the stages around the world.
                </Typography>
            </article>
        </section>
    );
}

export default aboutUs;