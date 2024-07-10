import developer from '../assets/developer.png';
import designer from '../assets/designer.png';
import experience from '../assets/experience.png';
import pic from '../assets/backgroundPic.png';
import oxpitan from '../assets/oxpitanHome.png';
import sampark from '../assets/samparkHome.png';
import restaurant from '../assets/restaurantHome.png';
import quiz from '../assets/quiz.png';

export const listData =[
{
    id: 0,
    image: developer,
    heading: "Frontend Developer",
    intro: "I like to code things from scratch, and enjoy bringing ideas to life in the browser",
    head:"Languages I speak:",
    content:"JavaScript, HTML, C++, CSS",
    head2:"Dev Tools:",
    content2:["React JS","Next Js", "Styled Components", "Bootstrap", "Bitbucket", "Github", "VS Code"]
},
{
    id: 1,
    image: designer ,
    heading: "Designer",
    intro: "I value simple content structure, clean design patterns, and thoughtful interactions.",
    head:"Things I enjoy designing:",
    content:"UX, UI, Web, Apps ",
    head2:"Design Tools:",
    content2:["Figma", "Pen & Paper", "Sketch"]
},
{
    id: 2,
    image : experience,
    heading: "Experience",
    intro: "I believe in crafting user experiences that not only look beautiful but also feel intuitive and natural.",
    head:"Experiences I draw from:",
    content:"UX/UI, Product design, Freelancing",
    head2:"Work Stats:",
    content2:["Etelligens Technologies","Software Developer Trainee","Jan 2024 - May 2024",<br/>, "Cetpa Infotech", "Web Designing Intern", "Aug 2022 - Sept 2022" ]
}
];

export const projectsData = [
    {
        id:0,
        src: oxpitan,
        heading:'Oxpitan',
        para:'I spearheaded the development of a responsive, user-friendly website using Next.js for a non-profit organization from March 2024 to April 2024. This project focused on enabling seamless contributions to social causes through intuitive design and robust architecture.',
        button:"visit website",
        link: "https://oxpitan-layerdrops.vercel.app/",
    },
    {
        id:1,
        src: quiz,
        heading:'Quick_Quiz',
        para:'I developed an engaging interactive quiz application using React. This Single-page Application (SPA) utilizes functional components and React hooks for seamless user interaction. It dynamically updates quiz content and manages user responses while integrating with the Open Trivia Database API for fetching questions.',
        button:"Visit Website",
        link:"https://quiz-theta-five.vercel.app "
    },
    {
        id:2,
        src: sampark,
        heading:'Sampark Foundation',
        para:'The Sampark Foundation website highlights its mission to transform rural education in India with innovative literacy and numeracy programs. It invites visitors to explore and contribute to their impactful initiatives, serving as a beacon for supporting educational transformation in rural communities.',
        button:"Visit Website",
        link:'https://sampark-pi.vercel.app'
    },
    {
        id:3,
        src: restaurant,
        heading:'Food & Drinks',
        para:'I developed a user-centric website for Food & Drinks, a restaurant, focusing on enhancing its online presence and user experience. The project included implementing a responsive framework, interactive features like menus and maps using JavaScript, and an efficient online reservation system.',
        button:"Visit Website",
        link:"https://restaurant-wine-seven.vercel.app"
    },
]