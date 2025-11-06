import { assets } from '../../assets/assets'

const mentorCards = [
  {
    img: assets.sivaraman,
    name: "Sivaraman SSR",
    role: "Founder @ Dehub for Architects",
    rating: [
      { img: assets.star_outline, name: "4.9 rating" },
      { img: assets.stud_outline, name: "5k+ mentees" },
      { img: assets.book_outline, name: "Architecture systems" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "18K+", link: "https://www.instagram.com/dehubforarchitects", link_i: assets.link_icon },
      { sm_i: assets.youtube, followers: "6K+", link: "https://www.youtube.com/@dehubforarchitects", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.javid,
    name: "Code Javid",
    role: "Founder @ Stoz Labs",
    rating: [
      { img: assets.star_outline, name: "4.8 rating" },
      { img: assets.stud_outline, name: "9k+ mentees" },
      { img: assets.book_outline, name: "Full-stack cohorts" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "12K+", link: "https://www.instagram.com/codejavid", link_i: assets.link_icon },
      { sm_i: assets.linkedin, followers: "8K+", link: "https://www.linkedin.com/in/codejavid", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.fakir,
    name: "Creator Fakir",
    role: "Founder @ Zenhook",
    rating: [
      { img: assets.star_outline, name: "4.9 rating" },
      { img: assets.stud_outline, name: "7k+ mentees" },
      { img: assets.book_outline, name: "Content strategy" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "40K+", link: "https://www.instagram.com/creatorfakir", link_i: assets.link_icon },
      { sm_i: assets.youtube, followers: "11K+", link: "https://www.youtube.com/@creatorfakir", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.raghulan,
    name: "Raghulan Gowthaman",
    role: "Founder @ Virtua Tech",
    rating: [
      { img: assets.star_outline, name: "4.9 rating" },
      { img: assets.stud_outline, name: "15k+ mentees" },
      { img: assets.book_outline, name: "Civil and tech programs" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "260K+", link: "https://www.instagram.com/askraghulan", link_i: assets.link_icon },
      { sm_i: assets.youtube, followers: "170K+", link: "https://www.youtube.com/@AskRaghulangowthaman", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.sathesh,
    name: "Sathesh Prabhu",
    role: "Senior VMware Engineer",
    rating: [
      { img: assets.star_outline, name: "4.7 rating" },
      { img: assets.stud_outline, name: "4k+ mentees" },
      { img: assets.book_outline, name: "Cloud and infra" },
    ],
    social_media: [
      { sm_i: assets.linkedin, followers: "22K+", link: "https://www.linkedin.com/in/satheshpc", link_i: assets.link_icon },
      { sm_i: assets.youtube, followers: "9K+", link: "https://www.youtube.com/@satheshpc", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.swaminathan,
    name: "Swaminathan Yuvaraj",
    role: "Amazon Business Coach",
    rating: [
      { img: assets.star_outline, name: "4.9 rating" },
      { img: assets.stud_outline, name: "2.7k+ mentees" },
      { img: assets.book_outline, name: "Amazon growth" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "30K+", link: "https://www.instagram.com/swaminathanyuvaraj", link_i: assets.link_icon },
      { sm_i: assets.youtube, followers: "20K+", link: "https://www.youtube.com/@Swaminathanyuvaraj", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.dhivagar,
    name: "Dhivagar",
    role: "Founder @ Growixx",
    rating: [
      { img: assets.star_outline, name: "4.8 rating" },
      { img: assets.stud_outline, name: "6k+ mentees" },
      { img: assets.book_outline, name: "Business systems" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "15K+", link: "https://www.instagram.com/dhivagar_growixx", link_i: assets.link_icon },
      { sm_i: assets.linkedin, followers: "6K+", link: "https://www.linkedin.com/in/dhivagar", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.tharun,
    name: "Tharun Effect",
    role: "Cofounder @ Virtuatainment",
    rating: [
      { img: assets.star_outline, name: "4.8 rating" },
      { img: assets.stud_outline, name: "8k+ mentees" },
      { img: assets.book_outline, name: "Media and growth" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "120K+", link: "https://www.instagram.com/tharuneffect", link_i: assets.link_icon },
      { sm_i: assets.youtube, followers: "60K+", link: "https://www.youtube.com/@TharunEffect", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.elavarasan,
    name: "Elavarasan Sakthivel",
    role: "Mechanical Design Engineer",
    rating: [
      { img: assets.star_outline, name: "4.8 rating" },
      { img: assets.stud_outline, name: "1k+ mentees" },
      { img: assets.book_outline, name: "SolidWorks mastery" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "14K+", link: "https://www.instagram.com/elavarasan.me", link_i: assets.link_icon },
      { sm_i: assets.youtube, followers: "5K+", link: "https://www.youtube.com/@elavarasan", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.anton,
    name: "Anton Francis Jeejo",
    role: "Software Engineer and Mentor",
    rating: [
      { img: assets.star_outline, name: "4.7 rating" },
      { img: assets.stud_outline, name: "3k+ mentees" },
      { img: assets.book_outline, name: "Career accelerators" },
    ],
    social_media: [
      { sm_i: assets.linkedin, followers: "11K+", link: "https://www.linkedin.com/in/antonjeejo", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.muthupandiyan,
    name: "Muthupandiyan",
    role: "Growth Marketer",
    rating: [
      { img: assets.star_outline, name: "4.8 rating" },
      { img: assets.stud_outline, name: "4k+ mentees" },
      { img: assets.book_outline, name: "Engineered funnels" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "9K+", link: "https://www.instagram.com/muthupandiyan", link_i: assets.link_icon },
      { sm_i: assets.linkedin, followers: "4K+", link: "https://www.linkedin.com/in/muthupandiyan", link_i: assets.link_icon },
    ],
  },
  {
    img: assets.sridhar,
    name: "Sridhar S",
    role: "Affiliate Marketing Coach",
    rating: [
      { img: assets.star_outline, name: "4.8 rating" },
      { img: assets.stud_outline, name: "4.8k+ mentees" },
      { img: assets.book_outline, name: "Reels affiliate system" },
    ],
    social_media: [
      { sm_i: assets.insta, followers: "232K+", link: "https://www.instagram.com/funtamiltech", link_i: assets.link_icon },
      { sm_i: assets.youtube, followers: "52K+", link: "https://www.youtube.com/@funtamiltech", link_i: assets.link_icon },
    ],
  },
]

const mentorReviews = [
  {
    review: "Expertisor handled positioning, funnels and operations so I could focus purely on teaching architecture systems. The team is obsessed with outcomes, which keeps retention high.",
    name: "Sivaraman SSR – Founder @ Dehub for Architects",
    box_ex: assets.box_ex,
  },
  {
    review: "The playbooks and paid campaigns we co-created bring exactly the creators I want to mentor. Revenue share is transparent and the ops squad executes reliably.",
    name: "Creator Fakir – Founder @ Zenhook",
    box_ex: assets.box_ex,
  },
  {
    review: "From onboarding to cohort ops, everything is templatized. I now run consistent batches without burning out and track learning metrics weekly.",
    name: "Swaminathan Yuvaraj – Amazon Business Coach",
    box_ex: assets.box_ex,
  },
  {
    review: "Mentoring used to be ad-hoc. Now I have a predictable calendar, live dashboards and a community manager who keeps learners engaged end to end.",
    name: "Dhivagar – Founder @ Growixx",
    box_ex: assets.box_ex,
  },
  {
    review: "The content studio repurposes every session into reels, carousels and newsletters. Demand keeps compounding while I stay focused on curriculum.",
    name: "Tharun Effect – Cofounder @ Virtuatainment",
    box_ex: assets.box_ex,
  },
  {
    review: "I work with learners who respect the craft. The support team handles scheduling, rescheduling and billing without needing my involvement.",
    name: "Anton Francis Jeejo – Software Engineer",
    box_ex: assets.box_ex,
  },
  {
    review: "Every new experiment comes with templates, landing pages and ops muscle. That speed lets me test and scale new offers faster than ever.",
    name: "Code Javid – Founder @ Stoz Labs",
    box_ex: assets.box_ex,
  },
  {
    review: "The mentor guild is my favourite part. We swap playbooks, share data on what is working and spin up collaborations within the network.",
    name: "Sathesh Prabhu – Senior VMware Engineer",
    box_ex: assets.box_ex,
  },
]

const becomeMentors = {
  start_button: {
    link: "https://wa.me/9363414353",
    name: "Become a Mentor",
  },
  download: {
    link: "/Reels-Affiliate-Marketing-Mastery-Program-Tamil.pdf",
    name: "Download Broucher",
  },
  hero_section: {
    head_icons: [
      { img: assets.s1, det: "Technology" },
      { img: assets.s2, det: "Mechanical" },
      { img: assets.s3, det: "Architecture" },
      { img: assets.s4, det: "Medical" },
    ],
    para: "Guide others with the skills you've mastered. Create real impact and opportunity through mentorship.",
    features: [
      { i: assets.Headset, para: "Connect with top creator mentors" },
      { i: assets.stud_icon, para: "10K+ impacted students" },
    ],
  },
  needs: {
    title: "Mentor with confidence and clarity",
    highlights: ["Mentor", "clarity"],
    p1: "We build repeatable mentoring businesses with domain experts and help them scale beyond one-to-one calls.",
    p2: "From positioning to delivery, our team runs the engine so you can stay in creator mode.",
    benefits: [
      {
        icon: assets.n1,
        title: "Curated audience",
        desc: "Admissions screens every lead so you spend time only with learners who are ready for your expertise.",
      },
      {
        icon: assets.n2,
        title: "Content playbooks",
        desc: "Landing pages, email journeys and launch scripts co-created by our growth team keep demand flowing.",
      },
      {
        icon: assets.n3,
        title: "Revenue transparency",
        desc: "Track signups, retention and payouts in a live dashboard with twice-monthly settlements.",
      },
      {
        icon: assets.n4,
        title: "Operations handled",
        desc: "Support, billing, community management and learner nudges are managed by your dedicated ops squad.",
      },
      {
        icon: assets.n5,
        title: "Lifetime guild",
        desc: "Join a private mentor guild to exchange playbooks, co-host experiences and stay ahead of the market.",
      },
    ],
    mentors: assets.b_ment,
    b_mentors: assets.b_mentor_mobile,
    para: "Every mentor receives a success partner, weekly growth reviews and creative support so your expertise travels further without adding more hours to your week.",
  },
  key_benefits: {
    title: "Build a durable mentoring business",
    highlights: ["durable", "business"],
    p1: "Scale knowledge delivery with plug-and-play systems built for busy creators and working professionals.",
    joining_benefits: [
      {
        icon: assets.squarelogo,
        title: "Brand first",
        para: "Keep your identity across pages, cohorts and communities while we power the backend.",
      },
      {
        icon: assets.b_money,
        title: "Predictable payouts",
        para: "Transparent revenue share, automated invoicing and finance support for every launch.",
      },
      {
        icon: assets.usersthree,
        title: "High intent funnel",
        para: "Lead magnets, diagnostics and nurture flows that pre-qualify learners before they reach you.",
      },
      {
        icon: assets.i_comma,
        title: "Always-on content",
        para: "Scripts, reels, carousels and copy created by our content studio keep demand compounding.",
      },
      {
        icon: assets.i_mentor,
        title: "Learning operations",
        para: "Cohort ops, facilitators and analytics ensure completion rates and feedback stay high.",
      },
    ],
  },
  wall_of_mentors: {
    title: "Built with industry-leading mentors",
    highlights: ["industry-leading", "mentors"],
    p1: "A fast-growing guild of creators, technologists, founders and educators scale their programs with Expertisor.",
    p2: "Here are some of the mentors shaping careers and businesses inside the network right now.",
    mentors: mentorCards,
  },
  hear_from_mentors: {
    title: "Hear from our mentors",
    highlights: ["Hear", "mentors"],
    p1: "Stories from experts who scaled their mentoring practice with Expertisor.",
    review: mentorReviews,
  },
}

export default becomeMentors

