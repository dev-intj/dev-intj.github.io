import React, { Component, useEffect } from 'react'
//import shapes
import circle from '../images/810/circle_810.svg';
import halfcircle from '../images/810/halfcircle_810.svg';
import line from '../images/810/line_810.svg';
import square from '../images/810/square_810.svg';
import triangle from '../images/810/triangle_810.svg';
import wave from '../images/810/wave_810.svg';
import x from '../images/810/x_810.svg';

export default class Abstract extends Component {
    constructor() {
        super();
        this.state = {
            shape: {},
            shapes_sky: [],
            shapes_ground: []
        }
    }

    GenerateShape = ({ shape_ref }) => {
        //declare variables for more organized calculations
        const size_min = shape_ref.size_min;
        const size_max = shape_ref.size_max;
        const speed_min = shape_ref.speed_min;
        const speed_max = shape_ref.speed_max;
        const img = shape_ref.shape;

        //calculate size
        const size = size_min + (Math.random() * (size_max - size_min));
        const speed = Math.ceil(speed_min + (Math.random() * (speed_max - speed_min)));
        // although I don't need those, it's better to keep things organized
        const top_min = 0;
        const top_max = 100;
        const left_min = 0;
        const left_max = 100;
        //calculate top and left
        const top = Math.ceil(top_min + (Math.random() * (top_max - top_min)));
        const left = Math.ceil(left_min + (Math.random() * (left_max - left_min)));

        const calc_shape = { size, speed, top, left, img };
        return (calc_shape)
    }

    GenerateBackground = ({ abstracts }) => {
        //create array for ease
        const shapes_0_array = [];
        for (var i = 0; i < abstracts.length; i++) {
            //pass current abstract construct array into a variable for ease
            const current_abstract = abstracts[i];
            //calculate how many objects to construct(passing variables for ease of reference)
            const time_min = current_abstract.time_min;
            const time_max = current_abstract.time_min;
            const times = Math.ceil(time_min + (Math.random() * (time_max - time_min)));
            //construct shapes based on randomized iteration count
            for (var n = 0; n < times; n++) {
                //pass the variables from current abstract for ease of reference
                const sz_min = current_abstract.size_min;
                const sz_max = current_abstract.size_max;
                const shp = current_abstract.shape;
                const spd_min = current_abstract.speed_min;
                const spd_max = current_abstract.speed_max;
                //construct shape array ref based on current abstract values
                const shape_ref = { size_min: sz_min, size_max: sz_max, speed_min: spd_min, speed_max: spd_max, shape: shp }
                //generate shape and pass into returning array
                const constcu_shape = this.GenerateShape({ shape_ref });
                shapes_0_array.push(constcu_shape);
            }
        }
        return (shapes_0_array)

    }


    componentDidMount() {
        this.abstractsky = setInterval(() => {
            const waves = {
                time_min: 4,
                time_max: 8,
                size_min: 3,
                size_max: 5,
                speed_min: 1,
                speed_max: 5,
                shape: wave,
            };
            const lines = {
                time_min: 4,
                time_max: 8,
                size_min: 3,
                size_max: 5,
                speed_min: 1,
                speed_max: 5,
                shape: line,
            };
            const squares = {
                time_min: 4,
                time_max: 8,
                size_min: 1,
                size_max: 3,
                speed_min: 1,
                speed_max: 5,
                shape: square,
            };
            const abstracts = [waves, lines, squares];
            this.setState({
                shapes_sky: this.GenerateBackground({ abstracts })
            })
        }, 4000);
        this.abstractground = setInterval(() => {
            const waves = {
                time_min: 4,
                time_max: 8,
                size_min: 3,
                size_max: 5,
                speed_min: 1,
                speed_max: 5,
                shape: wave,
            };
            const lines = {
                time_min: 4,
                time_max: 8,
                size_min: 3,
                size_max: 5,
                speed_min: 1,
                speed_max: 5,
                shape: line,
            };
            const squares = {
                time_min: 4,
                time_max: 8,
                size_min: 3,
                size_max: 5,
                speed_min: 1,
                speed_max: 5,
                shape: square,
            };
            const abstracts = [waves, lines, squares];
            this.setState({
                shapes_ground: this.GenerateBackground({ abstracts })
            })
        }, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.abstractsky, this.abstractground);
    }

    render() {


        // in the animation it should be -10vh and at the end 110vh, will this work? hope it does
        //returning variables

        const shapes_sky = this.state.shapes_sky;
        const shapes_ground = this.state.shapes_ground;
        return (
            <>
                <section className="section is-halfheight is-white has-text-centered">
                    <div className="abstract-background">
                        {shapes_sky.map((shape, index) => (
                            <div className="shapes-sky">
                                <img src={shape.img} className="shapes-sky" key={index}
                                    style={{
                                        width: shape.size + "rem",
                                        top: shape.top + "%",
                                        left: shape.left + "%",
                                        color: "red"
                                    }} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section is-halfheight is-primary has-text-centered">
                    <div className="abstract-background">
                        {shapes_ground.map((shape, index) => (
                            <div className="shapes-ground">
                                <img src={shape.img} className="shapes-ground" key={index}
                                    style={{
                                        width: shape.size + "rem",
                                        top: shape.top + "%",
                                        left: shape.left + "%"
                                    }} />
                            </div>
                        ))}
                    </div>
                </section>
            </>
        )
    }
}