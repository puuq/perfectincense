# PerfectIncense Cleaning Service

A Django-based web application that allows customers to book room and apartment cleaning services.

## 🚀 Features

- Customer-facing booking form (name, email, address, service type, date/time)
- Admin dashboard to view, approve, or reject bookings
- Confirmation emails to customers
- Responsive design with HTML, CSS, and JavaScript interactions
- Data stored using Django ORM and SQLite/ PostgreSQL
- Environment-based settings (local development vs production)

## 📦 Tech Stack

- **Backend**: Django (Python)
- **Frontend**: HTML, CSS (Tailwind or Bootstrap?), JavaScript
- **Database**: SQLite (dev), optional: PostgreSQL / MySQL (production)
- **Email**: Django's SMTP integration (e.g., SendGrid)
- **Deployment**: Optional Docker setup, or Vercel/Heroku

## 🌟 Usage

1. Clone the repo:
    ```bash
    git clone https://github.com/puuq/perfectincense.git
    cd perfectincense
    ```

2. Create a virtual environment and install dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate  # or `.\venv\Scripts\activate` on Windows
    pip install -r requirements.txt
    ```

3. Configure settings:
    - Rename `.env.example` to `.env`
    - Set `SECRET_KEY`, database URL, email provider credentials

4. Run migrations:
    ```bash
    python manage.py migrate
    ```

5. (Dev) Load sample data:
    ```bash
    python manage.py loaddata fixtures/initial_data.json
    ```

6. Run the development server:
    ```bash
    python manage.py runserver
    ```

7. Visit `http://localhost:8000`

---

## 📑 Project Structure

perfectincense/
├── manage.py
├── perfectincense/ # Django project settings
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── bookings/ # App for handling cleaning orders
│ ├── models.py # Defines Booking
│ ├── views.py # Form handlers and admin views
│ ├── templates/
│ │ └── bookings/
│ └── static/
├── templates/ # Base templates
├── static/
├── requirements.txt
└── README.md
