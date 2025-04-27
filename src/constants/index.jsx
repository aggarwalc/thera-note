import { FileText, BarChart, Share2, UserCheck, AlertCircle, Lock } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Healing Path Therapy",
    image: user1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    user: "Jane Smith",
    company: "Serenity Wellness Center",
    image: user2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    user: "David Johnson",
    company: "Mindful Horizons",
    image: user3,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    user: "Ronee Brown",
    company: "Inner Light Counseling",
    image: user4,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    user: "Michael Wilson",
    company: "Tranquil Minds Therapy",
    image: user5,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    user: "Emily Davis",
    company: "Bloom Mental Health",
    image: user6,
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
];



export const features = [
  {
    icon: <FileText />,
    text: "Scan or Create Journal Entries",
    description:
      "Scan your handwritten journal entries or create new ones directly in the app to track your thoughts and emotions.",
  },
  {
    icon: <BarChart />,
    text: "Track Your Mood",
    description:
      "Log and track your mood on a weekly basis to understand emotional patterns and gain insights into your mental well-being.",
  },
  {
    icon: <Share2 />,
    text: "Share Entries with Your Therapist",
    description:
      "Easily share selected journal entries with your therapist, making your therapy sessions more focused and productive.",
  },
  {
    icon: <UserCheck />,
    text: "Mood Check-Ins and Peer Sharing",
    description:
      "Connect with others for mood check-ins, share experiences, and support each other on your mental health journey.",
  },
  {
    icon: <AlertCircle />,
    text: "Crisis Button",
    description:
      "Quickly access emergency resources or reach out to a support network in case of a mental health crisis, ensuring immediate help is within reach.",
  },
  {
    icon: <Lock />,
    text: "Confidential and Secure",
    description:
      "Your privacy is a top priority. Rest assured that all journal entries and mood data are securely stored and shared only with your consent.",
  },
];

export const checklistItems = [
  {
    title: "Scan or create journal entries",
    description:
      "Easily upload handwritten notes or write new reflections directly in the app.",
  },
  {
    title: "Share what matters",
    description:
      "Choose specific journal entries to securely share with your therapist, when you're ready.",
  },
  {
    title: "Track your mood over time",
    description:
      "Log your emotions weekly and spot patterns in your mental health journey.",
  },
  {
    title: "Stay connected between sessions",
    description:
      "Keep your therapist updated, and come prepared with things to unpack.",
  },
];

export const pricingOptions = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Create and scan journal entries",
        "Weekly mood tracking",
        "Secure personal journaling",
        "Limited entry storage (20 entries)",
      ],
    },
    {
      title: "Individual",
      price: "$10",
      features: [
        "Unlimited journal entries",
        "Mood insights and trends",
        "Custom prompts for reflection",
        "Priority support",
      ],
    },
    {
      title: "Clinic",
      price: "$200",
      features: [
        "Unlimited journal entries",
        "Direct therapist sharing tools",
        "Access to therapist calendar",
        "Personalized insights",
      ],
    },
  ];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
