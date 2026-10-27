# 🏡 The Wild Oasis

A full-stack cabin reservation web application built with **Next.js, React, Supabase, and Tailwind CSS**. Guests can explore cabins, check availability, make reservations, and manage their bookings through an authenticated account area.

Beyond building the application, this project became a major learning milestone in my journey as a developer. I initially built it using **Next.js 14**, studied its architecture in depth, and then explored the official documentation for **Next.js 16** before upgrading the entire project manually to gain a deeper understanding of the framework.

## 🌐 Live Demo

https://the-wild-oasis-website-goyy7ardn-mahmoud-wahbi.vercel.app/

## 📸 Project Preview

<img width="1365" height="628" alt="Image" src="https://github.com/user-attachments/assets/43045059-2b10-4d47-b0dd-71feb6fda820" />

-----
<img width="1349" height="629" alt="Image" src="https://github.com/user-attachments/assets/002b293c-878e-4a08-ad13-f1808be2f014" />

-----
<img width="1350" height="634" alt="Image" src="https://github.com/user-attachments/assets/12736aa6-6629-4219-bdf5-3dd425cdbbb9" />

-----
<img width="1346" height="625" alt="Image" src="https://github.com/user-attachments/assets/17fd927f-da6f-4d0c-a1c3-0a91f9932e0c" />

-----
<img width="1354" height="625" alt="Image" src="https://github.com/user-attachments/assets/d1994a57-822c-4c71-8c82-ad15bba4fee7" />

-----
<img width="1363" height="629" alt="Image" src="https://github.com/user-attachments/assets/1c1e79f0-6f8a-4eaa-baa3-51c4a97df332" />

-----
<img width="1351" height="626" alt="Image" src="https://github.com/user-attachments/assets/f73deb0a-a9c5-4f9f-b1cd-d13d65fd7b7c" />

-----
<img width="1353" height="630" alt="Image" src="https://github.com/user-attachments/assets/ed4e777b-2ff1-40a6-986a-0edf60650a6b" />

-----
<img width="1361" height="635" alt="Image" src="https://github.com/user-attachments/assets/bf8dadf9-80e1-4ef3-8f5a-2eff52b76439" />

-----
<img width="1352" height="632" alt="Image" src="https://github.com/user-attachments/assets/bba10e20-669e-47da-90c2-dbd67effb3b9" />

## ✨ Features

- **Cabin Browsing:** Explore available cabins, view detailed information, and filter cabins by guest capacity.
- **Dynamic Cabin Pages:** Display cabin-specific information, pricing, and reservation interfaces.
- **Availability-Aware Booking:** Select reservation dates while accounting for existing bookings and configurable stay limits.
- **Reservation Management:** Create, view, edit, and delete reservations through a personal account.
- **Google Authentication:** Sign in securely using Google through Auth.js.
- **Guest Profiles:** Update personal profile information, including nationality and national ID.
- **Server-Side Validation:** Validate booking information and check cabin availability on the server before creating reservations.
- **Optimistic UI:** Remove reservations from the interface immediately while the server processes the deletion.
- **URL-Based Filtering:** Keep cabin filter selections in URL search parameters.
- **Loading & Error Handling:** Provide loading interfaces, Suspense fallbacks, error boundaries, and not-found pages.
- **Optimized Images & Metadata:** Use Next.js image optimization and dynamically generated metadata for cabin detail pages.
- **Responsive Interface:** Build adaptive layouts using Tailwind CSS.

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 16** — App Router, Server and Client Components, Server Actions, routing, rendering, caching, and performance features.
- **React 19** — Functional components, hooks, Context API, optimistic updates, transitions, and component composition.
- **JavaScript** — Application logic and implementation.
- **Tailwind CSS** — Utility-first styling, responsive layouts, reusable design patterns, and interactive states.
- **Supabase** — Database queries and mutations for cabins, guests, bookings, and hotel settings.
- **Auth.js (NextAuth)** — Google authentication and session management.

### Supporting Libraries

- **React Day Picker** — Interactive reservation calendar with date-range selection, disabled dates, and navigation between months.
- **date-fns** — Date formatting, comparisons, reservation-duration calculations, and date-range processing.
- **Heroicons** — Icons for navigation, cabins, reservations, and account interfaces.

### Development Tools

- **Vite-independent Next.js Tooling** — Next.js development server, production build, and application routing.
- **ESLint** — Static analysis and code-quality checks.
- **npm** — Dependency management and project scripts.

## 💡 What I Learned

This project represents a significant step forward in my development journey. I used it not only to build a complete application, but also to understand the architecture behind modern Next.js applications, investigate framework internals through its documentation, and apply what I learned directly to a real codebase.

### 1. From Next.js 14 to Next.js 16

I initially built the project using **Next.js 14**, taking the time to understand the App Router, the relationship between React and Next.js, and the framework's rendering and data-fetching architecture.

After gaining a solid understanding of the original implementation, I moved beyond relying solely on course material. I spent time studying the official Next.js 16 documentation, investigating the changes introduced in newer versions, and understanding the framework's modern caching model and architectural patterns.

