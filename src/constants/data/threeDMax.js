import threedIcon from '../../assets/images/3DMax/threemax_icon.svg';
import lifetimeSupportIcon from '../../assets/images/3DMax/Headset.svg';
import mentorQaIcon from '../../assets/images/3DMax/ArrowClockwise.svg';
import happyStudentsIcon from '../../assets/images/threeD_stud_i.svg';
import softwareIcon1 from '../../assets/images/3DMax/software/so6.svg';
import softwareIcon2 from '../../assets/images/3DMax/software/so2.svg';
import softwareIcon3 from '../../assets/images/3DMax/software/so4.svg';
import softwareIcon4 from '../../assets/images/3DMax/software/so3.svg';
import softwareIcon5 from '../../assets/images/3DMax/software/so1.svg';
import softwareIcon6 from '../../assets/images/3DMax/software/so7.svg';
import softwareIcon7 from '../../assets/images/3DMax/software/so5.svg';
import courseCard1 from '../../assets/images/3DMax/course/co1.svg';
import courseCard2 from '../../assets/images/3DMax/course/co2.svg';
import courseCard3 from '../../assets/images/3DMax/course/co3.svg';
import courseCard4 from '../../assets/images/3DMax/course/co4.svg';
import courseCard5 from '../../assets/images/3DMax/course/co5.svg';
import courseCard6 from '../../assets/images/3DMax/course/co6.svg';
import mentorImage from '../../assets/images/3DMax/mentor/raghulan_ment.svg';
import mentorLogo from '../../assets/images/ins_ex_logo.svg';
import starOutlineIcon from '../../assets/images/star_outline.svg';
import studentOutlineIcon from '../../assets/images/stud_outline.svg';
import bookOutlineIcon from '../../assets/images/book_outline.svg';
import instagramIcon from '../../assets/images/insta.svg';
import youtubeIcon from '../../assets/images/youtube.svg';
import socialLinkIcon from '../../assets/images/link_icon.svg';
import journeyIcon1 from '../../assets/images/path1.svg';
import journeyIcon2 from '../../assets/images/3DMax/mentor/threeD_path2.svg';
import journeyIcon3 from '../../assets/images/3DMax/mentor/threeD_path3.svg';
import studentsIcon from '../../assets/images/hat.svg';
import followersIcon from '../../assets/images/per.svg';
import ratingIcon from '../../assets/images/kid_star.svg';
import missionIcon from '../../assets/images/affilate/rocket_i.svg';
import missionBackground from '../../assets/images/affilate/rocket_launch.png';
import boxIllustration from '../../assets/images/affilate/box_ex.svg';
import incomeBackground from '../../assets/images/3DMax/TD_income_bg.png';
import tokenIcon from '../../assets/images/affilate/token.svg';
import timeIcon from '../../assets/images/affilate/time.svg';
import verifiedIcon from '../../assets/images/affilate/verified.svg';
import courseVideoThumbnail from '../../assets/images/affilate_video.png';

const softwareCarousel = [
  softwareIcon1,
  softwareIcon2,
  softwareIcon3,
  softwareIcon4,
  softwareIcon5,
  softwareIcon6,
  softwareIcon7,
];

