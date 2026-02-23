BASE URLs
LOcal: http://localhost:4000/api/v1
Production:https://my domain/api/v1


CORS CONFIG
http://localhost:3000
https://ecoreward.vercel.app

AUTHENTICATION
All endpoints require a JWT:
Header:Authorization: Bearer<token>

POST /api/v1/auth/register

POST /api/v1/auth/login

GET /api/v1/users/me

ROLES/auth
Citizen
POST /api/v1/auth/register

POST /api/v1/auth/login

GET /api/v1/users/me

Collector
GET /api/v1/pickups/available

PATCH /api/v1/pickups/:id/assign

PATCH /api/v1/pickups/:id/collect

PATCH /api/v1/pickups/:id/deliver

GET /api/v1/pickups/assigned/me

GET /api/v1/pickups/assigned/me?active=true
 
SME 
PATCH /api/v1/sme/pickups/:id/settle

PATCH /api/v1/sme/pickups/:id/receive

PATCH /api/v1/sme/pickups/:id/pay

PRICING
POST /api/v1/pricing

GET /api/v1/pricing

Admin
GET /api/v1/admin/metrics

COMMON ERROR FROMAT
json {"message":"..."}

SATATUS CODES
200 OK success
201 Created successfully
400 Bad Request Invalid state transition
401 Unauthorized Invalid token
403 Forbidden role restriction
404 Not Found
409 Conflict duplicate entry


1) Health
GET /api/v1/health

Public

Response 200

{ "status": "ok" }

2) Authentication
POST /api/v1/auth/register
Public
Creates a user (default role: CITIZEN).
Request Body
{
  "name": "Test User",
  "email": "test@mail.com",
  "phone": "0712345678",
  "password": "password123"
}

Rules:


name required


password required (min 6)


Must provide at least one of: email or phone


Response 201
{
  "id": 1,
  "name": "Test User",
  "role": "CITIZEN"
}

Errors


400 invalid payload


409 email already in use / phone already in use



POST/api/v1/auth/login
Public
Returns JWT token.
Request Body (email login)
{ "email": "test@mail.com", "password": "password123" }

Request Body (phone login)
{ "phone": "0712345678", "password": "password123" }

Response 200
{ "token": "<JWT>" }

Errors


400 invalid payload


401 invalid credentials



3) Users
GET /users/me
Protected (Any authenticated role)
Returns the currently authenticated user profile.
Headers


Authorization: Bearer <JWT>


Response 200
{
  "id": 1,
  "name": "Test User",
  "email": "test@mail.com",
  "phone": null,
  "role": "CITIZEN",
  "createdAt": "2026-02-13T08:03:21.000Z"
}

Errors


401 missing/invalid token


404 user not found (edge case)



4) Pickups
Pickup Status Lifecycle
Current enforced lifecycle:


REQUESTED → ASSIGNED → COLLECTED → DELIVERED >TRANSFERRED >received >PAID

(Next step) DELIVERED → CONFIRMED (Recycling Center)


Pickup Fields (Response Shape)
{
  "id": 3,
  "citizen_id": 1,
  "collector_id": 2,
  "address": "Westlands",
  "waste_type": "Glass",
  "estimated_kg": 3,
  "status": "ASSIGNED",
  "createdAt": "2026-02-13T09:37:52.000Z",
  "updatedAt": "2026-02-13T09:40:28.903Z"
}


POST /pickups
Protected: CITIZEN
Citizen creates a pickup request. Backend sets:


citizen_id from JWT


status = REQUESTED


Headers


Authorization: Bearer <JWT>


Request Body
{
  "address": "Nairobi CBD, Moi Avenue",
  "waste_type": "Plastic",
  "estimated_kg": 2.5
}

Response 201
Returns the created pickup object (see shape above).
Errors


400 invalid payload


401 missing/invalid token


403 wrong role (non-citizen)



GET /pickups/mine
Protected: CITIZEN
Lists pickups created by the logged-in citizen.
Headers


Authorization: Bearer <JWT>


Response 200
[
  { "id": 3, "status": "REQUESTED", "...": "..." }
]

Errors


401 missing/invalid token


403 wrong role



GET /pickups/available
Protected: ADMIN or COLLECTOR
Lists pickups that are available to be assigned (filter: status=REQUESTED).
Headers


Authorization: Bearer <JWT>


Response 200
[
  { "id": 10, "status": "REQUESTED", "...": "..." }
]

May return [] if none available.
Errors


401 missing/invalid token


403 wrong role



PATCH /pickups/:id/assign
Protected: ADMIN or COLLECTOR
Assigns a pickup: REQUESTED → ASSIGNED
Rules


Pickup must exist


Pickup must be REQUESTED


If caller is COLLECTOR, backend sets collector_id = req.user.id


If caller is ADMIN, status updates to ASSIGNED and collector_id may remain null (current behavior)


Headers


Authorization: Bearer <JWT>


Response 200
Returns updated pickup with status: "ASSIGNED".
Errors


400 invalid transition (not REQUESTED)


401 missing/invalid token


403 wrong role


404 pickup not found



PATCH /pickups/:id/collect
Protected: COLLECTOR
Updates status: ASSIGNED → COLLECTED
Rules


Caller must be COLLECTOR


Ownership enforced: pickup.collector_id must equal caller user id


Pickup must be ASSIGNED


Headers


Authorization: Bearer <JWT>


Response 200
Pickup with status: "COLLECTED"
Errors


400 invalid transition


401 missing/invalid token


403 not your assigned pickup / wrong role


404 pickup not found



PATCH /pickups/:id/deliver
Protected: COLLECTOR
Updates status: COLLECTED → DELIVERED
Rules


Caller must be COLLECTOR


Ownership enforced


Pickup must be COLLECTED


Headers


Authorization: Bearer <JWT>


Response 200
Pickup with status: "DELIVERED"
Errors


400 invalid transition


401 missing/invalid token


403 not your assigned pickup / wrong role


404 pickup not found



Frontend Integration Notes
Required Headers


Always send:


Content-Type: application/json (for POST/PATCH with JSON body)




For protected endpoints:


Authorization: Bearer <token>




Token handling


Frontend should store JWT after /auth/login


On app load, call /users/me to:


Validate token


Fetch role


Route user to correct dashboard




Expected Error Handling


If 401: force logout → redirect to login


If 403: show “Access denied” (role restriction)


If 400: show validation/state error message from backend


If 404: show “Not found” message



TO be implemented:


POST /pickups/:id/confirm (RECYCLING_CENTER): DELIVERED → CONFIRMED

SME (ADMIN acting as SME)
PATCH /sme/pickups/:id/settle

Role: ADMIN
DELIVERED → TRANSFERRED
Stores:

material_type

unit_name

unit_count

unit_price_snapshot

calculated_payout

recycling_center_id

PATCH/api/v1/sme/pickups/:id/receive

Role: ADMIN
TRANSFERRED → RECEIVED
Requires settlement fields to exist

PATCH/api/v1/sme/pickups/:id/pay

Role: ADMIN
RECEIVED → PAID
Requires valid payout


Rewards Ledger:


GET /me/balance


GET /me/ledger




AI endpoints:


POST /ai/waste-suggest


POST /ai/pickup-priority