I then upgraded the project to **Next.js 16 by manually updating and adapting the code**, using the documentation, the existing project, course videos, independent research, and experimentation as learning resources.

The goal was not simply to make the application work with a newer version. It was to understand why the framework behaves the way it does, how its features fit together, and how to make informed architectural decisions when building larger applications.

### 2. Understanding Next.js Rendering Strategies

I studied the different rendering approaches and how they affect performance, interactivity, and data freshness.

- **Client-Side Rendering (CSR):** Understanding rendering in the browser and when client-side JavaScript is necessary.
- **Server-Side Rendering (SSR):** Understanding how pages can be rendered on the server for individual requests.
- **Static Site Generation (SSG):** Understanding how pages can be generated ahead of time.
- **Static and Dynamic Rendering:** Understanding the factors that influence whether routes can be rendered ahead of time or need request-time data.
- **Incremental Static Regeneration (ISR):** Understanding how statically generated content can be refreshed without rebuilding the entire application.
- **Server Components:** Rendering components on the server and keeping server-side data access away from the browser.
- **Client Components:** Building interactive interfaces that require browser APIs, event handlers, state, effects, or client-side context.
- **Server and Client Boundaries:** Understanding how data and components move between the two environments and how to limit unnecessary client-side JavaScript.

I learned that these approaches are not simply competing alternatives. Choosing the appropriate rendering strategy depends on the page, the data, the need for interactivity, and the freshness requirements.

### 3. Next.js App Router and Routing Architecture

I gained practical experience with the App Router and studied how its routing conventions shape an application's architecture.

Topics included:

- File-system-based routing.
- Nested routes and shared layouts.
- Dynamic route segments and route parameters.
- Route groups and private folders.
- Root and nested layouts.
- Loading UI through `loading.js`.
- Error handling through `error.js`.
- Not-found pages through `not-found.js`.
- Programmatic navigation and redirects.
- Search parameters and URL-based state.
- Route handlers for HTTP endpoints.
- Navigation between server-rendered and interactive interfaces.
- Route-level data loading and rendering behavior.

I applied dynamic routing to cabin details and reservation editing, and used URL search parameters to manage cabin filtering.

I also worked with `generateMetadata` for dynamic page metadata and `generateStaticParams` for generating cabin route parameters.

### 4. Modern Data Fetching and Server Actions

One of the most important parts of this project was learning how Next.js can handle data operations on the server rather than relying on client-side requests for every interaction.

I practiced and explored:

- Asynchronous Server Components.
- Server-side database queries.
- Separating data-access logic from UI components.
- Server Actions for creating, updating, and deleting records.
- Form submissions that invoke server-side logic.
- Server-side input validation.
- Authentication and authorization checks before mutations.
- Redirects after successful operations.
- Revalidating affected routes after data changes.
- Route handlers and their role in exposing HTTP endpoints.
- The differences between Server Actions and traditional API endpoints.

In the reservation workflow, server-side logic verifies authentication, validates booking dates, checks availability again, calculates prices, writes to Supabase, and redirects the user after a successful reservation.

This helped me understand how to build full-stack features while keeping sensitive operations and database access on the server.

### 5. Deep Dive into Next.js Caching

Caching was one of the areas I specifically investigated while studying the Next.js 16 documentation.

Rather than treating caching as a single mechanism, I focused on understanding the different layers involved, what they cache, how long cached data remains valid, and how changes should invalidate or refresh it.

Topics I studied included:

- The relationship between rendering and caching.
- Server-side data caching.
- Cache lifetimes and revalidation.
- Time-based revalidation.
- Tag-based cache invalidation.
- Refreshing data after mutations.
- The relationship between cached data and rendered output.
- How caching decisions affect static and dynamic rendering.
- The differences between browser-side state and server-side cached data.
- How to reason about data freshness when users create, update, or delete records.

I applied Next.js caching APIs to suitable reference data in the project, including cabin information, settings, and country data.

I also studied the modern Next.js 16 caching model, including **Cache Components, the `use cache` directive, cache lifetimes, and cache tags**, to understand how the newer architecture differs from earlier approaches.

This gave me a more practical understanding of the trade-offs between performance, freshness, and application complexity.

### 6. Suspense, Streaming, and Asynchronous UI

I developed a stronger understanding of how React and Next.js handle asynchronous rendering.

Concepts included:

- React `Suspense`.
- Fallback interfaces while content is loading.
- Streaming server-rendered UI.
- Asynchronous Server Components.
- Route-level loading interfaces.
- Nested loading boundaries.
- Separating slower content from the rest of a page.
- Handling asynchronous operations without unnecessarily blocking an entire interface.

In the project, Suspense boundaries are used around content such as the reservation interface, while Next.js loading files provide loading states for routes.

This helped me understand how an application can progressively deliver its interface instead of treating every page as one large, indivisible rendering operation.

### 7. React 19 Features and Modern UI Patterns

Working with Next.js 16 also gave me practical experience with modern React features and how they fit into server-driven applications.

