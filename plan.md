# Project Work Plan: Meet-Me App

This document outlines the strategic plan, features, and technical decisions for building the "Meet-Me" application.

## 1. Project Vision

A mobile-first web application that helps users find a convenient midpoint between two or more locations and decide on a final meeting place like a cafe or park.

## 2. High-Level User Flow (MVP)

The user flow for the Minimum Viable Product will be as simple as possible to validate the core midpoint calculation concept.

1.  **Open App:** User opens the web app and sees a simple interface with input fields for "Location 1" and "Location 2".
2.  **Enter Locations:** User types in the starting addresses.
3.  **Initiate Search:** User taps a "Find Midpoint" button.
4.  **View Results:** The app displays a map showing the two starting locations and the calculated midpoint based on walking time.
5.  **Share:** The user can tap a "Share" button to send a link to the midpoint location via their phone's native sharing capabilities.

## 3. Phased Feature Roadmap

The project will be built in phases to prioritize speed to market and validate the concept before building more complex features.

### Phase 1: Minimum Viable Product (MVP)
The goal is to launch quickly with the simplest possible useful feature set.

*   **Functionality:** Calculate the midpoint between two locations based on **walking time only**.
*   **Users:** The app will be **fully anonymous**. No user accounts or logins will be implemented.
*   **Features:**
    *   Display the calculated midpoint on a map.
    *   A simple "Share" button to send the result to friends.

### Phase 2: Find Nearby Places (Top Priority Stretch Goal)
The goal is to make the app more practical by helping users find a real-world venue.

*   **Functionality:** After the midpoint is calculated, allow users to search for categories of places (e.g., "cafe", "bar", "park") within a 5-10 minute walking radius.
*   **API:** This will involve integrating the **Google Places API**.
*   **Design Decisions:** Will require designing the UI for how a user selects place categories and views the results.

### Phase 3: Add New Transport Modes
The goal is to expand the app's utility to more users and travel scenarios.

*   **Priority 1:** Add **Public Transport**.
*   **Priority 2:** Add **Driving**.

### Phase 4: User Accounts & Personalization
The goal is to increase user retention and convenience.

*   **Functionality:** Implement user registration and login.
*   **Features:** Allow logged-in users to save and reuse favorite locations (e.g., "Home", "Work", "Friend's House").

## 4. Key Decisions & Tech Stack

*   **Platform:** **React Web App**.
    *   **Reasoning:** This is the fastest path to building and launching the MVP, leveraging existing developer skills.
    *   **Future Path:** This choice provides a strong foundation for a future move to a native app. Much of the application logic (state management, API calls) can be reused in a **React Native** app if needed later for better performance or a more native user experience. The migration path would be significantly easier than from other frameworks.

*   **API Strategy:**
    *   **MVP:** All Google Maps API calls (Directions API) will be made from the **frontend** (the user's browser). This is simpler as it removes the need for a backend in the MVP phase.
    *   **Future:** As features like user accounts are added, a backend will be required to handle user data and potentially proxy some API calls for security and key management.

## 5. Next Steps

1.  **Wireframe the MVP:** Sketch out the simple, one-screen UI for the MVP user flow.
2.  **Setup Project:** Initialize a new React project.
3.  **Google Maps API Key:** Obtain a Google Maps API key and enable the required APIs (Directions API for MVP, Places API for Phase 2).
4.  **Build:** Begin development on the MVP.