const threeDMax = {
  start_button: {
    link: 'https://learn.expertisoracademy.in/courses/3ds-Max-Tamil--68da82a10fdb786eec2e26c6',
    name: 'Become a 3D Pro',
  },
  download: {
    link: '/3DSMax-Mastery-Program.pdf',
    name: 'Download Brochre',
  },
  hero_section: {
    icon: {
      threed_icon: threedIcon,
      para: 'Learn 3ds Max from Scratch',
    },
    para:
      'Turn your 3D passion into a profession with our beginner friendly 3ds Max course. Learn 3D modeling, animation and rendering step by step so you can create studio quality visuals that match global project standards.',
    features: [
      {
        i: lifetimeSupportIcon,
        para: 'Lifetime support',
      },
      {
        i: mentorQaIcon,
        para: 'Monthly mentor Q&A sessions',
      },
      {
        i: happyStudentsIcon,
        para: '8K+ Happy students',
      },
    ],
  },
  motion_section: {
    para: 'Master the fundamentals and use them in any 3D software you prefer.',
    software_motion: [
      ...softwareCarousel,
      ...softwareCarousel,
      ...softwareCarousel,
    ],
  },
  course_section: {
    title: 'Why This Course?',
    highlights: ['Course?'],
    p1: 'Unlock your creative potential and master 3D design with our',
    p2: 'beginner friendly course',
    path_way: [
      {
        img: courseCard1,
        title: 'Beginner Friendly',
        para: 'No prior experience required. We provide all the training you need to succeed.',
      },
      {
        img: courseCard2,
        title: 'Step by Step Guidance',
        para: 'Enjoy quick, engaging video lessons that are easy to grasp.',
      },
      {
        img: courseCard3,
        title: 'Hands On Projects',
        para: 'Engage actively to solidify your understanding, rather than just watching.',
      },
      {
        img: courseCard4,
        title: 'Lifetime Access',
        para: 'Enjoy lifetime access to the course, community, and exclusive webinars.',
      },
      {
        img: courseCard5,
        title: 'Mentor Support',
        para: 'Get help and feedback anytime from mentors who guide you on your creative journey.',
      },
      {
        img: courseCard6,
        title: 'Certificate',
        para: 'Earn certificates upon course completion to enhance your resume and career prospects.',
      },
    ],
  },
  mentor_section: {
    ment_img: mentorImage,
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
          link_i: socialLinkIcon,
          link: 'https://www.instagram.com/askraghulan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        },
        {
          logo: youtubeIcon,
          name: 'YouTube',
          link_i: socialLinkIcon,
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
          icon: journeyIcon1,
          para: 'Lost my job, found my vision',
        },
        {
          bg: '#1C1C1C',
          icon: journeyIcon2,
          para: 'Built a Million-Dollar Company',
        },
        {
          bg: '#1C1C1C',
          icon: journeyIcon3,
          para: 'Worked on FIFO & Large-Scale Projects',
        },
      ],
      desc3:
        'Today, I bring you 3ds Max courses to help you avoid the mistakes I made and grow faster in your career. With expertise in design, visualization, and architecture, I share practical, real world insights that go beyond theory.',
      desc4:
        'With my experience, the best way to learn is from someone who has done it all',
    },
    ment_info: [
      {
        head: 'students trained',
        num: ' 8375+',
        i: studentsIcon,
      },
      {
        head: 'Followers on YouTube',
        num: '172K +',
        i: followersIcon,
      },
      {
        head: 'Followers on Instagram',
        num: '26.4K +',
        i: followersIcon,
      },
      {
        head: 'Average reviews ',
        num: '4.9',
        i: ratingIcon,
      },
    ],
    mission: {
      start_button: {
        link: 'https://learn.expertisoracademy.in/courses/3ds-Max-Tamil--68da82a10fdb786eec2e26c6',
        name: 'Become a 3D Pro',
      },
      head: 'My Mission',
      para:
        'My mission is to make 3ds Max simple and practical for learners. I want to help students and professionals create visuals that match the standards of the biggest industries and projects worldwide.',
      rocket_i: missionIcon,
      rocket_bg: missionBackground,
    },
  },
  lessons_comp: {
    download: {
      link: '/3DSMax-Mastery-Program.pdf',
      name: 'Download Syllabus',
    },
    head: "What You'll Learn Inside the Course",
    highlights: ['Learn'],
    p1: 'Master the fundamentals of 3D modeling, texturing, lighting, ',
    p2: 'animation, and rendering to bring your creative visions to life!',
    video_id: 'eCIW1fNqjg4',
    video_thumbnail: courseVideoThumbnail,
  },
  students_say_video: {
    title: 'Real Success Stories From People Just Like You',
    p1: 'Hear from Our Students: Turning Aspirations into Technological',
    p2: 'Breakthroughs for Everyone.',
    highlights: ['Success Stories'],
    videos: [
      {
        id: 1,
        title: 'From Confused to Clear: Clarity Through Mentorship🤝',
        subtitle: 'Student, Degree',
        thumbnail: 'https://img.youtube.com/vi/yjN8BcnCShM/hqdefault.jpg',
        youtubeId: 'yjN8BcnCShM',
      },
      {
        id: 2,
        title: 'No Placement Scams ❌ Value is Our Big Promise ❤',
        subtitle: 'Student, Degree',
        thumbnail: 'https://img.youtube.com/vi/0byxBZjb7DA/hqdefault.jpg',
        youtubeId: '0byxBZjb7DA',
      },
    ],
  },
  course_review: [
    {
      review:
        'I was completely new to 3ds Max, but this course made everything so simple. The step-by-step explanations were so clear that I completed my first 3D project within a week. Totally worth it!',
      name: 'Rahul Menon, Bangalore',
      box_ex: boxIllustration,
    },
    {
      review:
        '3ds Max nu naan eppavume tough nu nenachen… but indha course la trainer romba simple ah explain pannaru. Ippo naan realistic room renders create panna start panniruken 😍.',
      name: 'Suresh Kumar, Trichy',
      box_ex: boxIllustration,
    },
    {
      review:
        'I had tried YouTube tutorials before, but they always left me confused. This course gave me a proper structure, and I finally understood how to model and render properly. Highly recommended!',
      name: 'Priya Sharma, Pune',
      box_ex: boxIllustration,
    },
    {
      review:
        'Initial ah naan YouTube la neraya tutorials paathen… but half way la confuse aagidum. Indha course la proper flow kuduthurukanga, so easy ah follow panna mudichu 👌.',
      name: 'Harini R, Coimbatore',
      box_ex: boxIllustration,
    },
    {
      review:
        'As a civil engineering student, I always wanted to create realistic building models. After finishing this course, I can confidently say my college projects look much more professional now.',
      name: 'Aravind R, Coimbatore',
      box_ex: boxIllustration,
    },
    {
      review:
        'College project ku oru 3D elevation venum nu irundhudhu. Intha course join pannadhu nala full design independently complete panna mudichu 🔥. Classmates ellarum wow nu sonanga.',
      name: 'Pranav R, Salem',
      box_ex: boxIllustration,
    },
    {
      review:
        'This is such a practical course. Instead of wasting time on theory, the trainer shows how to apply every tool directly. That hands-on teaching style helped me learn so much faster.',
      name: 'Divya Nair, Kochi',
      box_ex: boxIllustration,
    },
    {
      review:
        'Trainer romba friendly da. Doubts ku kooda Tamil la explain pannaru, examples kuduthanga. Athunala basics la strong ah iruken 💯.',
      name: 'Janani S, Madurai',
      box_ex: boxIllustration,
    },
    {
      review:
        'I enrolled with zero knowledge, but now I can create 3D furniture and interiors easily. My friends are shocked at how realistic my renders look!',
      name: 'Sanjay Kumar, Chennai',
      box_ex: boxIllustration,
    },
    {
      review:
        'Naan fresher dhan, aana intha course mudichitu freelance ku already try pannuren. Romba confident ah feel panren, 3D skills nala extra income varum nu namburen 🙌.',
      name: 'Vijay Anand, Chennai',
      box_ex: boxIllustration,
    },
    {
      review:
        "The trainer's way of teaching is so friendly. Even as a beginner, I never felt lost. Every doubt was cleared with examples, which gave me real confidence.",
      name: 'Megha R, Hyderabad',
      box_ex: boxIllustration,
    },
    {
      review:
        'This is not just a course, it\'s a career upgrade. I started freelancing after finishing it, and I already got my first client project within weeks.',
      name: 'Ajay Singh, Delhi',
      box_ex: boxIllustration,
    },
    {
      review:
        'I loved the assignments given in this course. They really pushed me to practice, and that\'s where the real learning happened. I feel so much more skilled now.',
      name: 'Anitha K, Madurai',
      box_ex: boxIllustration,
    },
    {
      review:
        'Compared to other courses, this one feels very authentic. No shortcuts or fake promises — just real skills taught step by step. I truly appreciate that.',
      name: 'Mohammed Irfan, Mumbai',
      box_ex: boxIllustration,
    },
    {
      review:
        'Best investment I made this year. The rendering techniques I learned are already helping me in my architectural designs. Totally worth the time and money.',
      name: 'Varsha P, Trichy',
      box_ex: boxIllustration,
    },
  ],
  passive_income: {
    start_button: {
      link: 'https://learn.expertisoracademy.in/courses/3ds-Max-Tamil--68da82a10fdb786eec2e26c6',
      name: 'Become a 3D Pro',
    },
    head: 'Ready to dive into the 3D universe?',
    highlights: ['Ready', '3D', 'universe'],
    p1: 'Get ready to explore the vast 3D universe! Unleash your creativity and start your ',
    p2: 'adventure. Don\'t forget to use the coupon before it expires!',
    bg: incomeBackground,
    card: {
      price: '₹ 6,999',
      original_price: '₹ 12,499',
      name: '3DS Max Mastery Program',
      token_img: tokenIcon,
      time: timeIcon,
      coupon_code: 'MAXOFFER43',
      discount_percent: '44%',
      expires_in: '1 days 23 hours 59 minutes',
    },
    what_you_get: {
      head: "What you'll get",
      tick_img: verifiedIcon,
      benefit: [
        'Master skills in 3D modeling, animation, and rendering',
        'Create studio-quality visuals with confidence',
        'Mentor connect every month through live sessions',
        '24/7 dedicated support',
        'Lifetime access to all lessons & updates',
        'Community & peer support',
      ],
    },
  },
  FAQ: [
    {
      question: 'What is 3ds Max, and why should I learn it?',
      answer:
        '3ds Max is one of the most powerful 3D modeling and rendering software used in architecture, interior design, and animation. Learning it will help you create realistic designs and boost your career in the design industry.',
    },
    {
      question: 'Do I need any prior design or software knowledge to join this course?',
      answer:
        'No. This course is beginner-friendly. Even if you have zero background, we teach step by step from basics to advanced tools.',
    },
    {
      question: 'Is this course only for civil or architecture students?',
      answer:
        'Not at all. It is perfect for civil engineers, architecture students, interior designers, as well as anyone interested in 3D visualization.',
    },
    {
      question: 'What skills will I gain after completing the 3ds Max course?',
      answer:
        'You\'ll learn 3D modeling, texturing, lighting, rendering, walkthroughs, and creating realistic architectural and interior designs.',
    },
    {
      question: 'How long does it take to complete the course?',
      answer:
        'On average, the course takes 4–6 weeks to complete depending on your pace. You also get access to practice files to continue learning.',
    },
    {
      question: 'Will I get practical projects to work on?',
      answer:
        'Yes. The course is project-based with real-world assignments, so you\'ll build a portfolio while learning.',
    },
    {
      question: 'Is the course online or offline?',
      answer:
        'We provide online training with recorded classes + live sessions. You can learn at your own speed from anywhere.',
    },
    {
      question: 'Do I receive a certificate after the course?',
      answer:
        'Yes, you\'ll get a course completion certificate which can add weight to your resume or portfolio.',
    },
    {
      question: 'Will this course help me get freelance or job opportunities?',
      answer:
        'Definitely. Many students have started freelancing after this course, and others use their 3ds Max skills to crack interviews in architecture, civil, and design companies.',
    },
    {
      question: 'Can I learn interior and furniture design using this course?',
      answer:
        'Yes, the course covers interiors, furniture, and architectural visualization, making it useful for both students and professionals.',
    },
    {
      question: 'What kind of support will I get during the course?',
      answer:
        'You\'ll have doubt-clearing sessions, mentor support, and lifetime access to recordings for revision.',
    },
    {
      question: 'Is this course worth it compared to free YouTube tutorials?',
      answer:
        'Free tutorials often confuse you without structure. This course is step by step, practical, and designed to take you from beginner to professional level with guided practice.',
    },
  ],
  OfferBanner: {
    title: '3DS Max Mastery Program',
    coupen_code: 'MAXOFFER43',
    discount_percent: 44,
    no_days: 2,
    joinNow_link: 'https://learn.expertisoracademy.in/courses/3ds-Max-Tamil--68da82a10fdb786eec2e26c6',
    d_broucher: '/3DSMax-Mastery-Program.pdf',
  },
};

export default threeDMax;

