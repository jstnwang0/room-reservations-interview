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

The starter intentionally does not include persistence or authentication.
Choose a reasonable implementation that supports the required product
behavior; particular libraries or authentication styles are not the focus of
the exercise.

## Product requirements

Authenticated users should be able to:

1. Register, sign in, sign out, and remain signed in after a browser refresh.
2. View the available rooms and their upcoming reservations.
3. Create a reservation with a meeting title, room, start time, and end time.
4. View their own reservations.
5. Cancel one of their own future reservations.
6. Filter the schedule by room or date.

### Rooms

The office has three rooms:

- Atlas — capacity 4.
- Cedar — capacity 8.
- Summit — capacity 12.

These rooms must be available when the application starts. You may choose how
to seed or persist them, but the frontend must obtain them from the backend.
Creating, editing, and deleting rooms is out of scope.

Each room should have a name and capacity. Each reservation should display:

- Meeting title.
- Room.
- Start and end time.
- Organizer.
- Status: `active` or `cancelled`.

## Behavioral rules

- Creating or cancelling a reservation requires authentication.
- The backend must determine the organizer from the authenticated user. A
  client may not create or cancel a reservation as another user.
- A reservation's start time must be earlier than its end time.
- New reservations must start in the future.
- Active reservations for the same room may not overlap.
- Reservations for different rooms may overlap.
- Reservation intervals use `[start, end)` semantics. Back-to-back
  reservations are therefore allowed: one may start when another ends.
- Only the organizer may cancel their own active, future reservation.
- Cancelled reservations no longer block the room.
- If two users request overlapping times concurrently, exactly one should
  succeed.
- Schedule results should use a deterministic chronological order.
- Invalid actions should be rejected by the API and communicated in the UI.
- Application data should survive a browser refresh and backend restart.
- Time values must behave consistently through creation, persistence,
  retrieval, and display. Document your time-zone assumptions in
  `SUBMISSION.md`.

Where behavior is not specified, make a reasonable decision and document it in
`SUBMISSION.md`. Be prepared to explain important assumptions and tradeoffs.

## Technical constraints

- Use the provided React + TypeScript frontend and FastAPI backend.
- The application must run through Docker Compose.
- The backend must expose the fixed room inventory through `GET /api/rooms`.
- You own the API design, database schema and integrity strategy, time
  representation, authentication approach, concurrency strategy, and frontend
  state design.
- Add automated tests for the highest-risk behavior in your implementation.
- Do not use a library or generated product that implements the assignment's
  core workflows for you.
- Do not commit secrets.

## Out of scope

- Creating, editing, or deleting rooms.
- Editing, rescheduling, or creating recurring reservations.
- Email, calendar, or other notifications.
- Password reset, email verification, OAuth, or organization-level roles.
- Production deployment and large-scale infrastructure.
- Pagination and historical-data optimization.

## Submission

Before time expires:

1. Confirm that the application starts from a clean checkout.
2. Add a short `SUBMISSION.md` describing your architecture, important choices,
   time-zone assumptions, known limitations, and what you would do next.
3. Commit and push your final work.

After a short review break, you will run and demonstrate the application and
discuss its implementation with an engineer.
