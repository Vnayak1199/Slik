import hero_img1 from '../images/hero-img1.png'
import hero_img2 from '../images/hero-img2.png'
import hero_img3 from '../images/hero-img3.png'
import how_work from '../images/how-work.png'
import how_work_small from '../images/how-work-small.png'
import shape1 from '../images/shape1.svg'
import shape2 from '../images/shape2.svg'
import shape3 from '../images/shape3.svg'
import fiveStar from '../images/5stars.svg'



export const heroImg = [
    {
        id: 1,
        src: hero_img1,
        alt: "Hero image",
        class: "hero-img1  wow fadeInUp",
        delay: "2s",
        duration: "1s",
    },
    {
        id: 2,
        src: hero_img2,
        alt: "Hero image2",
        class: "hero-img2  wow fadeInUp",
        delay: "2s",
        duration: "0.5s",
    },
    {
        id: 3,
        src: hero_img3,
        alt: "Hero image3",
        class: "hero-img3  wow fadeInUp",
        delay: "2s",
        duration: "0.5s",
    },
]

export const service_data = [
    {
        id: 1,
        name: "Dream cleans",
        desc: "It's your slice of heaven. Make sure it's spotless!",
        class: "bounceInLeft"
    },
    {
        id: 2,
        name: "Products included",
        desc: "We'll bring our own eco-friendly products.",
        class: "bounceInUp"
    },
    {
        id: 3,
        name: "Easy management",
        desc: "Pause your plan and add on extra services.",
        class: "bounceInRight"
    }
]

export const how_workImg = [
    {
        id: 1,
        src: how_work,
        alt: "How it Work",
        class: "full-img wow fadeInLeft",
        duration:"2s",
        delay:"0.5s",
    },
    {
        id: 2,
        src: how_work_small,
        alt: "How it Work",
        class: "fluid-small wow fadeInRight",
        duration:"2s",
        delay:"0.5s",
    }

]

export const work_data = [
    {
        id: 1,
        src: shape1,
        alt: "Shape",
        name: "Tell us about your home",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    },
    {
        id: 2,
        src: shape2,
        alt: "Shape",
        name: "Define your plan",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    },
    {
        id: 3,
        src: shape3,
        alt: "Shape",
        name: "Join Slik",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    }

]

export const catching = [
    {
        id: 1,
        title: "Andrew and Kate",
        subtitle: "Stoke Newington",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
        src: fiveStar
    },
    {
        id: 2,
        title: "Ammara",
        subtitle: "Pimlico",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
        src: fiveStar
    },
    {
        id: 3,
        title: "Hampus",
        subtitle: "Kensington",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
        src: fiveStar
    }
]