interface Testimonial {
  id: number;
  name: string;
  pet: string;
  text: string;
  profilePic: string;
}

const testimonials: Testimonial[] =[
    {
      id: 1,
      name: "Sarah Johnson",
      pet: "Buddy 🐶",
      text: "PawPal has been a lifesaver! Keeping track of Buddy's vet appointments and vaccination records has never been easier.",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Michael Roberts",
      pet: "Whiskers 🐱",
      text: "Managing medical records for Whiskers is so simple with PawPal. I love how organized everything is!",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Emily Brown",
      pet: "Luna 🐾",
      text: "The reminders feature is fantastic! PawPal ensures I never miss a grooming session or check-up for Luna.",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "James Wilson",
      pet: "Rocky 🦴",
      text: "As a first-time pet owner, PawPal has been a huge help. It's like having a personal assistant for Rocky's care!",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Sophia Martinez",
      pet: "Choco 🐕",
      text: "I love how PawPal lets me manage multiple pets. It's so convenient for keeping Choco and my other dogs healthy.",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      name: "David Lee",
      pet: "Shadow 🐾",
      text: "The interface is clean and easy to use. PawPal has made pet care stress-free for me and Shadow.",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  export default testimonials;