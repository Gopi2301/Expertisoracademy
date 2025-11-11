import Headset from '../../assets/images/3DMax/Headset.svg';
import ArrowClockwise from '../../assets/images/3DMax/ArrowClockwise.svg';
import civil3DStudentIcon from '../../assets/images/civil3D/civil3D_stud_i.svg';
import courseVideo from '../../assets/images/solidworks/Video_Solidworks.mp4';
import glassdoorLogo from '../../assets/images/civil3D/glassdoor.svg';
import naukriLogo from '../../assets/images/civil3D/naukri.svg';
import ambitionBoxLogo from '../../assets/images/civil3D/ambition_box.svg';
import highDemandOne from '../../assets/images/highdemand_1.svg';
import highDemandTwo from '../../assets/images/highdemand_2.svg';
import highDemandThree from '../../assets/images/highdemand_3.svg';
import challengeOne from '../../assets/images/solidworks/chall1.svg';
import challengeTwo from '../../assets/images/solidworks/chall2.svg';
import challengeThree from '../../assets/images/solidworks/chall3.svg';
import courseCardOne from '../../assets/images/3DMax/course/co1.svg';
import courseCardTwo from '../../assets/images/3DMax/course/co2.svg';
import courseCardThree from '../../assets/images/3DMax/course/co3.svg';
import courseCardFour from '../../assets/images/3DMax/course/co4.svg';
import courseCardFive from '../../assets/images/3DMax/course/co5.svg';
import courseCardSix from '../../assets/images/3DMax/course/co6.svg';
import heroIcon from '../../assets/optimized/courses/raghulan_ment_i.webp';
import mentorPortrait from '../../assets/images/3DMax/mentor/raghulan_ment.svg';
import mentorLogo from '../../assets/images/ins_ex_logo.svg';
import starOutlineIcon from '../../assets/images/star_outline.svg';
import studentOutlineIcon from '../../assets/images/stud_outline.svg';
import bookOutlineIcon from '../../assets/images/book_outline.svg';
import instagramIcon from '../../assets/images/insta.svg';
import youtubeIcon from '../../assets/images/youtube.svg';
import externalLinkIcon from '../../assets/images/link_icon.svg';
import pathwayOneIcon from '../../assets/images/path1.svg';
import pathwayTwoIcon from '../../assets/images/3DMax/mentor/threeD_path2.svg';
import pathwayThreeIcon from '../../assets/images/3DMax/mentor/threeD_path3.svg';
import hatIcon from '../../assets/images/hat.svg';
import peopleIcon from '../../assets/images/per.svg';
import ratingStarIcon from '../../assets/images/kid_star.svg';
import rocketIcon from '../../assets/images/affilate/rocket_i.svg';
import rocketBackground from '../../assets/images/affilate/rocket_launch.png';
import passiveBackground from '../../assets/images/solidworks/sw_bg.svg';
import tokenIcon from '../../assets/images/affilate/token.svg';
import timeIcon from '../../assets/images/affilate/time.svg';
import verifiedIcon from '../../assets/images/affilate/verified.svg';
import reviewBox from '../../assets/images/affilate/box_ex.svg';

