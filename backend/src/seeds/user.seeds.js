import { config } from "dotenv";

config();

const seedUser = [
  // Femel User
  {
    email: "maria@example.com",
    fullName: "Maria Jons",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "john.doe1@example.com",
    fullName: "John Doe",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "sarah.connor@example.com",
    fullName: "Sarah Connor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "alex.smith@example.com",
    fullName: "Alex Smith",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "emma.watson1@example.com",
    fullName: "Emma Watson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "michael.brown@example.com",
    fullName: "Michael Brown",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "olivia.jones@example.com",
    fullName: "Olivia Jones",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "liam.johnson@example.com",
    fullName: "Liam Johnson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    email: "ava.williams@example.com",
    fullName: "Ava Williams",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    email: "noah.miller@example.com",
    fullName: "Noah Miller",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    email: "mia.davis@example.com",
    fullName: "Mia Davis",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    email: "william.garcia@example.com",
    fullName: "William Garcia",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "isabella.martinez@example.com",
    fullName: "Isabella Martinez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "james.rodriguez@example.com",
    fullName: "James Rodriguez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "sophia.lopez@example.com",
    fullName: "Sophia Lopez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "benjamin.gonzalez@example.com",
    fullName: "Benjamin Gonzalez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    email: "charlotte.wilson@example.com",
    fullName: "Charlotte Wilson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    email: "lucas.anderson@example.com",
    fullName: "Lucas Anderson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    email: "amelia.thomas@example.com",
    fullName: "Amelia Thomas",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    email: "henry.taylor@example.com",
    fullName: "Henry Taylor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    email: "evelyn.moore@example.com",
    fullName: "Evelyn Moore",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
  },
];

import { connectDB } from "../config/db.js";
import User from "../models/user.model.js";

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUser);
    console.log("Database Seeded Successfully");
  } catch (error) {
    console.log("Error seeding database".error);
  }
};

seedDatabase();
