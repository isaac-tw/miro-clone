# Miro Clone

## Introduction

Miro Clone is a project that mimics the functionality of Miro, a collaborative online whiteboard platform. This project is built using Next.js, Clerk, Liveblocks, and other modern web technologies.

## Features

- Collaborative whiteboarding
- User authentication with Clerk
- Real-time updates powered by Liveblocks
- Modern UI with Radix UI and TailwindCSS

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/miro-clone.git
   ```

2. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Configure environment variables:
   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   CONVEX_DEPLOYMENT=<your-convex-deployment>
   NEXT_PUBLIC_CONVEX_URL=<your-next-public-convex-url>
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   LIVEBLOCKS_SECRET_KEY=<your-liveblocks-secret-key>
   ```

## Core Dependencies

The following libraries are used in this project:

- **@clerk/clerk-react**: ^5.21.0
- **@clerk/nextjs**: ^6.9.6
- **@liveblocks/react**: ^2.15.1
- **convex**: ^1.17.4
- **next**: 15.1.2
- **react**: ^19.0.0
- **tailwindcss**: ^3.4.1
- **zustand**: ^5.0.2

## Live Deployment

The project is deployed at: [Miro Clone](https://isaac-miro-clone.vercel.app/)

**Note:** New sign-ups are currently restricted.

## Acknowledgements

This project draws inspiration and guidance from the work of [Antonio Erdeljac](https://github.com/antonioerdeljac). Special thanks for sharing knowledge and resources.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