const civil3dCourse = {
  start_button: {
    link: 'https://learn.expertisoracademy.in/courses/AutoCAD-Civil-3D-Tamil-68dbe2fde101430490549d84',
    name: 'Start Your Civil3D Journey',
  },
  download: {
    link: '/AutoCAD-Civil3d -Tamil.pdf',
    name: 'Download Brochure',
  },
  hero_section: {
    icon: {
      threed_icon: heroIcon,
      para: 'Learn from Industry Expert with 20+ years of experience',
    },
    para:
      "No matter your starting point, we'll turn you into a job-ready civil engineer with practical 3D design skills, real-world projects, and expert guidance until you succeed.",
    features: [
      {
        i: Headset,
        para: 'Lifetime support',
      },
      {
        i: ArrowClockwise,
        para: 'Monthly mentor Q&A sessions',
      },
      {
        i: civil3DStudentIcon,
        para: '2k+ Happy Engineers',
      },
    ],
    car_video: courseVideo,
  },
  civil_demands: {
    title: 'Why Is Civil 3D in High Demand ?',
    highlights: ['Civil', '3D'],
    p1: 'Civil 3D is transforming how civil engineers design infrastructure projects from roads ',
    p2: 'and highways to land development and drainage systems.',
    card1: {
      salary_range: '₹5.5 – ₹8.2 LPA',
      title: 'Average Annual Salary',
      description:
        'Salary increases with hands on project experience, especially in road design, BIM workflows, and infrastructure projects.',
      sources: [
        { link: '', img: glassdoorLogo },
        { link: '', img: naukriLogo },
        { link: '', img: ambitionBoxLogo },
      ],
      desc_img: highDemandOne,
    },
    card2: {
      percentage: '80%',
      title: 'Widespread Industry Use',
      description: 'Most of the civil engineering firms now use Civil 3D or similar design software in planning and execution.',
      desc_img: highDemandTwo,
    },
    card3: {
      percentage: '200%',
      title: 'Rising Demand Across India',
      description:
        'Rapid urban development, Smart Cities Mission, NHAI road projects, and increasing infrastructure spending from 2020 to 2024.',
      desc_img: highDemandThree,
    },
  },
  rating_sec: {
    rating: [
      { number: '1000+', label: 'Students Enrolled' },
      { number: '4.8/5', label: 'Average Rating' },
      { number: '14+', label: 'Hours of Content' },
      { number: 'Tamil,English', label: 'Languages' },
    ],
    // bg_img: assets.bg_car_rating,
  },
  dream_job: {
    title: 'Is  Your  Mechanical  Degree  Enough  to Land Your Dream Job?',
    highlights: ['Mechanical', 'Degree', 'Enough'],
    p1: 'College teaches you the theory, but the industry demands practical skills. If you feel ',
    p2: "a gap, you're not alone.",
    challenges: [
      {
        img: challengeOne,
        title: 'Empty Portfolio',
        desc: 'Struggling to showcase practical skills to recruiters beyond your college projects.',
      },
      {
        img: challengeTwo,
        title: 'Career Stagnation',
        desc: 'Stuck in a non-design role and looking for a clear path into product design and development.',
      },
      {
        img: challengeThree,
        title: 'Interview Anxiety',
        desc: 'Feeling unprepared to answer technical questions about real-world design and drafting.',
      },
    ],
  },
  course_section: {
    title: 'Why Expertisor Academy over others?',
    highlights: ['Expertisor', 'Academy'],
    p1: "Civil 3D is one of the most in demand tools in civil engineering. Whether you're working on road design, land",
    p2: 'development, or infrastructure projects Civil 3D helps you design faster, smarter, and more accurately.',
    path_way: [
      {
        img: courseCardOne,
        title: 'Beginner Friendly',
        para: 'No prior experience required. We provide all the training you need to succeed.',
      },
      {
        img: courseCardTwo,
        title: 'Step by Step Guidance',
        para: 'Enjoy quick, engaging video lessons that are easy to grasp.',
      },
      {
        img: courseCardThree,
        title: 'Hands On Projects',
        para: 'Engage actively to solidify your understanding, rather than just watching.',
      },
      {
        img: courseCardFour,
        title: 'Lifetime Access',
        para: 'Enjoy lifetime access to the course, community, and exclusive webinars.',
      },
      {
        img: courseCardFive,
        title: 'Mentor Support',
        para: 'Get help and feedback anytime from mentors who guide you on your creative journey.',
      },
      {
        img: courseCardSix,
        title: 'Certificate',
        para: 'Earn certificates upon course completion to enhance your resume and career prospects.',
      },
    ],
  },
  lessons_comp: {
    download: {
      link: '/AutoCAD-Civil3d -Tamil.pdf',
      name: 'Download Broucher',
    },
    head: "What You'll Learn Inside the Course",
    highlights: ['Learn'],
    p1: 'Learn to design roads, surfaces, profiles, and pipe networks using Civil 3D with real  ',
    p2: 'world civil engineering projects.',
    video_id: 'ImWU_sqQUa0',
  },
  mentor_section: {
    ment_img: mentorPortrait,
    ment_detail: {
      name: 'Raghulan Gowthaman',
      logo: mentorLogo,
      domain: '(Founder @ Virtua Tech | Tech & Civil Expert)',
      course_detail: [
        {
          i: starOutlineIcon,
          para: '4.9 Ratings',
        },
        {
          i: studentOutlineIcon,
          para: '8375 Students',
        },
        {
          i: bookOutlineIcon,
          para: '7 Course',
        },
      ],
      social_media: [
        {
          logo: instagramIcon,
          name: 'Instagram',
          link_i: externalLinkIcon,
          link: 'https://www.instagram.com/askraghulan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        },
        {
          logo: youtubeIcon,
          name: 'YouTube',
          link_i: externalLinkIcon,
          link: 'https://www.youtube.com/@AskRaghulan',
        },
      ],
      desc1:
        "Back in 2012 I lost my job. It was the hardest moment of my life, but also the turning point. Instead of giving up, I started my own company Virtua Tech, which later grew into a million dollar company. With 20+ years of experience in Technology and Civil Engineering, I decided to document my entire knowledge here so learners like you don't have to start from zero.",
      desc2:
        'As the Founder and CEO of Virtua Finance Pty Ltd, I am at the forefront of blockchain innovation, leading the development of VirtuaCoin and VirtuaSWAP products. Our mission is to enhance the virtual economy through multi-utility crypto tokens and a comprehensive native wallet app, driving the play-to-earn ecosystem and fostering community trading of tokens and NFTs. With a strategic vision, my role is pivotal in capital raising efforts, presenting our projects to venture capitalists and board members, and shaping the future of decentralized finance.',
      pathway: [
        {
          bg: '#1C1C1C',
          icon: pathwayOneIcon,
          para: 'Lost my job, found my vision',
        },
        {
          bg: '#1C1C1C',
          icon: pathwayTwoIcon,
          para: 'Built a Million-Dollar Company',
        },
        {
          bg: '#1C1C1C',
          icon: pathwayThreeIcon,
          para: 'Worked on FIFO & Large-Scale Projects',
        },
      ],
      desc3:
        'Today, I bring you Civil 3D courses to help you avoid the mistakes I made and accelerate your career. With expertise in surveying, site design, and infrastructure projects, I share practical, real world insights that go far beyond theory.',
      desc4: 'With my experience, the best way to learn is from someone who has done it all',
    },
    ment_info: [
      {
        head: 'students trained',
        num: ' 8375+',
        i: hatIcon,
      },
      {
        head: 'Followers on YouTube',
        num: '172K +',
        i: peopleIcon,
      },
      {
        head: 'Followers on Instagram',
        num: '26.4K +',
        i: peopleIcon,
      },
      {
        head: 'Average reviews ',
        num: '4.9',
        i: ratingStarIcon,
      },
    ],
    mission: {
      start_button: {
        link: 'https://learn.expertisoracademy.in/courses/AutoCAD-Civil-3D-Tamil-68dbe2fde101430490549d84',
        name: 'Start Your Civil3D Journey',
      },
      head: 'My Mission',
      para: 'My mission is to empower individuals to master 3ds Max, equipping them with innovative techniques and insights that propel their careers forward.',
      rocket_i: rocketIcon,
      rocket_bg: rocketBackground,
    },
  },
  passive_income: {
    start_button: {
      link: 'https://learn.expertisoracademy.in/courses/AutoCAD-Civil-3D-Tamil-68dbe2fde101430490549d84',
      name: 'Start Your Civil3D Journey',
    },
    head: 'Join our Civil 3D course and kickstart your career!',
    highlights: ['kickstart', 'your', 'career!'],
    p1: 'Get ready to explore the vast 3D universe! Unleash your creativity and start your ',
    p2: "adventure. Don't forget to use the coupon before it expires!",
    bg: passiveBackground,
    card: {
      price: '₹ 8999',
      original_price: '₹ 16,070',
      name: 'Civil 3D Masterclass: From Beginner to Project Ready Civil Engineer 2025',
      token_img: tokenIcon,
      time: timeIcon,
      coupon_code: 'C3D44',
      discount_percent: '44%',
      expires_in: '1 days 23 hours 59 minutes',
    },
    what_you_get: {
      head: "What you'll get",
      tick_img: verifiedIcon,
      benefit: [
        'Master skills in Civil 3D for designing and modeling infrastructure projects',
        'Learn to create detailed site plans, grading, and corridor modeling',
        'Monthly mentor live Q&A sessions for personalized guidance',
        '24/7 dedicated support to help you anytime',
        'Lifetime access to all lessons, updates, and course materials',
        'Community & peer support to collaborate and grow together',
      ],
    },
  },
  course_review: [
    {
      review:
        'Civil 3D course la trainer oru clarity kudutharu. Road design, alignment ellame practical ah explain pannanga. Now projects la use panna super easy ah irukku.',
      name: 'Praveen Kumar',
      box_ex: reviewBox,
    },
    {
      review:
        'Naan civil student. Intha course join pannathukapram drawings nalla professional ah varuthu. College la professors kooda appreciate pannanga.',
      name: 'Divya S',
      box_ex: reviewBox,
    },
    {
      review:
        'Classes romba interactive ah irundhuchu. Doubts ku example kuduthu solve pannanga. Ithu nala real site work la confident ah try panna mudiyuthu.',
      name: 'Arun Raj',
      box_ex: reviewBox,
    },
    {
      review:
        'Civil 3D basics la romba struggle pannuvanga. Aana inga oru step by step method la solli kuduthadhu nala easy ah grasp panna mudiyuthu.',
      name: 'Meena Lakshmi',
      box_ex: reviewBox,
    },
    {
      review:
        'Course la theory mattum illa, industry la use panna tips and tricks um cover pannanga. Idhu thaan indha course ku vera value kuduthudhu.',
      name: 'Karthik M',
      box_ex: reviewBox,
    },
    {
      review:
        'This Civil 3D course is very practical. I could apply the concepts directly in my site drawings, and it saved me hours of work.',
      name: 'Rahul Menon',
      box_ex: reviewBox,
    },
    {
      review:
        'I had no prior experience with Civil 3D, but the trainer explained everything so clearly. Now I can confidently create surfaces, profiles, and road designs.',
      name: 'Ananya Sharma',
      box_ex: reviewBox,
    },
    {
      review:
        'As a civil engineer, I needed software skills for better job opportunities. This course gave me exactly that. I even impressed my manager with my first project.',
      name: 'Vikram Rao',
      box_ex: reviewBox,
    },
    {
      review:
        "The assignments were really useful. They forced me to practice, and that's where I understood the tools properly. Great course for hands-on learners.",
      name: 'Sneha Iyer',
      box_ex: reviewBox,
    },
    {
      review:
        'Compared to other courses, this one feels tailor-made for civil engineers. The real-world examples make it much more relatable and effective.',
      name: 'Arjun Patel',
      box_ex: reviewBox,
    },
    {
      review:
        'The trainer answered every doubt with patience. Even small details were explained with examples, which made the learning process smooth.',
      name: 'Deepika Nair',
      box_ex: reviewBox,
    },
    {
      review:
        'This course boosted my confidence. I was struggling earlier, but now I can prepare professional drawings that meet industry standards.',
      name: 'Mohammed Irfan',
      box_ex: reviewBox,
    },
    {
      review:
        'I loved how the lessons were short and to the point. No time wasted, only practical knowledge. Perfect for students and working professionals.',
      name: 'Kavya R',
      box_ex: reviewBox,
    },
    {
      review:
        'After completing this course, I cleared my design engineer interview easily. The Civil 3D skills I learned here gave me an edge.',
      name: 'Sanjay Kumar',
      box_ex: reviewBox,
    },
    {
      review:
        'This course is the best investment I made for my career. Affordable, practical, and filled with valuable knowledge. Highly recommended!',
      name: 'Harini P',
      box_ex: reviewBox,
    },
  ],
  FAQ: [
    {
      question: 'What is AutoDesk Civil 3D and why should I learn it?',
      answer:
        'Civil 3D is industry-standard software for civil engineering design and documentation. Learning it helps you design roads, highways, land development, and other infrastructure projects professionally.',
    },
    {
      question: 'Who is this course suitable for?',
      answer:
        'This course is perfect for civil engineering students, fresh graduates, site engineers, and professionals who want to upgrade their design skills.',
    },
    {
      question: 'Do I need any prior software knowledge before joining?',
      answer:
        'No prior Civil 3D knowledge is required. Basic civil engineering concepts will be enough to get started.',
    },
    {
      question: 'What will I be able to do after completing this course?',
      answer:
        "You'll be able to design alignments, profiles, surfaces, corridors, and create professional drawings that meet industry standards.",
    },
    {
      question: 'Is this course useful for college projects?',
      answer:
        'Yes, many students use Civil 3D for their academic projects. It makes drawings look professional and helps you stand out in evaluations.',
    },
    {
      question: 'How is this course different from free tutorials online?',
      answer:
        'Unlike random YouTube tutorials, this course is structured step by step, covers real-world examples, and includes assignments to ensure you practice and learn properly.',
    },
    {
      question: 'Will I get practice files and assignments?',
      answer:
        "Yes, you'll receive practice files along with guided assignments to strengthen your hands-on skills.",
    },
    {
      question: 'Can this course help me get a job?',
      answer:
        'Absolutely. Many companies expect Civil 3D knowledge for design roles. Completing this course will make you job-ready and give you an edge in interviews.',
    },
    {
      question: 'How long will it take to complete the course?',
      answer:
        "On average, students complete the course in 4–6 weeks depending on their pace. It's flexible, so you can learn as per your schedule.",
    },
    {
      question: 'Will I get a certificate after completion?',
      answer:
        "Yes, you'll receive a recognized certificate that you can showcase on your resume and LinkedIn profile.",
    },
    {
      question: 'Is the trainer experienced?',
      answer:
        'Yes, the trainer has real industry experience and focuses on practical applications, not just theory.',
    },
    {
      question: 'Can I access the course content after finishing?',
      answer:
        'Yes, lifetime access is provided, so you can revisit the lessons anytime for revision.',
    },
  ],
  OfferBanner: {
    title: 'Master AutoCAD Civil 3D',
    coupen_code: 'C3D44',
    discount_percent: 44,
    no_days: 2,
    joinNow_link: 'https://learn.expertisoracademy.in/courses/AutoCAD-Civil-3D-Tamil-68dbe2fde101430490549d84',
    d_broucher: '/AutoCAD-Civil3d -Tamil.pdf',
  },
};

export default civil3dCourse;

