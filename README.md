# School Management System

A comprehensive Django-based School Management System with custom user authentication and profile management.

## Project Overview

This project is a School Management System built with Django. It features:

- Custom User Model with separate username and email fields
- User Profile linked to the Custom User
- Django AllAuth integration for authentication
- Separate settings for development and production environments
- CDN usage for static files

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/School-Management-Django.git
   cd School-Management-Django
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the requirements:
   ```
   pip install -r requirements.txt
   ```

## Environment Setup

1. Create a `.env` file in the project root and add the following:
   ```
   DEBUG=True
   SECRET_KEY=your_secret_key_here
   DATABASE_URL=sqlite:///db.sqlite3
   ```

2. For production, update the `.env` file with appropriate values.

## Database Setup

1. Run migrations:
   ```
   python manage.py makemigrations
   python manage.py migrate
   ```

2. Create a superuser:
   ```
   python manage.py createsuperuser
   ```

## Running the Development Server

```
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` in your browser.

## Project Structure

- `config/`: Contains project-wide settings
  - `settings/`: Separate settings for base, local, and production
- `main_app/`: Main application directory
  - `models.py`: Defines CustomUser and Profile models
- `static/`: Static files (CSS, JS, images)
- `templates/`: HTML templates

## Custom User Model and Profile

The project uses a custom user model (`CustomUser`) with both username and email fields. A separate `Profile` model is linked to `CustomUser` via a one-to-one relationship.

## Django AllAuth Integration

Django AllAuth is integrated for enhanced authentication features. Configure additional settings in `config/settings/base.py` as needed.

## Deployment Considerations

- Set `DEBUG=False` in production
- Use a production-grade database (e.g., PostgreSQL)
- Configure `ALLOWED_HOSTS`
- Set up proper email backend
- Use environment variables for sensitive information

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
