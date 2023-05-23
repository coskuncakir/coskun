#!/usr/bin/env node

import chalk from "chalk";

const { blue, green, yellow, cyan } = chalk;

console.log(blue("Greetings! I am Coskun.\n"));
console.log(
  green(
    "An experienced Front-End Developer, I have been working as an independent contractor in London since 2019. Known for delivering top-notch, user-centric digital experiences, my projects leave a lasting impression.\n"
  )
);
console.log(yellow("Expertise:\n"));
console.log(
  green(" - HTML, CSS, JavaScript, TypeScript, React, Next.js, Angular\n")
);

console.log(yellow("Projects:\n"));
console.log(
  green(
    "One project I am particularly proud of is CV Matic. It simplifies the process of creating and downloading CVs, making the task hassle-free for users. Check it out at:"
  ),
  cyan("cvmatic.com\n")
);

console.log(yellow("Interests:\n"));
console.log(
  green(
    "In my downtime, I enjoy fitness activities such as hitting the gym, cycling, running, and swimming, along with indulging in nature and reading.\n"
  )
);

console.log(yellow("Contact Information:\n"));
console.log(green("Interested in connecting or collaborating? Find me at:"));
console.log(cyan("LinkedIn:"), "https://www.linkedin.com/in/coskuncakir");
console.log(cyan("GitHub:"), "https://github.com/coskuncakir");
console.log(cyan("Email:"), "coskuncakirr@gmail.com");