- **`useState`:** Managing local interactive state.
- **`useContext` and Context API:** Sharing reservation-date state across components.
- **Custom Hooks:** Encapsulating reusable behavior through `useReservation`.
- **`useOptimistic`:** Updating the reservation list immediately while a server operation is pending.
- **`useTransition`:** Managing non-blocking updates and pending UI states.
- **`useFormStatus`:** Reading form submission status and updating submit-button behavior.
- **Component Composition:** Building larger interfaces from smaller reusable components.
- **Conditional Rendering:** Adapting the interface to authentication state, booking status, and available data.
- **Controlled and Uncontrolled Inputs:** Understanding different approaches to form input management.
- **Event Handling and State Management:** Building interactive filters, calendars, and account interfaces.

These concepts helped me understand the practical relationship between React's client-side capabilities and Next.js's server-side features.

### 8. Authentication, Authorization, and Backend Integration

I integrated Supabase with Auth.js to support the application's backend functionality.

My experience included:

- Connecting a Next.js application to a database service.
- Fetching and updating database records.
- Implementing Google sign-in.
- Managing authentication sessions.
- Associating authenticated users with guest records.
- Protecting account-related operations.
- Checking reservation ownership before allowing modifications.
- Separating authentication configuration from application logic.
- Handling booking creation, updates, and deletion through server-side operations.

I also learned the importance of validating operations on the server rather than relying exclusively on the client interface.

### 9. Image Optimization, Metadata, and Framework Features

I explored several built-in Next.js features that improve performance, maintainability, and the user experience.

- **`next/image`:** Using optimized images, responsive sizing, and placeholders.
- **`next/font`:** Integrating fonts through Next.js.
- **`generateMetadata`:** Generating metadata dynamically for individual cabin pages.
- **`generateStaticParams`:** Defining dynamic route parameters for static generation.
- **Route Handlers:** Exposing HTTP endpoints through the App Router.
- **Proxy:** Understanding request interception, matching rules, and its role in request processing.
- **Loading and Error Files:** Providing route-specific loading and error handling.
- **Redirects and Not-Found Handling:** Managing navigation and missing resources.
- **Environment Variables:** Separating environment-specific configuration from application code.
- **Production Builds and Linting:** Checking the application through the framework's development tooling.

I studied these features to understand not just their syntax, but also when they are useful and how they fit into the overall architecture.

### 10. Architecture for Larger Applications

Studying Next.js more deeply helped me understand how architecture should respond to an application's actual requirements.

I practiced separating:

- Route-level pages and layouts.
- Reusable UI components.
- Client-side interactive components.
- Server-side data-access logic.
- Authentication configuration.
- Server Actions and mutation logic.
- Shared client state.
- Loading and error interfaces.
- Styling and global design conventions.

I also explored architectural approaches for larger applications, including the importance of clear module boundaries, separation of responsibilities, maintainability, and avoiding unnecessary complexity.

The current architecture is appropriate for this project's scope. However, understanding alternative architectural patterns has helped me develop a better foundation for choosing and evolving the structure of larger projects in the future.

### 11. Independent Learning and Problem Solving

An important part of this project was the learning process itself.

I used a combination of:

- The official Next.js documentation.
- Course videos and practical demonstrations.
- Reading and tracing the existing project code.
- Independent research into framework behavior.
- Experimentation and debugging.
- Manual implementation of the Next.js 16 upgrade.

Instead of stopping when a feature worked, I investigated the underlying concepts and how they affected the rest of the application.

This approach helped me connect individual features—such as Server Components, Suspense, caching, routing, and Server Actions—into a more complete understanding of the Next.js architecture.

### 12. My Next Step: Migrating the Project to TypeScript

After completing a TypeScript course and building a solid foundation in the language, I am currently continuing my TypeScript studies and have reached a good stage in the learning process.

My next step is to **migrate the entire project to TypeScript manually**, applying the concepts I have learned directly to the existing codebase.

I want this to be my first complete application converted to TypeScript through my own implementation, rather than simply adding a TypeScript configuration and relying on automatic conversion.

This process will give me practical experience with:

- Typing component props and function parameters.
- Defining interfaces and type aliases.
- Typing objects, arrays, and application data.
- Handling nullable values and optional properties.
- Typing React state and Context API.
- Typing form data and event handlers.
- Working with asynchronous functions and promises.
- Typing database records and Supabase responses.
- Handling errors and external API responses.
- Understanding how types improve refactoring and code maintainability.
- Integrating TypeScript with Next.js Server Components, Client Components, and Server Actions.

I see this migration as the next stage of the same learning process: understanding the concepts first, then applying them independently to a complete application.

## 🚀 Future Development

- Complete the manual TypeScript migration.
- Review and strengthen validation and error handling.
- Add automated tests for booking and reservation workflows.
- Improve and verify responsive behavior across all account pages.
- Document the Supabase database setup for easier project reproduction.
- Continue refining the application's architecture as its requirements evolve.

## 📌 Project Status

The application currently uses **Next.js 16 and JavaScript**. The TypeScript migration is in progress and is a planned learning milestone, not yet a completed project feature.

The Next.js 14-to-16 upgrade was completed manually as part of my learning process. The current project demonstrates practical use of the App Router, Server and Client Components, Server Actions, Suspense, caching APIs, dynamic routes, authentication, and server-side reservation workflows.
