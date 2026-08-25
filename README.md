# RoomReserve take-home exercise

RoomReserve is a meeting-room reservation system for a shared office. Your task
is to implement a useful end-to-end version of the product using the provided
React and FastAPI applications.

You have **three hours**. Prioritize a reliable core workflow over visual polish
or optional features. You may use AI tools and normal development libraries,
but you must be able to run, demonstrate, and explain your implementation.

## Getting started

Prerequisite: a current Docker installation with Docker Compose.

```bash
docker compose up --build
```

Then open:

- Frontend: <http://localhost:5173>
- Backend health check: <http://localhost:8000/api/health>
- FastAPI documentation: <http://localhost:8000/docs>

The starter intentionally does not include a database or authentication
library. Those are implementation decisions for you to make.

## Product requirements

Authenticated users should be able to:

1. Register and sign in.
2. View the available rooms and their upcoming reservations.
3. Create a reservation by selecting a room, start time, and end time.
4. View their own reservations.
5. Cancel one of their own future reservations.
6. Filter the schedule by room or date.

Each room should have a name and capacity. Each reservation should display:

- Meeting title.
- Room.
- Start and end time.
- Organizer.
- Status: `active` or `cancelled`.

## Behavioral rules

- A reservation's start time must be earlier than its end time.
- Active reservations for the same room may not overlap.
- Back-to-back reservations are allowed: one may start when another ends.
- Only the organizer may cancel a reservation.
- Cancelled reservations no longer block the room.
- If two users request overlapping times concurrently, exactly one should
  succeed.
- Schedule results should use a deterministic chronological order.
- Invalid actions should be rejected by the API and communicated in the UI.
- Application data should survive a browser refresh and backend restart.

You may make reasonable decisions where the requirements are ambiguous. Be
prepared to explain those decisions.

## Technical constraints

- Use the provided React + TypeScript frontend and FastAPI backend.
- The application must run through Docker Compose.
- You may choose the database, persistence library, authentication mechanism,
  API structure, and client-side state approach.
- Do not use a library or generated product that implements the assignment's
  core workflows for you.
- Do not commit secrets.

## Optional extensions

Only attempt these after the required workflows are reliable:

- Search or pagination.
- An availability view across rooms.
- Editing or rescheduling reservations.
- A reservation activity history.
- Additional automated tests.
- Responsive or accessibility improvements.

## Submission

Before time expires:

1. Confirm that the application starts from a clean checkout.
2. Add a short `SUBMISSION.md` describing your architecture, important choices,
   known limitations, and what you would do next.
3. Commit and push your final work.

After a short review break, you will run and demonstrate the application and
discuss its implementation with an engineer.
